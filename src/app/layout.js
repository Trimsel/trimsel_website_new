import "./globals.css";
import Image from "next/image";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
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
