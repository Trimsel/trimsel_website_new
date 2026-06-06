"use client";
import { useState } from "react";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import OurBlog from "@/components/OurBlog";
import { blogData } from "@/data/blogData";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CaseStudiesSection from "@/components/relatedcasestudy";
import { caseStudies } from "@/data/caseStudies";
import FeaturesGrid from "@/components/FeaturesGrid";

const services = [
  {
    id: 1,
    title: "Continuous Integration",
    icon: "/icons/devopsservices1.svg",
    description:
      "CI is an industry standard to detect problems early. Our experts use tools like Jenkins, Docker, and Kubernetes to improve collaboration and save time.",
    points: [
      "Better Time Management",
      "Instant Feedback",
      "Early Problem Detection",
      "Productive Development",
      "No Last-minute Issues",
    ],
  },
  {
    id: 2,
    title: "Continuous Delivery",
    icon: "/icons/devopsservices2.svg",
    description:
      "Continuous Delivery ensures your software is always deployable with automated release pipelines for faster and reliable updates.",
    points: [
      "Faster Releases",
      "Reduced Risk",
      "Automated Pipelines",
      "Consistent Deployments",
      "Improved Collaboration",
    ],
  },
  {
    id: 3,
    title: "Infrastructure Management",
    icon: "/icons/devopsservices3.svg",
    description:
      "We automate and manage infrastructure to ensure scalability, reliability, and security across all environments.",
    points: [
      "Auto Scaling",
      "Cost Optimization",
      "High Availability",
      "Security Compliance",
      "24/7 Monitoring",
    ],
  },
  {
    id: 4,
    title: "Configuration Management",
    icon: "/icons/devopsservices4.svg",
    description:
      "Ensure consistency across systems using tools like Ansible, Puppet, and Chef with automated configuration management.",
    points: [
      "Environment Consistency",
      "Reduced Errors",
      "Version Control",
      "Automated Rollbacks",
      "Faster Provisioning",
    ],
  },
  {
    id: 5,
    title: "Continuous Testing",
    icon: "/icons/devopsservices5.svg",
    description:
      "Automated testing integrated into every stage helps detect bugs early and maintain high software quality.",
    points: [
      "Automated Test Suites",
      "Early Bug Detection",
      "Faster Feedback",
      "Improved Code Quality",
      "Reduced QA Costs",
    ],
  },
  {
    id: 6,
    title: "Continuous Monitoring",
    icon: "/icons/devopsservices6.svg",
    description:
      "Real-time monitoring ensures maximum uptime, performance tracking, and quick incident resolution.",
    points: [
      "Real-time Alerts",
      "Performance Insights",
      "Log Management",
      "Incident Response",
      "Uptime Guarantee",
    ],
  },
  {
    id: 7,
    title: "Microservices",
    icon: "/icons/devopsservices7.svg",
    description:
      "We build scalable microservices architectures for flexibility, faster deployment, and easy maintenance.",
    points: [
      "Independent Scaling",
      "Fault Isolation",
      "Technology Flexibility",
      "Faster Development",
      "Easy Maintenance",
    ],
  },
];

const features = [
  {
    icon: "/icons/Devops-what-we-do1.svg",
    title: "Complex Delivery Experience",
    description: "We have years of experience in helping organizations streamline the release cycles of different applications, from legacy to agile and beyond. Our experts ensure that the best CI/CD practices are implemented.",
  },
  {
    icon: "/icons/Devops-what-we-do2.svg",
    title: "Skilled And Talented Engineers",
    description: "We have years of experience in helping organizations streamline the release cycles of different applications, from legacy to agile and beyond. Our experts ensure that the best CI/CD practices are implemented.",
  },
  {
    icon: "/icons/Devops-what-we-do3.svg",
    title: "Best Security Integration",
    description: "We have years of experience in helping organizations streamline the release cycles of different applications, from legacy to agile and beyond. Our experts ensure that the best CI/CD practices are implemented.",
  },
  {
    icon: "/icons/Devops-what-we-do4.svg",
    title: "Dedicated DevOps Team",
    description: "We have years of experience in helping organizations streamline the release cycles of different applications, from legacy to agile and beyond. Our experts ensure that the best CI/CD practices are implemented.",
  },
];

export default function DevOpsConsulting() {
  const [active, setActive] = useState(0);
  const selected = services[active];

  return (
    <main>
      <Header transparent />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#003b5c_0%,_transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#003b5c_0%,_transparent_30%)]"></div>

        <div className="container mx-auto mt-6 md:mt-10 px-4 py-8 text-white sm:py-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 md:px-12 lg:px-20">
            {/* LEFT CONTENT */}
            <div className="relative z-20 text-center md:text-left">
              {/* BREADCRUMB */}
              <p className="text-md md:text-base font-medium text-white mb-4">
                <Link
                  href="/"
                  className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
                >
                  Home
                </Link>

                {" • "}

                <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                  Devops Consulting Services
                </span>
              </p>

              <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
                Leading DevOps Consulting Services
              </h1>

              <p className="mb-8 max-w-xl text-base sm:text-lg">
                Trimsel is a top-rated DevOps company in India offering
                expert DevOps consulting services to businesses worldwide. We
                help teams build scalable CI/CD pipelines, leverage Kubernetes,
                and automate infrastructure for high-speed, secure, and reliable
                deployments.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
              >
                Contact Our Cloud Expert{" "}
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative z-10 flex justify-center md:justify-end">
              <Image
                src="/devops-hero.svg"
                alt="DevOps Illustration"
                width={750}
                height={750}
                className="h-auto w-full max-w-[300px] sm:max-w-md md:max-w-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 py-16">
        <div className="mb-8">
          <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
            WHAT WE DO
          </h3>
          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            Our DevOps Service Offerings
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Different phases of Devops process integrated into any business
            model seamlessly. Businesses to modernize their technologies.
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
                  {/* ICON */}
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={35}
                    height={35}
                    className={`${active === i ? "brightness-0 invert" : ""}`}
                  />

                  {/* TITLE */}
                  <span>{s.title}</span>
                </button>
              ))}
            </div>

            {/* RIGHT — Content Card */}
            <div className="relative rounded-xl bg-[#EBF4FF] p-6 sm:p-8 max-w-2xl ml-0 md:ml-32">
              {/* Large number watermark */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-white select-none">
                {selected.id}.
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/700 shadow-sm">
                <Image
                  src={selected.icon}
                  alt={selected.title}
                  width={40}
                  height={40}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                {selected.title} :
              </h3>

              {/* Description */}
              <p className="mb-5 text-md leading-relaxed text-gray-600 sm:text-base max-w-lg font-medium">
                {selected.description}
              </p>

              {/* Points — 2 column grid */}
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

      <section className="bg-white px-10 py-16">
        <div className="mb-8">
          <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
            IMPLEMENTATION PROCESS
          </h3>

          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            Step By Step Devops Implementation Process
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Different phases of Devops process integrated into any business
            model seamlessly. Modern technology and cloud computing have opened
            new avenues for businesses to modernize.
          </p>
        </div>

        {/* IMAGE BELOW CONTENT */}
        <div className="flex justify-center mt-10">
          <Image
            src="/ImplementationProcess.svg" // put your image in public folder
            alt="What we do"
            width={1200}
            height={600}
            className="w-[100%] md:w-[100%]"
          />
        </div>
      </section>

      <FeaturesGrid
        eyebrow="WHY CHOOSE US"
        heading="Why choose Trimsel for your DevOps services?"
        description="Clients choose us because of our ability to improve business agility, increase efficiency, and reduce costs. We are differentiated by our."
        features={features}
        columns={4}
        dark={true}
      />

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="STREAMLINE OPS"
        heading="Deploy Faster With Confidence"
        description="Our DevOps engineers build CI/CD pipelines, automate infrastructure, and set up monitoring — so your team ships code faster with fewer failures."
        ctaText="Talk to Our Experts"
        ctaLink="/contact-us"
        image="/Devops-getintouch.svg"
        imageAlt="DevOps consulting contact"
        bgClass="bg-[#552A8B]"
        darkBg={true}
      />

      <CaseStudiesSection
        tag="RELATED CASE STUDIES"
        heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
        studies={[caseStudies.kariot, caseStudies.mocial]}
      />

      <Client />

      <Contactform
        eyebrow="AUTOMATE & SCALE"
        heading="Want Faster, More Reliable Deployments?"
        subheading="Tell us about your infrastructure challenges. From CI/CD pipelines and Kubernetes orchestration to monitoring and incident response — we'll build a DevOps practice that actually works."
        formTitle="Discuss Your DevOps Needs"
        defaultService="DevOps"
      />

      <OurBlog {...blogData.devops} />

      <Faq />

    </main>
  );
}
