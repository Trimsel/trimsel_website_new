import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Portfolio | Mobile Apps, AI, Web & Cloud Projects | Trimsel Chennai",
  description:
    "Explore Trimsel's portfolio — mobile apps, AI, web platforms, and cloud projects built in Chennai. EzyHelpers, KarIOT, Xaber, Mocial case studies.",
  alternates: {
    canonical: "https://www.trimsel.com/portfolio",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/portfolio",
    title: "Portfolio | Mobile Apps, AI, Web & Cloud Projects | Trimsel Chennai",
    description:
      "Explore Trimsel's portfolio — mobile apps, AI, web platforms, and cloud projects built in Chennai. EzyHelpers, KarIOT, Xaber, Mocial case studies.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel portfolio — mobile app, AI, web, and cloud projects",
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
      name: "Portfolio",
      item: "https://www.trimsel.com/portfolio",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Trimsel Portfolio — Projects We've Built",
  description:
    "Mobile apps, AI systems, web platforms, and cloud infrastructure projects built by Trimsel's Chennai-based engineering team.",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "EzyHelpers — On-Demand Home Services Platform",
      url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "KarIOT — AI-Powered Smart Water Management",
      url: "https://www.trimsel.com/portfolio/kariot-case-study",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Xaber — White-Label Ride-Hailing Platform",
      url: "https://www.trimsel.com/portfolio/xaber-case-study",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Mocial — Monolith to Microservices Migration",
      url: "https://www.trimsel.com/portfolio/mocial-case-study",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <PortfolioClient />
    </>
  );
}
