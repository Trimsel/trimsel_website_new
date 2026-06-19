import DevOpsClient from "./DevOpsClient";
import { getFilteredPosts } from "@/lib/blog";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "DevOps Consulting Services in India | CI/CD, Kubernetes & Terraform | Trimsel",
  description:
    "Trimsel provides DevOps consulting services in India — CI/CD pipelines, Kubernetes, Terraform IaC, and DevSecOps. 60+ pipelines built. 99.95% uptime. Mocial: EC2 to EKS migration. Free consultation.",
  alternates: {
    canonical: "https://www.trimsel.com/devops-consulting-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/devops-consulting-services",
    title: "DevOps Consulting Services in India | CI/CD, Kubernetes & Terraform | Trimsel",
    description:
      "Trimsel provides DevOps consulting services in India — CI/CD pipelines, Kubernetes, Terraform IaC, and DevSecOps. 60+ pipelines built. 99.95% uptime. Mocial: EC2 to EKS migration. Free consultation.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "DevOps consulting services by Trimsel India",
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
  serviceType: "DevOps Consulting",
  provider: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://trimsel.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "DevOps consulting services — CI/CD pipelines, Kubernetes, Terraform IaC, and DevSecOps automation.",
  offers: {
    "@type": "AggregateOffer",
    offerCount: 7,
    offers: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "CI/CD Pipeline Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Infrastructure as Code (Terraform, Ansible)" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Kubernetes & Container Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "DevSecOps Integration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Monitoring & Observability" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Cloud Infrastructure Automation" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Microservices Architecture & Migration" },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.devops.map((faq) => ({
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
      name: "DevOps Consulting Services",
      item: "https://www.trimsel.com/devops-consulting-services",
    },
  ],
};

export default function DevOpsConsultingPage() {
  const posts = getFilteredPosts(["DevOps", "Cloud"], 3);
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
      <DevOpsClient posts={posts} />
    </>
  );
}
