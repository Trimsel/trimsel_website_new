import "./globals.css";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Software Development Company in India | Trimsel",
  description: "Trimsel delivers custom software, mobile app, web development, AI solutions, cloud consulting & DevOps services in Chennai. Transform your business with cutting-edge technology.",
  metadataBase: new URL('https://www.trimsel.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/",
    title: "Software Development Company in India | Trimsel",
    description: "Trimsel delivers custom software, mobile app, web development, AI solutions, cloud consulting & DevOps services in Chennai.",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel",
      },
    ],
    siteName: "Trimsel",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Trimsel",
  "url": "https://trimsel.com",
  "logo": "https://trimsel.com/logo.svg",
  "description": "AI-Powered Software Development Company in Chennai",
  "foundingDate": "2019",
  "founders": [{ "@type": "Person", "name": "Balaji" }],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.21-B 5th Cross Street, South Phase Thiru Vi Ka Industrial Estate, Indira Nagar, Guindy",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600032",
    "addressCountry": "IN",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7200841581",
    "contactType": "sales",
    "email": "contact@trimsel.com",
    "availableLanguage": ["English", "Tamil"],
  },
  "sameAs": [
    "https://www.linkedin.com/company/trimsel",
    "https://www.instagram.com/trimsel",
    "https://twitter.com/trimsel",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Footer />
        <a
          href="https://wa.me/917200841581"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-8 right-8 z-[9999] transition-transform duration-200 hover:scale-105"
        >
          <Image
            src="/icons/whatsappicon.svg"
            alt="WhatsApp"
            width={60}
            height={60}
            priority
          />
        </a>
      </body>
    </html>
  );
}
