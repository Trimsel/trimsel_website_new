import DevOpsClient from "./DevOpsClient";
import { getFilteredPosts } from "@/lib/blog";

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
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I choose the best DevOps consulting company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for real production deployments, not just certifications. Trimsel has built 60+ CI/CD pipelines with 99.95% uptime targets, including the documented Mocial EC2-to-EKS migration.",
      },
    },
    {
      "@type": "Question",
      name: "How much do DevOps consulting services cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CI/CD setup starts from ₹3-8 lakhs. Full DevOps transformation ranges from ₹10-30 lakhs. Enterprise implementations vary. Clear estimate provided after infrastructure audit.",
      },
    },
    {
      "@type": "Question",
      name: "How long does DevOps implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Single-app CI/CD pipeline: 2-4 weeks. Full DevOps foundation: 6-12 weeks. Enterprise transformations with microservices migration: 3-6 months in phases.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between CI/CD and DevOps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CI/CD automates build, test, and deployment. DevOps is broader — including IaC, monitoring, security automation, incident response, and engineering culture.",
      },
    },
    {
      "@type": "Question",
      name: "Should we use Kubernetes or is it overkill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kubernetes makes sense for multiple services needing independent scaling. For single monolithic apps with steady traffic, simpler deployment may be more appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "What is Infrastructure as Code and do we need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IaC manages infrastructure through code (Terraform, CloudFormation) instead of manual setup. If your team provisions manually, IaC is the highest-impact DevOps improvement.",
      },
    },
    {
      "@type": "Question",
      name: "What is DevSecOps and how does it differ from traditional security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevSecOps integrates security checks into the CI/CD pipeline — automated scanning runs on every commit. Issues caught in minutes, not weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can you set up monitoring for our existing infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Prometheus, Grafana, ELK Stack, OpenTelemetry, and PagerDuty integrated with existing infrastructure. 40-60% reduction in MTTD within the first month.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing managed DevOps support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 24/7 monitoring, incident response, security patching, and pipeline maintenance on agreed SLAs with dedicated DevOps contact.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Trimsel for DevOps consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "60+ production pipelines, 99.95% uptime, vendor-neutral tooling, documented Mocial case study, and 92% client retention with ongoing managed support.",
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
