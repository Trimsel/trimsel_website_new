import DevOpsClient from "./DevOpsClient";

export const metadata = {
  title: "DevOps Consulting Services Chennai | CI/CD & Automation | Trimsel",
  description:
    "Expert DevOps consulting in Chennai. CI/CD pipelines, Kubernetes, Docker, infrastructure automation, and continuous monitoring to accelerate secure software delivery.",
  alternates: {
    canonical: "https://www.trimsel.com/devops-consulting-services",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/devops-consulting-services",
    title: "DevOps Consulting Services Chennai | CI/CD & Automation | Trimsel",
    description:
      "Expert DevOps consulting in Chennai. CI/CD pipelines, Kubernetes, Docker, infrastructure automation, and continuous monitoring to accelerate secure software delivery.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "DevOps consulting services by Trimsel Chennai",
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
  "serviceType": "DevOps Consulting",
  "provider": {
    "@type": "Organization",
    "name": "Trimsel",
    "url": "https://trimsel.com",
  },
  "areaServed": {
    "@type": "City",
    "name": "Chennai",
  },
  "description": "Expert DevOps consulting in Chennai. CI/CD pipelines, Kubernetes, Docker, infrastructure automation, and continuous monitoring to accelerate secure software delivery.",
};

export default function DevOpsConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DevOpsClient />
    </>
  );
}
