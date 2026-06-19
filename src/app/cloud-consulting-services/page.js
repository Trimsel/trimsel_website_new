import CloudConsultingClient from "./CloudConsultingClient";
import { getFilteredPosts } from "@/lib/blog";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "Cloud Consulting & Migration Services in Chennai | AWS, Azure & GCP | Trimsel",
  description:
    "Trimsel is a cloud consulting company in Chennai providing AWS, Azure, and GCP migration, infrastructure management, and cost optimisation. 40% average cost savings. Free consultation.",
  alternates: {
    canonical: "https://www.trimsel.com/cloud-consulting-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/cloud-consulting-services",
    title: "Cloud Consulting & Migration Services in Chennai | AWS, Azure & GCP | Trimsel",
    description:
      "Trimsel is a cloud consulting company in Chennai providing AWS, Azure, and GCP migration, infrastructure management, and cost optimisation. 40% average cost savings. Free consultation.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Cloud consulting services by Trimsel Chennai",
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
  serviceType: "Cloud Consulting",
  provider: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://trimsel.com",
  },
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
  description:
    "Cloud consulting company providing AWS, Azure, and GCP migration, infrastructure management, and cost optimisation.",
  offers: {
    "@type": "AggregateOffer",
    offerCount: 6,
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Strategy & Architecture Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Migration Services (AWS, Azure, GCP)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Multi-Cloud & Hybrid Cloud Implementation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "DevOps & Cloud Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Security & Compliance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Cloud Support",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.cloud.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.trimsel.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cloud Consulting Services",
      item: "https://www.trimsel.com/cloud-consulting-services",
    },
  ],
};

export default function CloudConsultingPage() {
  const posts = getFilteredPosts(["Cloud", "DevOps"], 3);
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CloudConsultingClient posts={posts} />
    </>
  );
}
