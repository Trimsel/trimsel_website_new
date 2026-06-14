"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechStackTabs from "@/components/TechStackTabs";
import CloudProcessAccordion from "@/app/cloud-consulting-services/CloudProcessAccordion";
import LatestInsights from "@/components/LatestInsights";
import Faq from "@/components/Faq";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonial from "@/components/testimonial";

const services = [
  {
    icon: "/icons/cloud-whatwedo1.svg",
    title: "Cloud Strategy & Architecture Consulting",
    description:
      "We assess your existing infrastructure, workloads, application dependencies, and cost structure to build a cloud adoption roadmap that actually makes sense for your business. No 50-page strategy deck that sits on a shelf.",
  },
  {
    icon: "/icons/cloud-whatwedo2.svg",
    title: "Cloud Migration Services",
    description:
      "We migrate applications, databases, and workloads from on-premise or legacy infrastructure to AWS, Azure, or Google Cloud — with structured migration planning that minimises downtime and preserves data integrity. Every migration follows a test-validate-cutover process.",
  },
  {
    icon: "/icons/cloud-whatwedo3.svg",
    title: "Multi-Cloud & Hybrid Cloud Implementation",
    description:
      "We design and implement multi-cloud and hybrid cloud environments that combine private, public, and on-premise infrastructure based on your actual needs — avoiding vendor lock-in while optimising availability, performance, and cost.",
  },
  {
    icon: "/icons/cloud-whatwedo4.svg",
    title: "DevOps & Cloud Automation",
    description:
      "We set up CI/CD pipelines, infrastructure as code using Terraform, container orchestration with Kubernetes and Docker, and automated monitoring using Prometheus and Grafana — so your deployments are faster, safer, and repeatable.",
    href: "/devops-consulting-services",
  },
  {
    icon: "/icons/cloud-whatwedo5.svg",
    title: "Cloud Security & Compliance",
    description:
      "We implement IAM, network security policies, encryption at rest and in transit, automated backup systems, vulnerability scanning, and compliance-aligned configurations for HIPAA, SOC 2, PCI-DSS, and GDPR.",
  },
  {
    icon: "/icons/cloud-whatwedo6.svg",
    title: "Managed Cloud Support",
    description:
      "After deployment, we monitor infrastructure health, optimise resource allocation, manage security patching, handle incident response, and provide cloud cost management. You get a dedicated cloud operations contact, not a generic support ticket queue.",
  },
];

const deploymentModels = [
  {
    icon: "/icons/cloud-whatwedo1.svg",
    title: "Private Cloud",
    description:
      "Dedicated infrastructure for businesses requiring full control over sensitive applications and compliance-driven workloads. We implement using VMware, OpenStack, or dedicated AWS/Azure instances.",
  },
  {
    icon: "/icons/cloud-whatwedo2.svg",
    title: "Public Cloud",
    description:
      "Scalable infrastructure on AWS, Azure, or GCP — pay only for what you use, scale based on actual demand. The right choice for most web applications, SaaS platforms, and customer-facing products.",
  },
  {
    icon: "/icons/cloud-whatwedo3.svg",
    title: "Multi-Cloud",
    description:
      "Strategic use of multiple cloud providers to distribute workloads, improve redundancy, and avoid single-vendor dependency. Run compute on AWS while storing data on GCP — with unified monitoring.",
  },
  {
    icon: "/icons/cloud-whatwedo4.svg",
    title: "Hybrid Cloud",
    description:
      "Infrastructure combining on-premise systems with public cloud — ideal for businesses keeping certain workloads local while scaling others in the cloud. Secure connectivity and unified management dashboards.",
  },
];

const whyTrimsel = [
  {
    icon: "/icons/cloud-whatwedo1.svg",
    title: "Vendor-Neutral Cloud Consulting",
    description:
      "We recommend AWS, Azure, GCP, or hybrid based on your actual workload requirements — not based on which vendor gives us the best partnership incentives.",
  },
  {
    icon: "/icons/cloud-whatwedo2.svg",
    title: "Certified Cloud & DevOps Engineers",
    description:
      "Our team holds AWS, Azure, and GCP certifications and works daily with Kubernetes, Terraform, Docker, Ansible, and CI/CD automation. Production infrastructure experience, not just theory.",
  },
  {
    icon: "/icons/cloud-whatwedo3.svg",
    title: "40% Average Cloud Cost Reduction",
    description:
      "Our cloud cost optimisation audits have delivered an average of 40% infrastructure cost savings — through right-sizing instances, eliminating unused resources, and implementing reserved capacity.",
  },
  {
    icon: "/icons/cloud-whatwedo4.svg",
    title: "Compliance-Ready Architecture",
    description:
      "We build cloud environments that meet HIPAA, SOC 2, PCI-DSS, and GDPR requirements from the architecture stage — with structured governance, audit logging, and encryption policies.",
  },
  {
    icon: "/icons/cloud-whatwedo5.svg",
    title: "Infrastructure Ready for AI & Automation",
    description:
      "We design cloud environments that support AI model training, data pipelines, and automation workflows from day one — so your infrastructure never becomes a ceiling on what your product can do.",
  },
  {
    icon: "/icons/cloud-whatwedo6.svg",
    title: "Post-Migration Accountability",
    description:
      "Most cloud consultants hand over the architecture document and disappear. We stay involved — monitoring performance, optimising costs, and managing security patches. Dedicated cloud operations contact with agreed SLAs.",
  },
];

const techTabs = [
  {
    name: "CLOUD PLATFORMS",
    tools: [
      { name: "AWS", icon: "/icons/Tools/aws.svg" },
      { name: "Microsoft Azure", icon: "/icons/Tools/azure.svg" },
      { name: "Google Cloud", icon: "/icons/Tools/gcp.svg" },
      { name: "AWS EKS", icon: "/icons/Tools/awseks.svg" },
      { name: "AWS Lambda", icon: "/icons/Tools/awslambda.svg" },
      { name: "AWS S3", icon: "/icons/Tools/awss3.svg" },
      { name: "CloudFront", icon: "/icons/Tools/cloudfront.svg" },
    ],
  },
  {
    name: "INFRA AS CODE & AUTOMATION",
    tools: [
      { name: "Terraform", icon: "/icons/Tools/terraform.svg" },
      { name: "Ansible", icon: "/icons/Tools/ansible.svg" },
      { name: "Kubernetes", icon: "/icons/Tools/kubernetes.svg" },
      { name: "Docker", icon: "/icons/Tools/docker.svg" },
      { name: "GitHub Actions", icon: "/icons/Tools/githubactions.svg" },
    ],
  },
  {
    name: "MONITORING & SECURITY",
    tools: [
      { name: "Prometheus", icon: "/icons/Tools/prometheus.svg" },
      { name: "Grafana", icon: "/icons/Tools/grafana.svg" },
      { name: "GitLab CI", icon: "/icons/Tools/gitlabci.svg" },
      { name: "Jenkins", icon: "/icons/Tools/jenkins.svg" },
      { name: "Serverless", icon: "/icons/Tools/serverless.svg" },
    ],
  },
];

export default function CloudConsulting({ posts = [] }) {
  return (
    <main>
      <Header transparent />

      {/* Hero */}
      <section className="flex min-h-screen items-center bg-[url('/CloudConsultingservice.svg')] bg-cover bg-center pt-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 pb-8 text-center sm:px-6">
          {/* Breadcrumb */}
          <p className="text-md md:text-base font-medium text-white/70 mb-6">
            <Link
              href="/"
              className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
            >
              Home
            </Link>
            {" • "}
            <span className="px-2 py-1 rounded-md">Cloud Consulting Services</span>
          </p>

          <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-5xl">
            Cloud Consulting & Migration Services in Chennai
          </h1>

          <h2 className="mt-4 text-white text-center text-xl md:text-2xl font-semibold max-w-3xl">
            We Help Businesses Move to the Cloud — and Stay There Without the Complexity
          </h2>

          <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg font-medium">
            Whether you&apos;re migrating from on-premise infrastructure, optimising an existing
            cloud setup, or building cloud-native from scratch — our certified AWS, Azure, and GCP
            consultants help you plan, execute, and manage cloud infrastructure that performs under
            real workloads, meets compliance requirements, and costs less than what you&apos;re
            running today.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="rounded-lg px-8 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:px-10 sm:text-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
              }}
            >
              Schedule a Cloud Consultation
            </Link>
            <Link
              href="#services"
              className="rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Explore Cloud Services
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#0d1b2a] border-t border-white/10 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">40%</p>
            <p className="text-sm font-medium mt-1 text-gray-300">Average Cloud Cost Savings</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">99.95%</p>
            <p className="text-sm font-medium mt-1 text-gray-300">Uptime SLA</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">AWS, Azure & GCP</p>
            <p className="text-sm font-medium mt-1 text-gray-300">Certified</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">Mocial</p>
            <p className="text-sm font-medium mt-1 text-gray-300">EC2 to EKS Migration</p>
          </div>
        </div>
      </section>

      {/* What We Do — Service Overview */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHAT WE DO
          </h2>
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Cloud Consulting Services Designed for Businesses That Can&apos;t Afford Downtime
          </h3>

          <div className="mt-8 space-y-5 max-w-4xl mx-auto text-gray-800 font-medium leading-relaxed">
            <p>
              Cloud isn&apos;t just about moving servers to AWS — it&apos;s about building
              infrastructure that runs your business reliably, scales when demand spikes, and
              doesn&apos;t drain your budget with poorly configured resources. Most businesses we
              work with come to us after experiencing exactly that — cloud bills that keep climbing,
              deployments that take days instead of hours, or infrastructure that can&apos;t keep
              up with their product.
            </p>
            <p>
              At Trimsel, we provide end-to-end cloud consulting across AWS, Azure, and Google
              Cloud Platform. Our cloud engineers handle strategy, migration planning, architecture
              design, security hardening, cost optimisation, and managed support — giving your team
              a production-grade cloud environment without needing to hire a dedicated{" "}
              <Link
                href="/devops-consulting-services"
                className="text-[#1C75BC] underline hover:text-[#1568a0]"
              >
                DevOps team
              </Link>{" "}
              in-house. We use Terraform for infrastructure as code, Kubernetes for container
              orchestration, and tools like Prometheus and Grafana for monitoring — not because
              they&apos;re trendy, but because they&apos;re proven at scale.
            </p>
            <p>
              We&apos;ve delivered cloud projects that reduced infrastructure costs by an average of
              40% while improving uptime to 99.95%. Our work on the{" "}
              <Link
                href="/portfolio"
                className="text-[#1C75BC] underline hover:text-[#1568a0]"
              >
                Mocial platform
              </Link>{" "}
              — migrating from a single EC2 monolith to EKS microservices — gave the team the
              deployment confidence they needed to ship features without risking downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Services — 6 cards */}
      <div id="services">
        <ServiceCardsGrid
          eyebrow="OUR CLOUD CONSULTING SERVICES"
          heading="End-to-End Cloud Services — From Strategy to Managed Support"
          description="Every cloud engagement starts with understanding where you are and where you need to be. Here's how we get you there."
          services={services}
          dark={true}
        />
      </div>

      {/* Cloud Deployment Models — 4 cards */}
      <FeaturesGrid
        eyebrow="CLOUD DEPLOYMENT MODELS"
        heading="Flexible Cloud Infrastructure — Matched to How Your Business Actually Operates"
        description="Every business has different operational, security, and scalability requirements. We help you choose and implement the right deployment model."
        features={deploymentModels}
        columns={4}
        sectionClass="bg-gradient-to-br from-[#eef3f8] to-[#f7f4ef]"
      />

      {/* CTA below Deployment Models */}
      <div className="bg-gradient-to-br from-[#eef3f8] to-[#f7f4ef] pb-16 px-4 text-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-lg bg-[#1C75BC] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
        >
          Let&apos;s Discuss Your Cloud Infrastructure
          <Image src="/Home/right-arrow.svg" width={16} height={16} alt="" />
        </Link>
      </div>

      {/* Why Trimsel — 6 cards */}
      <FeaturesGrid
        eyebrow="WHY TRIMSEL"
        heading="Why Businesses Choose Trimsel for Cloud Consulting"
        description="We build cloud infrastructure that works in production — not just in proposals."
        features={whyTrimsel}
        columns={3}
      />

      {/* Cloud Adoption Process — 6 steps accordion */}
      <CloudProcessAccordion />

      {/* Mid-page CTA */}
      <GetInTouchBanner
        eyebrow="GET IN TOUCH"
        heading="Planning a Cloud Migration? Let's Map It Out."
        description="Whether you're moving from on-premise, optimising an existing cloud setup, or starting fresh — tell our cloud consulting team what you're working with and we'll give you a clear assessment."
        ctaText="Talk to Our Cloud Team"
        ctaLink="/contact-us"
        image="/getintouch1.svg"
        imageAlt="Cloud consulting contact"
        bgClass="bg-gradient-to-r from-[#d9e6f2] to-[#cfd8e6]"
      />

      {/* Tools & Technologies */}
      <TechStackTabs
        eyebrow="TOOLS AND TECHNOLOGIES"
        heading="The Cloud Infrastructure Stack We Build With"
        description="We choose platforms and tools based on what each infrastructure project actually needs."
        tabs={techTabs}
      />

      {/* Case Studies — Mocial first */}
      <CaseStudyCarousel
        studies={[caseStudies.mocial, caseStudies.kariot, caseStudies.ezyhelpers]}
      />

      <Client />

      <Testimonial />

      <IndustriesWeServe
        description="We've designed and managed cloud infrastructure for businesses across SaaS, FinTech, healthcare, logistics, e-commerce, IoT, and enterprise operations — each with its own compliance requirements, uptime expectations, and scaling patterns."
      />

      <Contactform
        eyebrow="GET IN TOUCH"
        heading="Planning a Cloud Migration or Infrastructure Upgrade? Talk to Our Experts."
        subheading="Share your current setup and goals with our certified AWS, Azure, and GCP cloud consultants — we'll assess your infrastructure, identify cost and performance opportunities, and recommend the right migration path."
        formTitle="Start Your Cloud Project"
        defaultService="Cloud"
      />

      <LatestInsights posts={posts} />

      <Faq />
    </main>
  );
}
