import PortfolioClient from "./PortfolioClient";

export const metadata = {
  title: "Portfolio | Software Development Projects | Trimsel Chennai",
  description:
    "Explore Trimsel's portfolio of software development projects — mobile apps, web platforms, AI solutions, and cloud deployments across 12+ industries.",
  alternates: {
    canonical: "https://www.trimsel.com/portfolio",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/portfolio",
    title: "Portfolio | Software Development Projects | Trimsel Chennai",
    description:
      "Explore Trimsel's portfolio of software development projects — mobile apps, web platforms, AI solutions, and cloud deployments across 12+ industries.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel software development portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
