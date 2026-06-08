"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Whatwedo from "@/components/Whatwedo";
import Ourprocess from "@/app/Home/Ourprocess";
import Testimonial from "@/components/testimonial";
import LatestInsights from "@/components/LatestInsights";
import FeaturesGrid from "@/components/FeaturesGrid";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import FaqSection from "@/components/Faq";
import { ToolsSection } from "./Home/ToolsSection";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import { useState } from "react";

const HERO_WORDS = [
  "Mobile Apps",
  "Web Platforms",
  "AI Solutions",
  "Cloud Infrastructure",
  "DevOps Automation",
  "Digital Marketing",
];

export default function Home({ posts = [] }) {
  const [index, setIndex] = useState(0);

  // ✅ remove the full-page hydration guard that causes a blank screen flash
  // if (!mounted) return null;

  const cards = [
    {
      title: "TIME & MATERIALS (T&M)",
      headerColor: "#ed6b5a",
      arrowColor: "#d95a4a",
      bodyColor: "#f28a7e",
      BestFor:
        "evolving scope, iterative development, or ongoing product work.",
      items: [
        "You control priorities and resource allocation throughout the engagement",
        "Billed only for work actually completed, per sprint or hourly",
        "Full flexibility to adjust scope, features, and direction as needs change",
        "Ideal for startups validating ideas or products evolving through user feedback",
        "Dedicated project manager keeps delivery on track and stakeholders informed",
      ],
    },
    {
      title: "FIXED-FEE PROJECT",
      headerColor: "#5b4372",
      arrowColor: "#4a3659",
      bodyColor: "#7f659d",
      BestFor:
        "well-defined projects with clear deliverables, agreed timelines, and fixed budgets.",
      items: [
        "Well-defined requirements and scope agreed upfront — no hidden surprises",
        "Suitable for MVPs, website builds, app launches, and defined feature releases",
        "Milestone-based delivery with sign-off at each stage",
        "Change requests handled transparently with clear impact on scope and timeline",
        "Our team manages quality end to end — delivered on time, within agreed scope",
      ],
    },
    {
      title: "DEDICATED TEAM MODEL",
      headerColor: "#f8b652",
      arrowColor: "#e5a33d",
      bodyColor: "#fcc572",
      BestFor:
        "ongoing product development, team augmentation, or long-term engineering partnerships.",
      items: [
        "A dedicated pod of developers, designers, DevOps engineers, and QA assigned to your product",
        "Fully embedded into your engineering workflow with shared tools and processes",
        "Attends your sprints, standups, and planning sessions — just like an in-house team",
        "Scales up or down based on delivery phase and business priorities",
        "Full ownership of delivery and quality assurance — engagement continues post-launch",
      ],
    },
  ];

  return (
    <main>
      <Header />

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-100 via-[#d4e9fd] to-white text-black">
        <div className="container mx-auto flex min-h-screen items-center px-4 pb-10 pt-16 sm:px-6 md:pt-16 lg:pt-20">
          <div className="relative z-10 grid w-full items-center gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-[58%_42%] xl:grid-cols-[55%_45%] md:gap-8 lg:gap-8 xl:gap-24 md:px-6 lg:pr-0 lg:pl-6 xl:pl-10">
            <div className="relative z-20 mt-6 text-center md:mt-10 lg:mt-16 md:text-left">
              <h1 className="mb-8 whitespace-nowrap text-[24px] font-bold leading-tight sm:text-4xl md:text-[38px] lg:text-[40px] xl:text-5xl tracking-tight">
                We Engineer Businesses
                <br />
                <span className="inline-flex items-baseline justify-center whitespace-nowrap gap-2 sm:justify-start">
                  <span>That Scale — with</span>
                  <span
                    key={index}
                    suppressHydrationWarning
                    onAnimationEnd={() =>
                      setIndex((prev) => (prev + 1) % HERO_WORDS.length)
                    }
                    className="inline-block whitespace-nowrap text-xl font-semibold text-[#1FA6A0] sm:text-3xl md:text-[30px] lg:text-[34px] xl:text-4xl animate-rotate-word"
                  >
                    {HERO_WORDS[index]}
                  </span>
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-base sm:text-lg">
                Trimsel helps startups, growing businesses, and enterprise teams
                build custom software and AI-driven digital products — from
                intelligent mobile apps and scalable web platforms to cloud
                infrastructure and DevOps automation. We handle the full
                engineering journey so your team stays focused on growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
                >
                  Book a Free Strategy Call{" "}
                  <Image
                    src="/Home/right-arrow.svg"
                    width={20}
                    height={20}
                    alt="RightArrow"
                  />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 rounded-lg border-2 border-gray-800 px-7 py-3.5 text-base font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1896cd] hover:text-[#1896cd] hover:shadow-lg"
                >
                  See Our Work{" "}
                  <Image
                    src="/Home/right-arrow.svg"
                    width={20}
                    height={20}
                    alt="RightArrow"
                  />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto flex h-[340px] w-full max-w-[620px] items-center justify-center pt-8 sm:pt-0 sm:h-[440px] md:h-[72vh] md:max-h-[620px] md:-translate-x-2 lg:-translate-x-4 xl:-translate-x-8">
              <div className="absolute z-0 h-[240px] w-[240px] rounded-full bg-blue-200 opacity-60 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]" />

              <Image
                src="/Home/HomeImage.svg"
                alt="AI-powered software development services — mobile app, web, cloud, DevOps, and digital marketing"
                width={400}
                height={380}
                className="relative z-10 w-[280px] animate-shake sm:w-[360px] md:w-[85%] lg:w-[80%] xl:w-[430px]"
                priority
              />

              <Image
                src="/Home/Robot.svg"
                alt="AI robot illustration"
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-auto w-[150px] sm:w-[190px] md:w-[45%] lg:w-[45%] xl:w-[225px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* client */}
      <Client />

      {/* Works */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHO WE ARE
          </h2>

          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Built by Engineers. Trusted by Businesses. Delivered With
            Accountability.
          </h3>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            We started Trimsel in 2020 in Chennai with one clear mission — build
            software that solves real business problems, not just
            impressive-looking demos. Our team spans{" "}
            <Link href="/ai-development-company" className="underline hover:text-[#1C75BC]">AI development</Link>,{" "}
            <Link href="/mobile-app-development-chennai" className="underline hover:text-[#1C75BC]">mobile apps</Link>,{" "}
            <Link href="/web-development-company-chennai" className="underline hover:text-[#1C75BC]">web platforms</Link>,{" "}
            <Link href="/cloud-consulting-services" className="underline hover:text-[#1C75BC]">cloud consulting</Link>,{" "}
            <Link href="/devops-consulting-services" className="underline hover:text-[#1C75BC]">DevOps automation</Link>, and{" "}
            <Link href="/digital-marketing-company-chennai" className="underline hover:text-[#1C75BC]">digital marketing</Link>.
            {" "}We&apos;ve helped startups turn their ideas into real
            products and worked with established businesses replacing systems
            that had outgrown their purpose. Wherever our clients are in their
            journey, we take time to understand their goals, build the right
            solution, and stay involved until it&apos;s delivered properly. With 200+
            projects behind us and a 92% client retention rate, that approach
            speaks for itself.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work1.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">30+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Web & Mobile Products
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work2.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">2000+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Million Users Touched
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work3.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">110+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Project Launched
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work4.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">99%</div>
              <p className="mt-2 text-sm font-medium text-black">
                customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Whatwedo */}
      <Whatwedo />

      {/* Why Choose Us */}
      <FeaturesGrid
        eyebrow="WHY TRIMSEL"
        heading="The Difference Is in How We Work — Not Just What We Build"
        description="Most agencies look similar on paper — similar services, similar claims, similar pricing decks. As a full-service software development company in Chennai, what separates Trimsel is how we engage: starting with the business problem, not the technology, and staying accountable through every phase until the outcome is right."
        columns={4}
        features={[
          {
            icon: "/icons/whytrimsel1.svg",
            title: "Clients Across Industries & Geographies",
            description: "We've worked with seed-stage startups validating their first product and established businesses replacing systems that no longer scaled. Across FinTech, HealthTech, logistics, SaaS, and home services — the common thread is teams who needed engineering they could trust.",
          },
          {
            icon: "/icons/whytrimsel2.svg",
            title: "Certified Developers & Cloud Architects",
            description: "Our team includes certified AWS and GCP cloud architects, DevOps engineers who've run Kubernetes at scale, full-stack developers across React and Node.js, and AI engineers who've shipped production ML models — not just proof of concepts.",
          },
          {
            icon: "/icons/whytrimsel3.svg",
            title: "Hire Developers or Build a Full Team",
            description: "Need a full product team from day one? A few specialists to extend your in-house engineers? Or ongoing support after launch? We structure every engagement around what the project actually needs — not a standard package.",
          },
          {
            icon: "/icons/whytrimsel4.svg",
            title: "End-to-End Software Delivery — In-House",
            description: "Design, development, DevOps, QA, and post-launch support — all handled by the same in-house team that scoped your project. No account managers relaying messages. No third-party contractors. One point of contact, full accountability.",
          },
        ]}
      />

      <CaseStudyCarousel
        studies={[caseStudies.kariot, caseStudies.ezyhelpers, caseStudies.xaber, caseStudies.mocial]}
      />

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="GET INTO TOUCH"
        heading="Got an Idea? Let's Make It Real."
        description="Whether you're starting from scratch or scaling an existing product, tell us what you're working on and our software development team in Chennai will figure out the best way to build it together."
        ctaText="Talk to Our Experts"
        ctaLink="/contact-us"
        image="/Home/getintouchhomepage.svg"
        imageAlt="Contact Trimsel"
        bgClass="bg-[#F2DFFF]"
      />

      {/* Fivestage */}
      <Ourprocess />

      <IndustriesWeServe />

      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: "url('/Home/model.svg')" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            OUR DELIVERY MODELS
          </h2>

          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Flexible Engagement. Built Around You.
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            We understand that every business works differently. That&apos;s why we
            offer three delivery models designed to fit your timeline, budget,
            and the way your team operates.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {cards.map((card, index) => (
              /* OUTER SHADOW + OUTLINE */
              <div
                key={index}
                className="mt-8 p-[4px] border-2 border-white shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
                style={{
                  clipPath:
                    "polygon(0 0,50% 5%,100% 0,100% 100%,50% 95%,0 100%)",
                  background: "#ffffff",
                }}
              >
                {/* INNER CARD */}
                <div
                  className="bg-white"
                  style={{
                    clipPath:
                      "polygon(0 0,50% 5%,100% 0,100% 100%,50% 95%,0 100%)",
                  }}
                >
                  {/* TOP */}
                  <div
                    className="text-center py-6 px-4"
                    style={{
                      clipPath: "polygon(0 0,100% 0,100% 70%,50% 85%,0 70%)",
                    }}
                  >
                    <h3 className="mt-4 font-bold text-sm sm:text-base tracking-wider uppercase text-[#6F678F]">
                      {card.title}
                    </h3>

                    <div className="flex justify-center mt-4">
                      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-gray-800 rounded-3xl"></div>
                    </div>
                  </div>

                  {/* BODY */}
                  <div
                    className="text-white px-6 py-8 text-sm leading-relaxed"
                    style={{
                      backgroundColor: card.bodyColor,
                      clipPath:
                        "polygon(0 0,50% 5%,100% 0,100% 100%,50% 95%,0 100%)",
                      marginTop: "-20px",
                    }}
                  >
                    {/* NEW: Best For */}
                    <p className="font-semibold mb-2">Best for:</p>
                    <p className="mb-4 text-white/90 text-md font-medium">
                      {card.BestFor}
                    </p>

                    {/* Existing List */}
                    <ul className="space-y-3 text-left list-disc list-inside font-medium text-md">
                      {card.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="LET'S COLLABORATE"
        heading="Start Your Digital Transformation Today"
        description="From idea to launch, our team in Chennai handles every step — design, development, testing, and deployment. Tell us your vision."
        ctaText="Talk to Our Experts"
        ctaLink="/contact-us"
        image="/Home/getintouch.svg"
        imageAlt="Contact Trimsel"
        bgClass="bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white"
      />

      {/* Tools and Technologies */}
      <ToolsSection />

      {/* Testimonial */}
      <Testimonial />

      {/* Contactform */}
      <Contactform
        eyebrow="GET INTO TOUCH"
        heading="Got an Idea? Let's Make It Real."
        subheading="Whether you're starting from scratch or scaling an existing product, tell us what you're working on and our software development team in Chennai will figure out the best way to build it together."
        formTitle="Start Your Project Discussion"
        defaultService=""
      />

      <LatestInsights posts={posts} />

      {/* FaqSection */}
      <FaqSection />

    </main>
  );
}
