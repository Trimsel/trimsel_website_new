import MobileAppDevelopmentClient from "./MobileAppDevelopmentClient";

export const metadata = {
  title: "Mobile App Development Company Chennai, India | iOS, Android",
  description: "Top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & cross platform apps with exceptional UX. From MVP to enterprise apps. 200+ successful projects delivered.",
  alternates: {
    canonical: "https://www.trimsel.com/mobile-app-development-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/mobile-app-development-chennai",
    title: "Mobile App Development Company Chennai, India | iOS, Android",
    description: "Top mobile app development company in Chennai, India. We build secure, scalable iOS, Android, Flutter & cross platform apps with exceptional UX. From MVP to enterprise apps. 200+ successful projects delivered.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/mobilehero.webp",
        width: 1200,
        height: 630,
        alt: "Trimsel team delivering mobile app solutions in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

export default function MobileAppDevelopmentPage() {
  return <MobileAppDevelopmentClient />;
}
