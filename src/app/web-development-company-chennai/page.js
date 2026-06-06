import WebDevelopmentClient from "./WebDevelopmentClient";
import { getFilteredPosts } from "@/lib/blog";

export const metadata = {
  title: "Web Development Company Chennai | React, Next.js & Node.js | Trimsel",
  description:
    "Custom web development services in Chennai. React, Next.js, Node.js, WordPress, and full-stack web applications for startups, SMEs, and enterprises. 180+ web projects delivered.",
  alternates: {
    canonical: "https://www.trimsel.com/web-development-company-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/web-development-company-chennai",
    title: "Web Development Company Chennai | React, Next.js & Node.js | Trimsel",
    description:
      "Custom web development services in Chennai. React, Next.js, Node.js, WordPress, and full-stack web applications for startups, SMEs, and enterprises. 180+ web projects delivered.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Web development services by Trimsel Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Development",
  "provider": {
    "@type": "Organization",
    "name": "Trimsel",
    "url": "https://trimsel.com",
  },
  "areaServed": {
    "@type": "City",
    "name": "Chennai",
  },
  "description": "Custom web development services in Chennai. React, Next.js, Node.js, WordPress, and full-stack web applications for startups, SMEs, and enterprises. 180+ web projects delivered.",
};

export default function WebDevelopmentPage() {
  const posts = getFilteredPosts(["Web Development"], 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebDevelopmentClient posts={posts} />
    </>
  );
}
