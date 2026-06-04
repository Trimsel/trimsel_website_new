import HomeClient from "./HomeClient";
import { faqData } from "@/data/faqData";

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
  title: "Custom Software Development Company Chennai | Trimsel",
  description:
    "Trimsel engineers custom software, mobile apps, AI solutions, web platforms, cloud infrastructure, and DevOps automation for startups and enterprises in Chennai. 200+ projects delivered.",
  alternates: {
    canonical: "https://www.trimsel.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/",
    title: "Custom Software Development Company Chennai | Trimsel",
    description:
      "Trimsel engineers custom software, mobile apps, AI solutions, web platforms, cloud infrastructure, and DevOps automation for startups and enterprises in Chennai. 200+ projects delivered.",
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
