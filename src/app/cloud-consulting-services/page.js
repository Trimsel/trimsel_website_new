import CloudConsultingClient from "./CloudConsultingClient";

export const metadata = {
  title: "Cloud Consulting Services Chennai | AWS, Azure, GCP | Trimsel",
  description:
    "End-to-end cloud consulting and implementation services in Chennai. Cloud migration, architecture design, security, and managed services on AWS, Azure, and Google Cloud Platform.",
  alternates: {
    canonical: "https://www.trimsel.com/cloud-consulting-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/cloud-consulting-services",
    title: "Cloud Consulting Services Chennai | AWS, Azure, GCP | Trimsel",
    description:
      "End-to-end cloud consulting and implementation services in Chennai. Cloud migration, architecture design, security, and managed services on AWS, Azure, and Google Cloud Platform.",
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
  "serviceType": "Cloud Consulting",
  "provider": {
    "@type": "Organization",
    "name": "Trimsel",
    "url": "https://trimsel.com",
  },
  "areaServed": {
    "@type": "City",
    "name": "Chennai",
  },
  "description": "End-to-end cloud consulting and implementation services in Chennai. Cloud migration, architecture design, security, and managed services on AWS, Azure, and Google Cloud Platform.",
};

export default function CloudConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CloudConsultingClient />
    </>
  );
}
