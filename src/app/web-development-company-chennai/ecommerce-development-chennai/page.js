import EcommerceClient from "./EcommerceClient";
import { getFilteredPosts } from "@/lib/blog";
import { faqData } from "@/data/faqData";

export const metadata = {
  title: "E-Commerce Development Company in Chennai | Shopify, WooCommerce & Custom | Trimsel",
  description:
    "Trimsel builds e-commerce websites in Chennai — Shopify, WooCommerce & custom platforms. Razorpay, Stripe integration. Mobile apps. Free consultation.",
  alternates: {
    canonical: "https://www.trimsel.com/web-development-company-chennai/ecommerce-development-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/web-development-company-chennai/ecommerce-development-chennai",
    title: "E-Commerce Development Company in Chennai | Shopify, WooCommerce & Custom | Trimsel",
    description:
      "Trimsel builds e-commerce websites in Chennai — Shopify, WooCommerce & custom platforms. Razorpay, Stripe integration. Mobile apps. Free consultation.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "E-commerce development company in Chennai — Trimsel",
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
      name: "Web Development",
      item: "https://www.trimsel.com/web-development-company-chennai",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "E-Commerce Development",
      item: "https://www.trimsel.com/web-development-company-chennai/ecommerce-development-chennai",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "E-Commerce Development",
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
    "E-commerce website and app development company in Chennai. Shopify, WooCommerce, and custom React + Node.js platforms with Razorpay, Stripe, and PayU integration.",
  offers: {
    "@type": "AggregateOffer",
    offerCount: 6,
    offers: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "E-Commerce Website Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Shopify Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "WooCommerce Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom E-Commerce Platform" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "E-Commerce Mobile App" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Payment Gateway Integration" },
      },
    ],
  },
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
  const posts = getFilteredPosts(["Web Development", "E-Commerce"], 3);
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
      <EcommerceClient posts={posts} />
    </>
  );
}
