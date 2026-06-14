import ContactUsClient from "./ContactUsClient";

export const metadata = {
  title: "Contact Trimsel | Software Development Company in Chennai, India",
  description:
    "Contact Trimsel — software development company in Chennai. Mobile apps, AI, web, cloud, DevOps & digital marketing. Reply within 24 hours. Free consultation.",
  alternates: {
    canonical: "https://www.trimsel.com/contact-us",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/contact-us",
    title: "Contact Trimsel | Software Development Company in Chennai, India",
    description:
      "Contact Trimsel — software development company in Chennai. Mobile apps, AI, web, cloud, DevOps & digital marketing. Reply within 24 hours. Free consultation.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Contact Trimsel - Software Development Company in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Trimsel Software",
  description:
    "Software development company in Chennai providing mobile app development, AI development, web development, DevOps consulting, cloud consulting, and digital marketing services.",
  url: "https://www.trimsel.com",
  telephone: "+91-72008-41581",
  email: "contact@trimsel.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "No.21-B 5th Cross Street, South Phase Thiru VI KA Industrial Estate, Indira Nagar, Guindy",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600032",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0067",
    longitude: "80.2206",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "₹₹",
  sameAs: [
    "https://www.linkedin.com/company/trimsel",
    "https://www.instagram.com/trimselsoftwares",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens after I submit the contact form?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We confirm receipt immediately. You receive a detailed proposal with scope, timeline, and pricing within 24 hours from the team that would actually work on your project.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum project size to work with Trimsel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Projects range from focused MVPs starting from ₹2-3 lakhs to enterprise platforms. We'll tell you honestly if we're the right fit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you sign NDAs before discussing project details?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — NDAs are signed before any detailed discussion. Every project is NDA-protected by default.",
      },
    },
    {
      "@type": "Question",
      name: "Can I schedule a call before submitting a project brief?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — book a free 30-minute consultation to discuss your project at a high level before writing a detailed brief.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Trimsel provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mobile app development, web development, AI development, DevOps consulting, cloud consulting, and digital marketing — all delivered by a 100% in-house team from Chennai.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you start on a new project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects begin within 1-2 weeks of signing. Faster turnaround is possible depending on team capacity.",
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
      name: "Contact Us",
      item: "https://www.trimsel.com/contact-us",
    },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactUsClient />
    </>
  );
}
