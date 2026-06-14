import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CaseStudySection from "@/components/CaseStudySection";
import StatsSection from "@/components/StatsSection";
import CaseStudyHero from "@/components/CaseStudyHero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CTASection from "@/components/CTA";
import CaseStudiesSection from "@/components/relatedcasestudy";
import { caseStudies } from "@/data/caseStudies";

export const metadata = {
  title: "EzyHelpers Case Study — On-Demand Home Services App | Trimsel Chennai",
  description:
    "See how Trimsel built EzyHelpers — a home services marketplace connecting households with vetted professionals. Flutter app, real-time booking, Razorpay payments. 500+ providers onboarded.",
  alternates: {
    canonical: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/portfolio/ezyhelpers-case-study",
    title: "EzyHelpers Case Study — On-Demand Home Services App | Trimsel Chennai",
    description:
      "See how Trimsel built EzyHelpers — a home services marketplace connecting households with vetted professionals. Flutter app, real-time booking, Razorpay payments. 500+ providers onboarded.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "EzyHelpers home services app case study by Trimsel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EzyHelpers Case Study — On-Demand Home Services App | Trimsel Chennai",
  description:
    "See how Trimsel built EzyHelpers — a home services marketplace connecting households with vetted professionals. Flutter app, real-time booking, Razorpay payments. 500+ providers onboarded.",
  author: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://www.trimsel.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://www.trimsel.com",
  },
  articleSection: "Case Study",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trimsel.com/" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.trimsel.com/portfolio" },
    { "@type": "ListItem", position: 3, name: "EzyHelpers", item: "https://www.trimsel.com/portfolio/ezyhelpers-case-study" },
  ],
};

export default function EzyHelpersCaseStudy() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* Hero */}
      <section className="w-full relative overflow-hidden bg-[#A6E3FA]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:pt-8 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10 mt-8 md:mt-0">
            <p className="text-sm md:text-base font-medium text-black mb-6">
              <Link href="/" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Home</Link>
              {" • "}
              <Link href="/portfolio" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Portfolio</Link>
              {" • "}
              <span className="px-2 py-1 rounded-md">EzyHelpers</span>
            </p>

            <div className="flex gap-2 sm:gap-3 mb-4 flex-wrap">
              {["Mobile", "Web"].map((tag) => (
                <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm font-medium bg-white/70 rounded-lg text-black">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs font-medium text-black/60 mb-4 italic">
              Flutter · Real-time matching · In-app payments · Provider verification · Rating system
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              EzyHelpers: On-Demand Home Services Platform — Booking, Matching &amp; Payments
            </h1>

            <p className="mb-6 max-w-xl text-base sm:text-lg text-black font-medium leading-relaxed">
              EzyHelpers is a{" "}
              <Link href="/mobile-app-development-chennai" className="underline underline-offset-2 font-semibold">mobile app</Link>
              {" "}and{" "}
              <Link href="/web-development-company-chennai" className="underline underline-offset-2 font-semibold">web platform</Link>
              {" "}that connects households with vetted home service professionals — cleaning, elder care, cooking, plumbing, and daily assistance. We designed and built the entire product from concept to launch, including the user app, provider app, admin dashboard, and payment infrastructure.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#1968FC] hover:bg-[#1254d4] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Talk to Our Team
              <Image src="/Home/right-arrow.svg" width={20} height={20} alt="arrow" />
            </Link>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-0">
            <Image
              src="/projects/project1.svg"
              alt="EzyHelpers home services mobile app — booking screen, service categories, and provider profiles"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section>
        <CaseStudySection
          tag="OVERVIEW"
          title="Connecting Households with Trusted Home Service Professionals — From Search to Payment"
          description1="The home services market in India is fragmented — most bookings happen through word-of-mouth, WhatsApp messages, or aggregator apps with inconsistent quality. EzyHelpers set out to build a platform where households can find, verify, book, and pay trusted professionals — all through a single app with transparent pricing and a rating system."
          description2="Trimsel built the full platform — user-facing mobile app, service provider app, admin dashboard, backend APIs, payment gateway integration, and the matching algorithm that connects users with nearby available professionals."
          bgColor="#F9FAFB"
          cardBg="#A6E3FA"
          buttonBg="#1968FC"
          lineColor="#1968FC"
          details={[
            { label: "Client", value: "EzyHelpers" },
            { label: "Industry", value: "Home Services, On-Demand Marketplace" },
            { label: "Duration", value: "4 Months" },
            { label: "Platforms", value: "iOS, Android (Flutter), Web" },
          ]}
        />
      </section>

      {/* Stats */}
      <section>
        <StatsSection
          variant="blue"
          stats={[
            { value: "500+", label: "Service Providers Onboarded" },
            { value: "15+", label: "Service Categories" },
            { value: "4.8★", label: "App Store Rating" },
          ]}
          image="/EzyHelpersstatus.svg"
        />
      </section>

      {/* Challenge */}
      <section className="mt-10">
        <CaseStudyHero
          tag="THE CHALLENGE"
          title="A Fragmented Market with No Digital Trust Layer"
          description="Before EzyHelpers, households relied on neighbourhood recommendations, classified ads, or WhatsApp groups. No verification, no transparent pricing, no tracking, no recourse for poor quality. For providers — inconsistent work, no reputation building, and large intermediary commissions eating into earnings."
          image="/xaber-challenge.svg"
          bgColor="#A6E3FA"
        />
      </section>

      {/* Problem */}
      <section>
        <ProblemSection
          tag="PROBLEM FACED"
          title="Trust, discovery, and payment — three broken links in the home services chain"
          description1="Households couldn't verify who was coming to their home. Providers had no way to build a digital reputation or show previous work. Pricing was opaque — the final bill often differed from the quote. And payment was always cash, creating friction and safety concerns for both sides."
          description2="The platform needed to solve all three simultaneously: a verification and rating system that built trust, a matching algorithm that connected users with available nearby providers, and integrated payment infrastructure with automated commission splits — all in a single, reliable app that worked in lower-bandwidth conditions across India."
          bgColor="from-[#D9F3FF] to-[#AEE4FF]"
          bgImage="/drop.svg"
        />
      </section>

      {/* Solution */}
      <section className="bg-[#A6E3FA]">
        <SolutionSection
          tag="THE SOLUTION"
          title="A Full-Stack Home Services Marketplace"
          description="User App (Flutter): Service browsing, provider search, real-time booking, in-app payments via Razorpay, live tracking, rating system. Provider App (Flutter): Job notifications, availability calendar, earnings dashboard, profile management. Admin Dashboard (React): Provider verification, category management, commission controls, dispute resolution, analytics. Backend: Node.js, Firebase, MongoDB, Razorpay split payments — with automated commission calculation and payout scheduling."
          bgColor="#A6E3FA"
          image="/projects/project1.svg"
          imageClass="md:w-[400px] lg:w-[500px] xl:w-[600px]"
        />
      </section>

      {/* Results + Tech */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-4">RESULTS</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "500+", label: "Providers Onboarded in 6 months" },
              { value: "< 2 min", label: "Average Acceptance Time" },
              { value: "4.8★", label: "App Store Rating" },
              { value: "Automated", label: "Commission Splits" },
            ].map((item) => (
              <div key={item.value} className="bg-[#f0f9ff] rounded-xl p-4 text-center">
                <p className="font-bold text-[#1968FC] text-lg leading-tight">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {["Flutter", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase", "Razorpay", "AWS", "Google Maps API"].map((t) => (
              <span key={t} className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <CTASection
          subtitle="START YOUR PROJECT"
          title="Want to Build Something Like This?"
          description="Every project in our portfolio started with a conversation. Tell us what problem you're solving, who it's for, and where you are today — we'll show you what's possible."
          buttonText="Talk to Our Experts"
          href="/contact-us"
          bgGradient="from-[#A6E3FA] to-[#7CC6F0]"
          image="/getintouch1.svg"
          buttonBg="bg-white"
          buttonTextColor="text-[#1968FC]"
        />
      </section>

      {/* Related */}
      <section>
        <CaseStudiesSection
          tag="RELATED CASE STUDIES"
          heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
          studies={[caseStudies.kariot, caseStudies.xaber, caseStudies.mocial]}
        />
      </section>
    </main>
  );
}
