import HomeClient from "./HomeClient";
import { faqData } from "@/data/faqData";
import { getFilteredPosts } from "@/lib/blog";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.default.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};

export const metadata = {
  title: "Trimsel — Software Development Company in India | Mobile, AI, Cloud & DevOps",
  description:
    "Trimsel is a full-service software development company in Chennai, India. We build custom mobile apps, AI solutions, cloud infrastructure, and DevOps pipelines for startups and enterprises. Book a free strategy call.",
  alternates: {
    canonical: "https://www.trimsel.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/",
    title: "Trimsel — Software Development Company in India | Mobile, AI, Cloud & DevOps",
    description:
      "Trimsel is a full-service software development company in Chennai, India. We build custom mobile apps, AI solutions, cloud infrastructure, and DevOps pipelines for startups and enterprises. Book a free strategy call.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel software development team in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

export default function HomePage() {
  const posts = getFilteredPosts([], 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient posts={posts} />
    </>
  );
}
