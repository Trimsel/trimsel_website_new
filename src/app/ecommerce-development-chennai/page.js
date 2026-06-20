import EcommerceClient from "./EcommerceClient";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "E-commerce Website Development in Chennai | Trimsel",
  description:
    "Trimsel builds high-converting e-commerce websites and apps — Shopify, WooCommerce, headless React/Next.js. Razorpay, UPI, EMI integrations. 200+ projects delivered from Chennai.",
  alternates: {
    canonical:
      "https://www.trimsel.com/ecommerce-development-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/ecommerce-development-chennai",
    title: "E-commerce Website Development in Chennai | Trimsel",
    description:
      "Trimsel builds high-converting e-commerce websites and apps — Shopify, WooCommerce, headless React/Next.js. Razorpay, UPI, EMI integrations. 200+ projects delivered from Chennai.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "E-commerce development services by Trimsel Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
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
      name: "E-commerce Development",
      item: "https://www.trimsel.com/ecommerce-development-chennai",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "E-commerce Website Development",
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
    "Trimsel builds high-converting e-commerce websites and mobile apps using Shopify, WooCommerce, and headless React/Next.js — with full payment gateway integration, SEO, and post-launch support.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.ecommerce.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EcommerceClient />
    </>
  );
}
