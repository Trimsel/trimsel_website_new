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
  title: "Mocial Case Study — EC2 to EKS Microservices Migration | Trimsel",
  description:
    "See how Trimsel migrated Mocial from a single EC2 monolith to microservices on EKS with Codefresh CI/CD, canary deployments, and OpenTelemetry observability. Zero-downtime migration.",
  alternates: {
    canonical: "https://www.trimsel.com/portfolio/mocial-case-study",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/portfolio/mocial-case-study",
    title: "Mocial Case Study — EC2 to EKS Microservices Migration | Trimsel",
    description:
      "See how Trimsel migrated Mocial from a single EC2 monolith to microservices on EKS with Codefresh CI/CD, canary deployments, and OpenTelemetry observability. Zero-downtime migration.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Mocial EC2 to EKS microservices migration case study by Trimsel",
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
  headline: "Mocial Case Study — EC2 to EKS Microservices Migration | Trimsel",
  description:
    "See how Trimsel migrated Mocial from a single EC2 monolith to microservices on EKS with Codefresh CI/CD, canary deployments, and OpenTelemetry observability. Zero-downtime migration.",
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
    { "@type": "ListItem", position: 3, name: "Mocial", item: "https://www.trimsel.com/portfolio/mocial-case-study" },
  ],
};

export default function MocialCaseStudy() {
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
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#1C2B4A] to-[#2d4a7a]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="z-10 mt-8">
            <p className="text-sm md:text-base font-medium text-white/80 mb-6">
              <Link href="/" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#60b8f5]">Home</Link>
              {" • "}
              <Link href="/portfolio" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#60b8f5]">Portfolio</Link>
              {" • "}
              <span className="px-2 py-1 rounded-md">Mocial</span>
            </p>

            <p className="text-2xl font-bold text-white mb-4">Mocial</p>

            <div className="flex gap-2 sm:gap-3 mb-4 flex-wrap">
              {["DevOps & Cloud"].map((tag) => (
                <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 text-sm font-medium bg-white/20 rounded-lg text-white">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs font-medium text-white/50 mb-4 italic">
              AWS EKS · Docker · Kubernetes · Codefresh CI/CD · OpenTelemetry · Canary deploys · HPA
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Mocial: Monolith to Microservices Migration — EC2 to EKS with CI/CD &amp; Full Observability
            </h1>

            <p className="mb-6 max-w-xl text-white/80 text-base sm:text-lg font-medium leading-relaxed">
              Mocial is an all-in-one social super app combining streaming, networking, and content sharing. The platform was originally built as a monolith on a single EC2 instance. When stability issues started blocking user growth, Mocial&apos;s leadership engaged Trimsel to re-architect the infrastructure, migrate to microservices on EKS, and build a CI/CD pipeline that made deployments safe, fast, and repeatable — using the same{" "}
              <Link href="/devops-consulting-services" className="text-[#60b8f5] underline underline-offset-2 font-semibold">DevOps</Link>
              {" "}and{" "}
              <Link href="/cloud-consulting-services" className="text-[#60b8f5] underline underline-offset-2 font-semibold">cloud</Link>
              {" "}expertise we bring to every infrastructure engagement.
            </p>

            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#27AAE1] hover:bg-[#1896cd] text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Talk to Our Team
              <Image src="/Home/right-arrow.svg" width={20} height={20} alt="arrow" />
            </Link>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] mt-8 md:mt-0">
            <Image
              src="/projects/project4.svg"
              alt="Mocial social platform — app interface and DevOps cloud migration architecture"
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
          title="From Deployment Anxiety to Shipping Multiple Times Per Week — with Confidence"
          description1="Mocial's original architecture had everything on one server — frontend, backend, database, media processing. Every deployment risked the entire platform. Scaling meant upgrading to a bigger instance. No automated testing, no rollback mechanism, no visibility beyond basic CloudWatch metrics."
          description2="Trimsel was brought in to fundamentally change how the team ships code — from a high-risk, low-frequency release cycle to a safe, automated pipeline with per-service deployments, canary rollouts, and full-stack observability."
          bgColor="#F9FAFB"
          cardBg="#C7DFF5"
          buttonBg="#27AAE1"
          lineColor="#27AAE1"
          details={[
            { label: "Client", value: "Mocial" },
            { label: "Industry", value: "Social Media, Content Platform" },
            { label: "Duration", value: "4 Months" },
            { label: "Platforms", value: "Web, iOS, Android (infrastructure)" },
          ]}
        />
      </section>

      {/* Stats */}
      <section>
        <StatsSection
          variant="blue"
          stats={[
            { value: "99.95%", label: "Uptime Post-Migration" },
            { value: "5x/week", label: "Deployment Frequency" },
            { value: "0", label: "Downtime Deployments" },
          ]}
          image="/projects/project4.svg"
        />
      </section>

      {/* Challenge */}
      <section className="mt-10">
        <CaseStudyHero
          tag="THE CHALLENGE"
          title="A Monolith That Couldn't Scale and Deployments That Broke Things"
          description="Three compounding problems. First — every deployment risked the entire platform. A CSS change required deploying the backend too. Second — couldn't handle traffic spikes. Scaling meant bigger EC2 instance with downtime. Third — no visibility. No distributed tracing, no per-service metrics, no automated alerting. When something broke, the team was debugging blindly."
          image="/projects/project4.svg"
          bgColor="#1C2B4A"
        />
      </section>

      {/* Problem */}
      <section>
        <ProblemSection
          tag="PROBLEM FACED"
          title="Deploy once a month, pray it doesn't break — and have no idea when it does"
          description1="The monolith deployment process took hours and required everyone on standby. Failed deployments meant rolling back the entire application — affecting all users across all features simultaneously. The on-call rotation dreaded every release window. Growth was capped by the instance size, not the product."
          description2="Without distributed tracing, a slow API response could come from any of a dozen possible causes — database, external service, compute, network — and finding it meant combing through unstructured logs manually. Incidents that should have taken minutes to diagnose took hours."
          bgColor="from-[#C7DFF5] to-[#9DC5E8]"
          bgImage="/drop.svg"
        />
      </section>

      {/* Solution */}
      <section className="bg-[#1C2B4A]">
        <SolutionSection
          tag="THE SOLUTION"
          title="Microservices on EKS with CI/CD and Full-Stack Observability"
          description="Architecture Migration: Decomposed monolith into microservices on EKS with Docker, Kubernetes, HPA, and pod disruption budgets for zero-downtime rollouts. CI/CD (Codefresh): Canary deployments — 10% traffic first, validated against SLOs, then promoted or rolled back automatically. No human approval required for standard releases. Observability (OpenTelemetry): Distributed tracing, per-service SLO/SLI definitions, Grafana dashboards, PagerDuty alerting — full visibility from request to database. Infrastructure as Code (Terraform): All EKS configuration managed through Terraform, version controlled and peer-reviewed like application code."
          bgColor="#2d4a7a"
          image="/projects/project4.svg"
          imageClass="md:w-[400px] lg:w-[500px] xl:w-[600px]"
        />
      </section>

      {/* Results + Tech */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-4">RESULTS</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "99.95%", label: "Uptime post-migration" },
              { value: "5x/week", label: "Deployment frequency" },
              { value: "0", label: "Downtime deployments" },
              { value: "Seconds", label: "Alert response time (was hours)" },
            ].map((item) => (
              <div key={item.label} className="bg-[#EFF6FF] rounded-xl p-4 text-center">
                <p className="font-bold text-[#1C75BC] text-lg leading-tight">{item.value}</p>
                <p className="text-xs text-gray-600 mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">TECH STACK</p>
          <div className="flex flex-wrap gap-2">
            {["AWS", "EKS", "EC2", "S3", "CloudFront", "Route 53", "Docker", "Kubernetes", "Helm", "Codefresh", "GitHub Actions", "Terraform", "OpenTelemetry", "Prometheus", "Grafana", "PagerDuty", "Node.js", "PostgreSQL", "Redis"].map((t) => (
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
          bgGradient="from-[#1C2B4A] to-[#2d4a7a]"
          image="/getintouch1.svg"
          buttonBg="bg-white"
          buttonTextColor="text-[#1C2B4A]"
        />
      </section>

      {/* Related */}
      <section>
        <CaseStudiesSection
          tag="RELATED CASE STUDIES"
          heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
          studies={[caseStudies.kariot, caseStudies.ezyhelpers, caseStudies.xaber]}
        />
      </section>
    </main>
  );
}
