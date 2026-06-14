import CloudConsultingClient from "./CloudConsultingClient";
import { getFilteredPosts } from "@/lib/blog";

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
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I choose the best cloud consulting company in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for vendor-neutral teams that recommend based on workload needs, not partnerships. Trimsel delivers 40% average cost savings with 99.95% uptime across production environments.",
      },
    },
    {
      "@type": "Question",
      name: "How much does cloud migration cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused migration of 2-5 applications typically ranges from ₹5-15 lakhs. Enterprise migrations can range from ₹15-50 lakhs. We provide a clear estimate after infrastructure assessment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does cloud migration take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Straightforward migrations take 4-8 weeks. Complex enterprise migrations take 3-6 months with phased approach and rollback plans.",
      },
    },
    {
      "@type": "Question",
      name: "Which cloud platform should I choose — AWS, Azure, or GCP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AWS has broadest services, Azure integrates with Microsoft tools, GCP excels in data analytics and Kubernetes. We assess your workloads and recommend based on actual needs.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between cloud migration and cloud-native development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Migration moves existing apps to cloud. Cloud-native builds new apps specifically for cloud using containers, microservices, and serverless. We do both.",
      },
    },
    {
      "@type": "Question",
      name: "Can you reduce our current cloud costs without affecting performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — most businesses overspend by 30-50%. We run cost audits identifying specific savings. Clients see 40% average reduction within 90 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide managed cloud support after migration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 24/7 monitoring, security patching, performance optimisation, and incident response on agreed SLAs with a dedicated cloud operations contact.",
      },
    },
    {
      "@type": "Question",
      name: "Is our data secure during and after cloud migration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Security is built into every migration stage — encrypted transfers, access controls, network isolation, and compliance with HIPAA, SOC 2, PCI-DSS, and GDPR.",
      },
    },
    {
      "@type": "Question",
      name: "Can cloud infrastructure support AI and automation workloads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — AWS SageMaker, Google Vertex AI, and Azure ML provide managed ML environments. We design infrastructure supporting GPU instances, data lakes, and model serving.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Trimsel for cloud consulting services in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vendor-neutral recommendations, 40% average cost savings, 99.95% uptime, and post-migration support with dedicated operations contact. 92% client retention rate.",
      },
    },
  ],
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
