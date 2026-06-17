"use client";
import { useState } from "react";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import LatestInsights from "@/components/LatestInsights";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechStackTabs from "@/components/TechStackTabs";
import DevOpsProcessAccordion from "@/app/devops-consulting-services/DevOpsProcessAccordion";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonial from "@/components/testimonial";

const services = [
  {
    id: 1,
    title: "CI/CD Pipeline Automation",
    icon: "/icons/devopsservices1.svg",
    description:
      "We design and implement automated build, test, and deployment pipelines using Jenkins, GitHub Actions, GitLab CI, Azure DevOps, and AWS CodePipeline. Every pipeline includes automated testing gates, artifact management, environment promotion workflows, and rollback mechanisms.",
    points: [
      "Jenkins & GitHub Actions",
      "Automated Testing Gates",
      "Artifact Management",
      "Environment Promotion",
      "Rollback Mechanisms",
    ],
  },
  {
    id: 2,
    title: "Infrastructure as Code (IaC)",
    icon: "/icons/devopsservices2.svg",
    description:
      "We manage your infrastructure through code — using Terraform, Ansible, CloudFormation, and Pulumi to provision, modify, and version-control servers, networks, databases, and security groups programmatically. No more manual SSH sessions. Every environment is reproducible, auditable, and can be recreated in minutes.",
    points: [
      "Terraform & Ansible",
      "Version-Controlled Infra",
      "Reproducible Environments",
      "CloudFormation & Pulumi",
      "Audit Trails",
    ],
  },
  {
    id: 3,
    title: "Kubernetes & Container Management",
    icon: "/icons/devopsservices3.svg",
    description:
      "We deploy and manage containerized applications on Kubernetes — including EKS, AKS, and GKE clusters — with Docker containerization, Helm chart management, horizontal pod autoscaling, pod disruption budgets, and namespace isolation. We build orchestration environments that scale automatically and recover from failures.",
    points: [
      "EKS, AKS & GKE",
      "Helm Chart Management",
      "Horizontal Pod Autoscaling",
      "Namespace Isolation",
      "Self-Healing Clusters",
    ],
  },
  {
    id: 4,
    title: "DevSecOps Integration",
    icon: "/icons/devopsservices4.svg",
    description:
      "We embed security into every stage of your delivery pipeline — SAST/DAST scanning in CI pipelines, container image vulnerability scanning with Trivy, secrets management with HashiCorp Vault, network policies in Kubernetes, and compliance monitoring aligned with SOC 2, HIPAA, and PCI-DSS.",
    points: [
      "SAST/DAST in CI Pipelines",
      "Container Image Scanning",
      "Secrets Management (Vault)",
      "Kubernetes Network Policies",
      "SOC 2 & HIPAA Alignment",
    ],
  },
  {
    id: 5,
    title: "Monitoring & Observability",
    icon: "/icons/devopsservices5.svg",
    description:
      "We implement full-stack observability — infrastructure metrics with Prometheus and Grafana, centralised logging with ELK Stack or Loki, distributed tracing with Jaeger or OpenTelemetry, and alerting with PagerDuty or Opsgenie. Dashboards that show what's happening in production right now.",
    points: [
      "Prometheus & Grafana",
      "ELK Stack / Loki Logging",
      "OpenTelemetry Tracing",
      "PagerDuty Alerting",
      "Custom Dashboards",
    ],
  },
  {
    id: 6,
    title: "Cloud Infrastructure Automation",
    icon: "/icons/devopsservices6.svg",
    description:
      "We automate cloud provisioning, scaling, and lifecycle management across AWS, Azure, and GCP — setting up auto-scaling groups, load balancers, CDN layers, backup policies, and cost governance rules. Our cloud automation typically reduces infrastructure costs by 30–40%.",
    points: [
      "Auto-Scaling Groups",
      "Load Balancer Config",
      "CDN & Caching Layers",
      "Backup Policies",
      "Cost Governance Rules",
    ],
  },
  {
    id: 7,
    title: "Microservices Architecture & Migration",
    icon: "/icons/devopsservices7.svg",
    description:
      "We help teams decompose monolithic applications into independently deployable microservices — defining service boundaries, designing inter-service communication (REST, gRPC, message queues), implementing API gateways, and setting up service mesh infrastructure with Istio or Linkerd.",
    points: [
      "Service Boundary Design",
      "REST & gRPC Comms",
      "API Gateway Setup",
      "Service Mesh (Istio)",
      "Canary Deployments",
    ],
  },
];

const whyTrimsel = [
  {
    icon: "/icons/Devops-what-we-do1.svg",
    title: "60+ Pipelines in Production",
    description:
      "We've built and maintained CI/CD pipelines for 60+ projects — SaaS platforms, FinTech products, e-commerce systems, and enterprise applications. These are production systems running deployments every day with 99.95% uptime targets.",
  },
  {
    icon: "/icons/Devops-what-we-do2.svg",
    title: "Certified DevOps Engineers",
    description:
      "Our team works daily with Kubernetes, Docker, Jenkins, GitHub Actions, Terraform, Ansible, Prometheus, and Grafana. Engineers who have managed production infrastructure under real traffic — not consultants who set up tools once.",
  },
  {
    icon: "/icons/Devops-what-we-do3.svg",
    title: "Security-First Pipeline Design",
    description:
      "Every pipeline includes automated security scanning — SAST, DAST, container image scanning, secrets management, and compliance gates. DevSecOps from the start, not as an afterthought.",
  },
  {
    icon: "/icons/Devops-what-we-do4.svg",
    title: "Vendor-Neutral Tooling Recommendations",
    description:
      "We recommend Jenkins, GitHub Actions, GitLab CI, ArgoCD, or CircleCI based on your team's workflow and infrastructure needs — not based on partnership deals.",
  },
  {
    icon: "/icons/devopsservices5.svg",
    title: "We Stay Until Your Team Can Run It",
    description:
      "We implement the pipeline, monitor it in production, train your engineers, and stay involved until your team can operate independently. Or we offer dedicated managed DevOps support with 24/7 monitoring.",
  },
  {
    icon: "/icons/devopsservices6.svg",
    title: "Mocial Is What We Actually Deliver",
    description:
      "Our migration of Mocial from EC2 monolith to EKS microservices with Codefresh CI/CD, canary deployments, and full observability is documented in a public case study — showing exactly how we work.",
  },
];

const techTabs = [
  {
    name: "CI/CD & SOURCE CONTROL",
    tools: [
      { name: "Jenkins", icon: "/icons/Tools/jenkins.svg" },
      { name: "GitHub Actions", icon: "/icons/Tools/githubactions.svg" },
      { name: "GitLab CI", icon: "/icons/Tools/gitlabci.svg" },
      { name: "Codefresh", icon: "/icons/Tools/codefresh.svg" },
      { name: "Docker", icon: "/icons/Tools/docker.svg" },
      { name: "Kubernetes", icon: "/icons/Tools/kubernetes.svg" },
      { name: "Terraform", icon: "/icons/Tools/terraform.svg" },
      { name: "Ansible", icon: "/icons/Tools/ansible.svg" },
    ],
  },
  {
    name: "INFRASTRUCTURE & CONTAINERS",
    tools: [
      { name: "Terraform", icon: "/icons/Tools/terraform.svg" },
      { name: "Ansible", icon: "/icons/Tools/ansible.svg" },
      { name: "Docker", icon: "/icons/Tools/docker.svg" },
      { name: "Kubernetes", icon: "/icons/Tools/kubernetes.svg" },
      { name: "AWS EKS", icon: "/icons/Tools/awseks.svg" },
      { name: "Prometheus", icon: "/icons/Tools/prometheus.svg" },
      { name: "Grafana", icon: "/icons/Tools/grafana.svg" },
    ],
  },
  {
    name: "MONITORING & SECURITY",
    tools: [
      { name: "Prometheus", icon: "/icons/Tools/prometheus.svg" },
      { name: "Grafana", icon: "/icons/Tools/grafana.svg" },
      { name: "Docker", icon: "/icons/Tools/docker.svg" },
      { name: "Kubernetes", icon: "/icons/Tools/kubernetes.svg" },
      { name: "GitHub Actions", icon: "/icons/Tools/githubactions.svg" },
    ],
  },
];

export default function DevOpsConsulting({ posts = [] }) {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <main>
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#003b5c_0%,_transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#003b5c_0%,_transparent_30%)]" />

        <div className="container mx-auto mt-6 md:mt-10 px-4 py-8 text-white sm:py-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 md:px-12 lg:px-20">
            {/* LEFT CONTENT */}
            <div className="relative z-20 text-center md:text-left">
              {/* Breadcrumb */}
              <p className="text-md md:text-base font-medium text-white mb-4">
                <Link
                  href="/"
                  className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
                >
                  Home
                </Link>
                {" • "}
                <span className="px-2 py-1 rounded-md">DevOps Consulting Services</span>
              </p>

              <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
                DevOps Consulting Services in India
              </h1>

              <h2 className="mb-6 text-xl font-semibold text-[#27AAE1] sm:text-2xl">
                Ship Faster. Break Less. Scale Without the Fire Drills.
              </h2>

              <p className="mb-8 max-w-xl text-base sm:text-lg text-white/90 font-medium">
                Trimsel provides DevOps consulting services built around one goal — helping your
                engineering team deploy reliably, recover quickly, and scale infrastructure without
                adding operational overhead. Our DevOps engineers implement CI/CD pipelines,
                Kubernetes orchestration, Terraform-based infrastructure as code, and DevSecOps
                practices that turn fragile manual deployments into repeatable, automated, and
                secure delivery workflows.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
                >
                  Schedule a DevOps Consultation
                  <Image src="/Home/right-arrow.svg" width={20} height={20} alt="" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  See Our DevOps Work
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative z-10 flex justify-center md:justify-end">
              <Image
                src="/devops-hero.svg"
                alt="DevOps consulting services in India — CI/CD pipelines, Kubernetes, and infrastructure automation"
                width={750}
                height={750}
                className="h-auto w-full max-w-[300px] sm:max-w-md md:max-w-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-[#0d1b2a] border-t border-white/10 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">60+</p>
            <p className="text-sm font-medium mt-1 text-gray-300">CI/CD Pipelines Built</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">99.95%</p>
            <p className="text-sm font-medium mt-1 text-gray-300">Uptime SLA</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">Mocial</p>
            <p className="text-sm font-medium mt-1 text-gray-300">EC2 → EKS Migration</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#27AAE1]">Jenkins, Terraform</p>
            <p className="text-sm font-medium mt-1 text-gray-300">& Kubernetes</p>
          </div>
        </div>
      </section>

      <Client />

      {/* What We Do — Service Overview */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHAT WE DO
          </h2>
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            DevOps Services Built for Teams That Ship to Production Every Day
          </h3>

          <div className="mt-8 space-y-5 max-w-4xl mx-auto text-gray-800 font-medium leading-relaxed">
            <p>
              Most teams we work with come to us with the same problem — deployments are slow,
              risky, or both. Their engineers spend hours babysitting releases, infrastructure
              changes require manual SSH sessions, and when something breaks in production,
              nobody&apos;s sure what changed or when. DevOps isn&apos;t about adopting tools —
              it&apos;s about building systems that make shipping safe, fast, and boring.
            </p>
            <p>
              At Trimsel, we&apos;ve built and maintained 60+ CI/CD pipelines for SaaS platforms,
              FinTech products, e-commerce systems, and enterprise applications — using Jenkins,
              GitHub Actions, GitLab CI, Terraform, Ansible, Docker, and Kubernetes. We
              don&apos;t just set up tools and hand over a wiki — we implement the full delivery
              pipeline, monitor it in production, and stay involved until your team can run it
              independently. We pair every DevOps engagement with the right{" "}
              <Link
                href="/cloud-consulting-services"
                className="text-[#1C75BC] underline hover:text-[#1568a0]"
              >
                cloud infrastructure
              </Link>{" "}
              to support it.
            </p>
            <p>
              Our DevOps work on the{" "}
              <Link
                href="/portfolio"
                className="text-[#1C75BC] underline hover:text-[#1568a0]"
              >
                Mocial platform
              </Link>{" "}
              is the clearest example of what we do. Mocial started as a single EC2 monolith. We
              migrated it to a microservices architecture on Amazon EKS with Codefresh CI/CD,
              canary deployments, OpenTelemetry observability, and horizontal pod autoscaling.
              The team went from dreading deployments to shipping multiple times a week with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* DevOps Services — 7 cards, left-nav layout */}
      <section className="bg-white px-4 md:px-10 py-16">
        <div className="mb-8 max-w-6xl mx-auto">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            OUR DEVOPS SERVICES
          </h2>
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            End-to-End DevOps Services — From Pipeline Setup to Production Operations
          </h3>
          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Every DevOps engagement starts with understanding how your team ships code today —
            and what&apos;s breaking or slowing you down.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16">
            {/* LEFT — Tab List */}
            <div className="flex flex-col gap-1 w-full md:w-[380px]">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-3 text-left px-6 py-3 rounded-md text-md font-semibold transition-all duration-200 ${
                    active === i
                      ? "bg-[#1C75BC] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={35}
                    height={35}
                    className={`${active === i ? "brightness-0 invert" : ""}`}
                  />
                  <span>{s.title}</span>
                </button>
              ))}
            </div>

            {/* RIGHT — Content Card */}
            <div className="relative rounded-xl bg-[#EBF4FF] p-6 sm:p-8 max-w-2xl ml-0 md:ml-32">
              <span className="absolute top-4 right-6 text-6xl font-bold text-white select-none">
                {selected.id}.
              </span>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/70 shadow-sm">
                <Image src={selected.icon} alt={selected.title} width={40} height={40} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                {selected.title}
              </h3>
              <p className="mb-5 text-md leading-relaxed text-gray-600 sm:text-base max-w-lg font-medium">
                {selected.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {selected.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-md text-black font-medium"
                  >
                    <span className="text-gray-500">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trimsel — 6 cards */}
      <FeaturesGrid
        eyebrow="WHY TRIMSEL"
        heading="Why Engineering Teams Choose Trimsel for DevOps Consulting"
        description="We've built DevOps foundations for startups shipping their first release and enterprises untangling years of deployment debt."
        features={whyTrimsel}
        columns={3}
        sectionClass="bg-gradient-to-br from-[#eef3f8] to-[#f7f4ef]"
      />

      {/* DevOps Implementation Process — 5 steps */}
      <DevOpsProcessAccordion />

      {/* Mid-page CTA */}
      <GetInTouchBanner
        eyebrow="GET IN TOUCH"
        heading="Build Faster and More Stable Deployment Environments"
        description="Whether you're setting up your first CI/CD pipeline or migrating from a monolith to microservices — tell our DevOps engineers what you're working with."
        ctaText="Schedule a DevOps Consultation"
        ctaLink="/contact-us"
        image="/Devops-getintouch.svg"
        imageAlt="DevOps consulting contact"
        bgClass="bg-[#552A8B]"
        darkBg={true}
      />

      {/* Tools & Technologies */}
      <TechStackTabs
        eyebrow="TOOLS AND TECHNOLOGIES"
        heading="The DevOps Stack We Build and Manage"
        description="We choose tools based on what each project actually needs — not what's popular on conference talks."
        tabs={techTabs}
      />

      {/* Case Studies — Mocial first */}
      <CaseStudyCarousel
        studies={[caseStudies.mocial, caseStudies.kariot, caseStudies.ezyhelpers]}
      />

      <Testimonial />

      <IndustriesWeServe
        description="We've built and managed DevOps infrastructure for SaaS platforms, FinTech products, healthcare applications, e-commerce systems, IoT platforms, and enterprise operations — each with its own compliance requirements, uptime expectations, and release frequency demands."
      />

      <Contactform
        eyebrow="GET IN TOUCH"
        heading="Struggling with Slow or Risky Deployments? Let's Fix That."
        subheading="Tell our DevOps engineers what you're working with — current stack, deployment frequency, pain points — and we'll assess your pipeline and give you a clear plan."
        formTitle="Start Your DevOps Project"
        defaultService="DevOps"
      />

      <LatestInsights posts={posts} />

      <Faq />
    </main>
  );
}
