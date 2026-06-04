export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.trimsel.com/sitemap.xml",
    host: "https://www.trimsel.com",
  };
}
