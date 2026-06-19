import WebDevelopmentClient from "./WebDevelopmentClient";
import { getFilteredPosts } from "@/lib/blog";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "Web Development Company in Chennai | Trimsel",
  description:
    "Trimsel builds custom websites and web applications for startups, SMEs, and enterprises — using React, Next.js, Node.js, and WordPress. 180+ web projects delivered with 95% on-time delivery.",
  alternates: {
    canonical: "https://www.trimsel.com/web-development-company-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/web-development-company-chennai",
    title: "Web Development Company in Chennai | Trimsel",
    description:
      "Trimsel builds custom websites and web applications for startups, SMEs, and enterprises — using React, Next.js, Node.js, and WordPress. 180+ web projects delivered with 95% on-time delivery.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.web.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
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
  "description": "Trimsel builds custom websites and web applications for startups, SMEs, and enterprises — using React, Next.js, Node.js, and WordPress. 180+ web projects delivered with 95% on-time delivery.",
};

export default function WebDevelopmentPage() {
  const posts = getFilteredPosts(["Web Development"], 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WebDevelopmentClient posts={posts} />
    </>
  );
}
