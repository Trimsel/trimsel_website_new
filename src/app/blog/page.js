import { getAllPosts } from "@/lib/blog";
import { faqData } from "@/data/faqData";
import BlogListClient from "./BlogListClient";
import Faq from "@/components/Faq";
import Link from "next/link";

export const metadata = {
  title: "Blog — Software Development Insights | Trimsel",
  description:
    "Practical guides on mobile app development, web development, AI, cloud consulting, DevOps, and digital marketing — written by Trimsel's engineering team in Chennai.",
  alternates: {
    canonical: "https://www.trimsel.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/blog",
    title: "Blog — Software Development Insights | Trimsel",
    description:
      "Practical guides on mobile app development, web development, AI, cloud consulting, DevOps, and digital marketing — written by Trimsel's engineering team in Chennai.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel Blog — Software Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Trimsel Blog — Software Development Insights",
  description:
    "Practical guides on mobile app development, web development, AI, cloud consulting, DevOps, and digital marketing from Trimsel's engineering team.",
  url: "https://www.trimsel.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://www.trimsel.com",
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
      name: "Blog",
      item: "https://www.trimsel.com/blog",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.blog.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-[#F5F7FA] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-100 pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          {/* Breadcrumb */}
          <p className="text-sm font-medium text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#1C75BC] transition-colors">
              Home
            </Link>
            {" • "}
            <span className="text-gray-700">Blog</span>
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Insights From Our
            <span className="text-[#1C75BC]"> Engineering Team</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg font-medium">
            Practical guides on mobile apps, web development, AI, cloud, DevOps,
            and digital marketing — written by the people building these
            solutions every day.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <BlogListClient posts={posts} />
      </section>

      <Faq />
    </main>
  );
}
