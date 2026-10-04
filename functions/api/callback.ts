// Exchanges GitHub's OAuth code for a token and hands it to the Decap CMS popup opener.

type Env = { GITHUB_CLIENT_ID: string; GITHUB_CLIENT_SECRET: string };

function page(status: "success" | "error", content: object, origin: string) {
  const message = `authorization:github:${status}:${JSON.stringify(content)}`;
  // Decap's handshake: we announce ourselves, it replies, we send the result to that origin only.
  const html = `<!doctype html><html><body><script>
(function () {
  var origin = ${JSON.stringify(origin)};
  function receive(e) {
    if (e.origin !== origin) return;
    window.opener.postMessage(${JSON.stringify(message)}, origin);
    window.removeEventListener("message", receive, false);
  }
  window.addEventListener("message", receive, false);
  window.opener.postMessage("authorizing:github", origin);
})();
</script></body></html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html;charset=utf-8", "Set-Cookie": "oauth_state=; Path=/api; Max-Age=0" },
  });
}

export const onRequestGet = async ({ request, env }: { request: Request; env: Env }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const cookieState = request.headers.get("Cookie")?.match(/(?:^|;\s*)oauth_state=([^;]+)/)?.[1];

  if (!code || !state || state !== cookieState) {
    return page("error", { message: "Sign-in expired or was tampered with. Please try again." }, url.origin);
  }

  const res = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", "User-Agent": "halofit-cms" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const data = (await res.json()) as { access_token?: string; error_description?: string };

  if (!data.access_token) {
    return page("error", { message: data.error_description ?? "GitHub sign-in failed." }, url.origin);
  }
  return page("success", { token: data.access_token, provider: "github" }, url.origin);
};
