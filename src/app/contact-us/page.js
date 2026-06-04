import ContactUsClient from "./ContactUsClient";

export const metadata = {
  title: "Contact Trimsel | Free Software Development Consultation",
  description:
    "Contact Trimsel's software development team in Chennai for a free consultation. We reply within 24 hours. Custom software, mobile apps, web platforms, and AI solutions.",
  alternates: {
    canonical: "https://www.trimsel.com/contact-us",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/contact-us",
    title: "Contact Trimsel | Free Software Development Consultation",
    description:
      "Contact Trimsel's software development team in Chennai for a free consultation. We reply within 24 hours. Custom software, mobile apps, web platforms, and AI solutions.",
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
  "@type": "SoftwareCompany",
  "name": "Trimsel",
  "image": "https://trimsel.com/logo.svg",
  "url": "https://trimsel.com",
  "telephone": "+91-7200841581",
  "email": "contact@trimsel.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.21-B 5th Cross Street, South Phase Thiru Vi Ka Industrial Estate, Indira Nagar, Guindy",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600032",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.0105,
    "longitude": 80.2137,
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$",
};

export default function ContactUsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactUsClient />
    </>
  );
}
