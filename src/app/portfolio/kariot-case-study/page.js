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
  title: "KarIOT Case Study — Smart IoT + AI Water Management | Trimsel",
  description:
    "See how Trimsel enabled KarIOT to deliver real-time water management with AI demand forecasting, leak detection, and cloud automation. 12-18% NRW reduction.",
  alternates: {
    canonical: "https://www.trimsel.com/portfolio/kariot-case-study",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/portfolio/kariot-case-study",
    title: "KarIOT Case Study — Smart IoT + AI Water Management | Trimsel",
    description:
      "See how Trimsel enabled KarIOT to deliver real-time water management with AI demand forecasting, leak detection, and cloud automation. 12-18% NRW reduction.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "KarIOT smart water management case study by Trimsel",
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
  headline: "KarIOT Case Study — Smart IoT + AI Water Management | Trimsel",
  description:
    "See how Trimsel enabled KarIOT to deliver real-time water management with AI demand forecasting, leak detection, and cloud automation. 12-18% NRW reduction.",
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
    { "@type": "ListItem", position: 3, name: "KarIOT", item: "https://www.trimsel.com/portfolio/kariot-case-study" },
  ],
};

export default function KarIOTCaseStudy() {
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
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#8FD9F8] to-[#4DA3F5]">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10 mt-8">
            <p className="text-sm md:text-base font-medium text-black mb-6">
              <Link href="/" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Home</Link>
              {" • "}
              <Link href="/portfolio" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Portfolio</Link>
              {" • "}
              <span className="px-2 py-1 rounded-md">KarIOT</span>
            </p>

            <div className="mb-6 w-[120px] h-[40px] relative">
              <Image src="/icons/KarIoTlogo.svg" alt="KarIOT logo" fill sizes="120px" className="object-contain" />
            </div>

            <div className="flex gap-2 sm:gap-3 mb-4 flex-wrap">
              {["IoT", "AI/ML", "Mobile", "Web"].map((tag) => (
                <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm font-medium bg-white/70 rounded-lg text-black">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs font-medium text-black/60 mb-4 italic">
              DMA-level · LoRaWAN/NB-IoT · Human-in-the-loop · Canary deploys · SCADA/BMS integration
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-black">
              KarIOT: IoT + AI-Enabled Smart Water Management
            </h1>

            <p className="mt-2 max-w-2xl text-black text-base sm:text-lg font-medium leading-relaxed">
              KarIOT is an advanced IoT, AI/ML, and cloud platform that enables cities, industries, and property owners
              to monitor, control, and optimise water usage in real time. It combines wireless sensors, demand forecasting,
              leak and anomaly detection, and user-friendly dashboards to reduce leaks, lower operational costs, and support
              water sustainability goals. Built with the same{" "}
              <Link href="/ai-development-company" className="underline underline-offset-2 font-semibold">AI &amp; ML development</Link>
              {" "}and{" "}
              <Link href="/devops-consulting-services" className="underline underline-offset-2 font-semibold">DevOps</Link>
              {" "}expertise we apply across our{" "}
              <Link href="/cloud-consulting-services" className="underline underline-offset-2 font-semibold">cloud</Link>
              {" "}projects.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#016DEC] hover:bg-[#0057c4] text-white px-6 py-3 rounded-lg font-medium transition mt-8"
            >
              Talk to Our Team
              <Image src="/Home/right-arrow.svg" width={20} height={20} alt="arrow" />
            </Link>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 md:mt-0">
            <Image
              src="/KarIoTHero.svg"
              alt="KarIOT smart water management platform dashboard and IoT sensors"
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
          title="Enabling Data-Driven, Sustainable Water Management with IoT + AI"
          description1="The KarIOT platform empowers government agencies, commercial buildings, and communities to remotely track water supply, detect anomalies, and automate control of valves and pumps. By providing actionable insights through mobile and web dashboards, KarIOT helps users cut water waste, improve reporting, and support compliance and sustainability."
          description2="Trimsel architected the full platform — from IoT sensor ingestion and AI forecasting models to mobile apps, web dashboards, and cloud infrastructure — delivering a production system that's operating across multiple sites."
          bgColor="#F9FAFB"
          cardBg="#8FD9F8"
          buttonBg="#016DEC"
          lineColor="#016DEC"
          details={[
            { label: "Client", value: "Karikala (KarIOT)" },
            { label: "Industry", value: "Smart Water, IoT, AI/ML" },
            { label: "Duration", value: "6 Months" },
            { label: "Platforms", value: "IoT, iOS, Android, Web" },
          ]}
        />
      </section>

      {/* Stats */}
      <section>
        <StatsSection
          variant="blue"
          stats={[
            { value: "5+", label: "Sites Deployed" },
            { value: "1 Cr+", label: "Litres Managed" },
            { value: "10+", label: "Clients Impacted" },
          ]}
          image="/KarIoTstats.svg"
        />
      </section>

      {/* Challenge */}
      <section className="mt-10">
        <CaseStudyHero
          tag="THE CHALLENGE"
          title="Manual Systems & Water Waste"
          description="Before KarIOT, water supply management relied on manual readings, reactive maintenance, and limited transparency — leading to undetected leaks, wastage, inflated costs, and poor reporting to regulators. Water utilities and building operators had no real-time visibility into consumption patterns, no way to predict demand spikes, and no automated response when anomalies occurred."
          image="/KarIoTChallenge.svg"
          bgColor="#FFFFF"
        />
      </section>

      {/* Problem */}
      <section>
        <ProblemSection
          tag="PROBLEM FACED"
          title="No visibility, no prediction, no automated response — only reactive firefighting"
          description1="Water utilities and property managers were operating blind. Manual meter readings happened once a month. Leaks went undetected for weeks, costing thousands of litres before anyone noticed. When a pump failed or a valve stuck open, the first sign was a downstream shortage — not an automated alert."
          description2="KarIOT set out to replace this reactive, manual approach with real-time sensor telemetry, AI-driven demand forecasting, and automated valve control. The challenge was integrating heterogeneous IoT devices (LoRaWAN, NB-IoT), building reliable ML pipelines on noisy sensor data, and delivering it all through apps that field teams and government officials could actually use."
          bgColor="from-[#D9F3FF] to-[#AEE4FF]"
          bgImage="/drop.svg"
        />
      </section>

      {/* Solution */}
      <section className="bg-[#F5F5F5]">
        <SolutionSection
          tag="THE SOLUTION"
          title="IoT + AI with Cloud Automation"
          description="Trimsel architected a cloud-native platform that ingests live sensor data from LoRaWAN and NB-IoT devices, applies short-term demand forecasting and leak/anomaly detection using TensorFlow-based models, and recommends forecast-aware pump and valve schedules. The platform includes mobile apps for field teams, a web dashboard for administrators, and SCADA/BMS integration for automated control. Canary deploys with per-service SLOs ensured zero-downtime updates in live water infrastructure."
          bgColor="#8FD9F8"
          image="/KarIoTsolution.svg"
          imageClass="md:w-[400px] lg:w-[500px] xl:w-[600px]"
        />
      </section>

      {/* AI Outcomes + Tech */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-4">AI OUTCOMES</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-10">
            {[
              { value: "NRW ↓ 12-18%", label: "Non-Revenue Water Reduction" },
              { value: "Energy ↓ 8-15%", label: "Pump Energy Savings" },
              { value: "MAPE 8-12%", label: "Forecast Accuracy" },
              { value: "Tickets ↓ 20-30%", label: "Support Ticket Reduction" },
              { value: "6-12 mo", label: "Payback Period" },
            ].map((item) => (
              <div key={item.value} className="bg-[#f0f9ff] rounded-xl p-4 text-center">
                <p className="font-bold text-[#016DEC] text-lg leading-tight">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {["IoT Sensors", "AWS", "Node.js", "React Native", "PostgreSQL", "Python", "TensorFlow", "scikit-learn", "Docker", "GitHub Actions", "Prometheus", "Grafana"].map((t) => (
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
          bgGradient="from-[#8FD9F8] to-[#4DA3F5]"
          image="/getintouch1.svg"
          buttonBg="bg-white"
          buttonTextColor="text-[#016DEC]"
        />
      </section>

      {/* Related */}
      <section>
        <CaseStudiesSection
          tag="RELATED CASE STUDIES"
          heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
          studies={[caseStudies.ezyhelpers, caseStudies.xaber, caseStudies.mocial]}
        />
      </section>
    </main>
  );
}
