export default function robots() {
  return {
    rules: [
      // Standard crawlers — allow everything except internals
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },

      // AI citation / on-demand crawlers — allow full access
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "Claude-User",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },

      // AI training data scrapers — block entirely
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "Meta-ExternalAgent",
        disallow: "/",
      },
    ],
    sitemap: "https://www.trimsel.com/sitemap.xml",
    host: "https://www.trimsel.com",
  };
}
