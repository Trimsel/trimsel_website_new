import MobileAppDevelopmentClient from "./MobileAppDevelopmentClient";
import { getFilteredPosts } from "@/lib/blog";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "Mobile App Development Company in Chennai | Trimsel",
  description: "Trimsel is a mobile app development company in Chennai. We build iOS, Android, Flutter, and React Native apps for startups and enterprises — from MVP to enterprise-grade. 200+ apps delivered. Book a free consultation.",
  alternates: {
    canonical: "https://www.trimsel.com/mobile-app-development-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/mobile-app-development-chennai",
    title: "Mobile App Development Company in Chennai | Trimsel",
    description: "Trimsel is a mobile app development company in Chennai. We build iOS, Android, Flutter, and React Native apps for startups and enterprises — from MVP to enterprise-grade. 200+ apps delivered. Book a free consultation.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/mobilehero.webp",
        width: 1200,
        height: 630,
        alt: "Trimsel team delivering mobile app solutions in Chennai",
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
  mainEntity: faqData.mobile.map((faq) => ({
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
  "serviceType": "Mobile App Development",
  "provider": {
    "@type": "Organization",
    "name": "Trimsel",
    "url": "https://trimsel.com",
  },
  "areaServed": {
    "@type": "City",
    "name": "Chennai",
  },
  "description": "Top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & cross platform apps with exceptional UX. From MVP to enterprise apps. 200+ successful projects delivered.",
};

export default function MobileAppDevelopmentPage() {
  const posts = getFilteredPosts(["Mobile App", "Mobile App Development"], 3);
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
      <MobileAppDevelopmentClient posts={posts} />
    </>
  );
}
