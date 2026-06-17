// Decap CMS GitHub OAuth handler for Next.js App Router
//
// Flow:
//   /api/auth          → redirects user to GitHub OAuth consent screen
//   /api/auth/callback → exchanges code for token, posts message back to CMS popup
//
// Required env vars:
//   GITHUB_CLIENT_ID
//   GITHUB_CLIENT_SECRET
//   NEXT_PUBLIC_SITE_URL  (e.g. https://www.trimsel.com)

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

async function handleBegin() {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("Missing GITHUB_CLIENT_ID environment variable", { status: 500 });
  }
  const scopes = process.env.OAUTH_GITHUB_SCOPES || "repo,user";
  const callbackUrl = `${siteUrl}/api/auth/callback`;
  const authUrl =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${encodeURIComponent(clientId)}` +
    `&scope=${encodeURIComponent(scopes)}` +
    `&redirect_uri=${encodeURIComponent(callbackUrl)}`;
  return Response.redirect(authUrl, 302);
}

async function handleCallback(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  if (!code) {
    return new Response("Missing OAuth code parameter", { status: 400 });
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
    return new Response(
      `GitHub OAuth error: ${tokenData.error_description || tokenData.error || "Unknown error"}`,
      { status: 400 }
    );
  }

  // Decap CMS expects the popup to:
  //  1. Post "authorizing:github" to the opener
  //  2. Listen for a reply from the opener (which echoes back the origin)
  //  3. Post "authorization:github:success:{...}" back with the correct origin
  //
  // The token payload is embedded in a <script data-token> attribute to avoid
  // any injection risks from interpolating directly into a JS string literal.
  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body>
  <p>Completing GitHub login…</p>
  <script
    id="token-data"
    type="application/json"
    data-token="${tokenData.access_token.replace(/"/g, "&quot;")}"
    data-provider="github"
  ></script>
  <script>
    (function () {
      var el = document.getElementById('token-data');
      var token = el.getAttribute('data-token');
      var provider = el.getAttribute('data-provider');

      function sendToken(origin) {
        var payload = JSON.stringify({ token: token, provider: provider });
        window.opener.postMessage('authorization:' + provider + ':success:' + payload, origin);
      }

      function receiveMessage(e) {
        if (e.data === 'authorizing:' + provider) {
          sendToken(e.origin);
        }
      }

      window.addEventListener('message', receiveMessage, false);
      // Initiate the handshake — CMS popup listens for this
      window.opener.postMessage('authorizing:' + provider, '*');
    })();
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function GET(request, context) {
  const route = (await context.params)?.route || [];
  if (route[0] === "callback") {
    return handleCallback(request);
  }
  return handleBegin();
}
