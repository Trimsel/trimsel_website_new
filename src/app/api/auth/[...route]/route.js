// Decap CMS GitHub OAuth handler
// Handles /api/auth (begin) and /api/auth/callback (complete)
// Requires: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, NEXT_PUBLIC_SITE_URL

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

async function handleBegin(request) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("Missing GITHUB_CLIENT_ID", { status: 500 });
  }
  const scopes = process.env.OAUTH_GITHUB_SCOPES || "repo,user";
  const callbackUrl = encodeURIComponent(`${siteUrl}/api/auth/callback`);
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${callbackUrl}`;
  return Response.redirect(authUrl, 302);
}

async function handleCallback(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("Missing code parameter", { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response("Missing OAuth credentials", { status: 500 });
  }

  // Exchange code for access token
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error || !tokenData.access_token) {
    return new Response(`OAuth error: ${tokenData.error_description || "Unknown error"}`, { status: 400 });
  }

  // Post message to opener window (Decap CMS expects this format)
  const script = `
    <script>
      (function() {
        function receiveMessage(e) {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: "github" }).replace(/'/g, "\\'")}',
            e.origin
          );
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  `;

  return new Response(script, {
    headers: { "Content-Type": "text/html" },
  });
}

export async function GET(request, { params }) {
  const route = params?.route || [];
  if (route[0] === "callback") {
    return handleCallback(request);
  }
  return handleBegin(request);
}
