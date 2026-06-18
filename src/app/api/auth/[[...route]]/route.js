import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const route = (await params).route || [];
  const routePath = route.join("/");
  const { searchParams } = new URL(request.url);

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.trimsel.com";

  // Step 1: Initial auth request — redirect to GitHub
  if (routePath === "" || routePath === "auth") {
    const scope = searchParams.get("scope") || "repo";
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(siteUrl + "/api/auth/callback")}&scope=${scope}`;
    return NextResponse.redirect(authUrl);
  }

  // Step 2: Callback from GitHub — exchange code for token
  if (routePath === "callback") {
    const code = searchParams.get("code");
    if (!code) {
      return new Response("Missing code parameter", { status: 400 });
    }

    try {
      const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
        }),
      });

      const tokenData = await tokenRes.json();

      if (tokenData.error) {
        return new Response(`OAuth error: ${tokenData.error_description}`, { status: 400 });
      }

      // Return HTML that sends the token back to CMS via postMessage
      const html = `
<!DOCTYPE html>
<html>
<head><title>CMS Auth</title></head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("receiveMessage", e);
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: "github" })}',
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`;

      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    } catch (error) {
      return new Response(`Auth failed: ${error.message}`, { status: 500 });
    }
  }

  return new Response("Not found", { status: 404 });
}
