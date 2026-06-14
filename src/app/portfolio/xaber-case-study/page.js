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
  title: "Xaber Case Study — White-Label Ride-Hailing Platform | Trimsel Chennai",
  description:
    "See how Trimsel built Xaber — a white-label ride-hailing platform with real-time GPS tracking, driver matching, and fare calculation. 3-month delivery. 3.6K+ downloads.",
  alternates: {
    canonical: "https://www.trimsel.com/portfolio/xaber-case-study",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/portfolio/xaber-case-study",
    title: "Xaber Case Study — White-Label Ride-Hailing Platform | Trimsel Chennai",
    description:
      "See how Trimsel built Xaber — a white-label ride-hailing platform with real-time GPS tracking, driver matching, and fare calculation. 3-month delivery. 3.6K+ downloads.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Xaber ride-hailing platform case study by Trimsel",
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
  headline: "Xaber Case Study — White-Label Ride-Hailing Platform | Trimsel Chennai",
  description:
    "See how Trimsel built Xaber — a white-label ride-hailing platform with real-time GPS tracking, driver matching, and fare calculation. 3-month delivery. 3.6K+ downloads.",
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
    { "@type": "ListItem", position: 3, name: "Xaber", item: "https://www.trimsel.com/portfolio/xaber-case-study" },
  ],
};

export default function XaberCaseStudy() {
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
      <Header transparent />

      {/* Hero */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#FFDA5A] to-[#FFCA71]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10 mt-8">
            <p className="text-sm md:text-base font-medium text-black mb-6">
              <Link href="/" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Home</Link>
              {" • "}
              <Link href="/portfolio" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Portfolio</Link>
              {" • "}
              <span className="px-2 py-1 rounded-md">Xaber</span>
            </p>

            <div className="mb-6 w-[120px] h-[40px] relative">
              <Image src="/icons/Xaberlogo.svg" alt="Xaber logo" fill sizes="120px" className="object-contain" />
            </div>

            <div className="flex gap-2 sm:gap-3 mb-4 flex-wrap">
              {["Mobile", "Web"].map((tag) => (
                <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm font-medium bg-white/70 rounded-lg text-black">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs font-medium text-black/60 mb-4 italic">
              Flutter · Real-time GPS · Driver matching · Fare calculation · Surge pricing · Payment gateway
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              Xaber: White-Label Ride-Hailing Platform — Real-Time Booking, Tracking &amp; Payments
            </h1>

            <p className="mb-6 max-w-xl text-base sm:text-lg text-black font-medium leading-relaxed">
              Xaber is a white-label ride-hailing platform built for startups and taxi businesses launching their own branded transport service. We designed and developed the complete system — rider app, driver app, admin dashboard, and backend infrastructure — with real-time GPS tracking, intelligent fare calculation, and automated driver assignment. Built on the same{" "}
              <Link href="/mobile-app-development-chennai" className="underline underline-offset-2 font-semibold">mobile app development</Link>
              {" "}foundation we apply across all on-demand platform projects.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#e58c06] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Talk to Our Team
              <Image src="/Home/right-arrow.svg" width={20} height={20} alt="arrow" />
            </Link>
          </div>
        </div>

        {/* Hero image — mobile */}
        <div className="block md:hidden relative w-full h-[350px] sm:h-[450px]">
          <Image
            src="/XaberHero.svg"
            alt="Xaber ride-hailing mobile app — rider booking screen and driver tracking interface"
            fill
            sizes="100vw"
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Hero image — desktop */}
        <div className="hidden md:absolute md:block bottom-0 right-0 w-[55%] h-full">
          <Image
            src="/XaberHero.svg"
            alt="Xaber ride-hailing app on phones"
            fill
            sizes="55vw"
            className="object-contain object-right-bottom"
            priority
          />
        </div>
      </section>

      {/* Overview */}
      <section>
        <CaseStudySection
          tag="OVERVIEW"
          title="A Complete Ride-Hailing Platform — Built to Launch Your Transport Business Under Your Own Brand"
          description1="Starting a ride-hailing business shouldn't require building Uber from scratch. Xaber gives transport entrepreneurs a production-ready platform they can launch under their own brand — real-time booking, live GPS tracking, fare estimates, in-app payments, and driver ratings. Built to handle thousands of concurrent rides with sub-second location updates."
          description2="Trimsel built the entire stack — three apps (rider, driver, admin), the backend matching engine, and the infrastructure to support real-time operations at scale."
          bgColor="#F9FAFB"
          cardBg="#FFF3B0"
          buttonBg="#F59E0B"
          lineColor="#F59E0B"
          details={[
            { label: "Client", value: "Xaber" },
            { label: "Industry", value: "Transportation, On-Demand Services" },
            { label: "Duration", value: "3 Months" },
            { label: "Platforms", value: "iOS, Android, Web & Desktop" },
          ]}
        />
      </section>

      {/* Stats */}
      <section>
        <StatsSection
          variant="gold"
          stats={[
            { value: "3.6K+", label: "Downloads" },
            { value: "1.2K+", label: "Active Users" },
            { value: "590+", label: "Rides Requested" },
          ]}
          image="/xaber-combinedimg.svg"
        />
      </section>

      {/* Challenge */}
      <section className="mt-10">
        <CaseStudyHero
          tag="THE CHALLENGE"
          title="Launch a Branded Ride-Hailing Service Without a 12-Month Dev Cycle"
          description="Xaber's founders wanted their own branded platform — not a reskin. Building from scratch typically takes 9-12 months and requires real-time infrastructure expertise — GPS tracking at sub-second intervals, driver matching algorithms, dynamic fare calculation with surge pricing, and payment processing with driver payout splits. They needed production-ready in 3 months."
          image="/xaber-challenge.svg"
          bgColor="#E6C57E"
        />
      </section>

      {/* Problem */}
      <section>
        <ProblemSection
          tag="PROBLEM FACED"
          title="Real-time at scale, three apps, one deadline — and none of it could fail at launch"
          description1="Real-time ride-hailing isn't just a mobile app — it's a distributed system. Every second of delay in location updates breaks the user experience. Driver matching needs to run in under 10 seconds. Fare calculation needs to handle base rates, per-km pricing, waiting charges, and surge multipliers — all while the driver is already moving."
          description2="Three separate apps (rider, driver, admin) needed to share state reliably. The backend needed WebSocket connections that stayed alive under load. And the entire system needed to be deployable, testable, and maintainable by a team that had never built ride-hailing infrastructure before — inside a 3-month window."
          bgColor="from-[#FFF9DC] to-[#FFF3B0]"
          bgImage="/drop.svg"
        />
      </section>

      {/* Solution */}
      <section className="bg-[#E6CF85]">
        <SolutionSection
          tag="THE SOLUTION"
          title="Three Apps, One Platform, Real-Time Everything"
          description="Rider App (Flutter): Location-based pickup/drop, real-time fare estimates with surge indicators, driver assignment with ETA and live tracking, in-app payments, trip history, rating system. Driver App (Flutter): Ride request notifications, turn-by-turn navigation, earnings dashboard, availability toggle, passenger rating. Admin Dashboard (React): Fleet management, driver verification, commission configuration, surge pricing rules, real-time ride monitoring, dispute resolution, revenue analytics. Backend: Node.js with Socket.io for real-time, Google Maps API, MongoDB, custom matching algorithm with proximity scoring."
          bgColor="#E6CF85"
          image="/xaber-solution.svg"
          imageClass="md:w-[400px] lg:w-[500px] xl:w-[600px]"
        />
      </section>

      {/* Results + Tech */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-4">RESULTS</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "3 months", label: "Market-ready delivery" },
              { value: "< 10 sec", label: "Driver assignment time" },
              { value: "Sub-second", label: "GPS update frequency" },
              { value: "3.6K+", label: "Downloads at launch" },
            ].map((item) => (
              <div key={item.label} className="bg-[#FFFBEB] rounded-xl p-4 text-center">
                <p className="font-bold text-[#F59E0B] text-lg leading-tight">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {["Flutter", "React", "Tailwind CSS", "Node.js", "Express", "Socket.io", "MongoDB", "Google Maps API", "Razorpay", "AWS", "Firebase"].map((t) => (
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
          bgGradient="from-[#FFDA5A] to-[#FFCA71]"
          image="/getintouch1.svg"
          buttonBg="bg-white"
          buttonTextColor="text-[#F59E0B]"
        />
      </section>

      {/* Related */}
      <section>
        <CaseStudiesSection
          tag="RELATED CASE STUDIES"
          heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
          studies={[caseStudies.kariot, caseStudies.ezyhelpers, caseStudies.mocial]}
        />
      </section>
    </main>
  );
}
