"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Whatwedo from "@/components/Whatwedo";
import Ourprocess from "@/app/Home/Ourprocess";
import Testimonial from "@/components/testimonial";
import OurBlog from "@/components/OurBlog";
import FeaturesGrid from "@/components/FeaturesGrid";
import { blogData } from "@/data/blogData";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import FaqSection from "@/components/Faq";
import { ToolsSection } from "./Home/ToolsSection";
import { useState } from "react";

const HERO_WORDS = [
  "Mobile Apps",
  "Web Platforms",
  "AI Solutions",
  "Cloud Infrastructure",
  "DevOps Automation",
  "Digital Marketing",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const caseStudies = [
    {
      img: "/Home/case-study-1.svg",
      btn: "bg-yellow-400 text-black",
      slug: "kariot-case-study",
    },
    {
      img: "/Home/case-study-2.svg",
      btn: "bg-black text-white",
      slug: "xaber-case-study",
    },
    {
      img: "/Home/case-study-3.svg",
      btn: "bg-black text-white",
      slug: "Mocial",
    },
    {
      img: "/Home/case-study-4.svg",
      btn: "bg-black text-white",
      slug: "EzyHelpers",
    },
  ];

  const goToPrevCaseStudy = () =>
    setActiveCaseStudy((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1,
    );

  const goToNextCaseStudy = () =>
    setActiveCaseStudy((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1,
    );

  // ✅ remove the full-page hydration guard that causes a blank screen flash
  // if (!mounted) return null;

  const cards = [
    {
      title: "TIME & MATERIALS (T&M)",
      headerColor: "#ed6b5a",
      arrowColor: "#d95a4a",
      bodyColor: "#f28a7e",
      BestFor:
        "Startups, evolving products, MVP development, and projects with changing requirements",
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
        "Startups, evolving products, MVP development, and projects with changing requirements",
      items: [
        "Well-defined requirements and scope agreed upfront, no hidden surprises",
        "Suitable for MVPs, website builds, app launches, and defined feature releases",
        "Milestone-based delivery with sign-off at each stage",
        "Change requests handled transparently with clear impact on scope and timeline",
        "Our team manages quality end to end, delivered on time, within agreed scope",
      ],
    },
    {
      title: "DEDICATED TEAM MODEL",
      headerColor: "#f8b652",
      arrowColor: "#e5a33d",
      bodyColor: "#fcc572",
      BestFor:
        "Startups, evolving products, MVP development, and projects with changing requirements",
      items: [
        "A dedicated pod of developers, designers, DevOps engineers, and QA  assigned to your product",
        "Fully embedded into your engineering workflow with shared tools and processes",
        "Attends your sprints, standups, and planning sessions just like an in-house team",
        "Scales up or down based on delivery phase and business priorities",
        "Full ownership of delivery and quality assurance, engagement continues post-launch",
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
                  <span>That Scale With</span>
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
                build custom software and AI-driven digital products from
                intelligent mobile apps and scalable web platforms to cloud
                infrastructure and DevOps automation. We handle the full
                engineering journey so your team stays focused on growth.
              </p>

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
            </div>

            <div className="relative mx-auto flex h-[340px] w-full max-w-[620px] items-center justify-center pt-8 sm:pt-0 sm:h-[440px] md:h-[72vh] md:max-h-[620px] md:-translate-x-2 lg:-translate-x-4 xl:-translate-x-8">
              <div className="absolute z-0 h-[240px] w-[240px] rounded-full bg-blue-200 opacity-60 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]" />

              <Image
                src="/Home/HomeImage.svg"
                alt="Trimsel software development"
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

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Built by Engineers. Trusted by Businesses. Delivered With
            Accountability.
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            We started Trimsel in 2020 in Chennai with one clear mission build
            software that solves real business problems, not just
            impressive-looking demos. Our team spans AI development, mobile
            apps, web platforms, cloud consulting, DevOps automation, and
            digital marketing. We&apos;ve helped startups turn their ideas into real
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

      {/* Whatwedo */}
      <Whatwedo />

      {/* Case Study */}
      <section className="bg-white py-8 md:min-h-screen md:flex md:flex-col md:justify-center md:py-16">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            CASE STUDIES
          </h2>
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Projects That Shipped. Results That Speak.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            Each project below shows the same pattern, a real problem, a
            practical solution, and measurable outcomes. Browse the work and see
            how we approach different industries and challenges.
          </p>
        </div>

        {/* ── MOBILE CAROUSEL ──────────────────────────────────── */}
        <div className="relative mt-6 w-full overflow-hidden md:hidden">
          <div className="relative w-full aspect-[1438/763] min-h-[240px]">
            {caseStudies.map((item, i) => (
              <div
                key={`mobile-${item.slug}-${i}`}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  activeCaseStudy === i
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="group relative w-full h-full rounded-none overflow-hidden shadow-lg transition-all duration-300 active:scale-[1.01] bg-gray-100">
                  <Image
                    src={item.img}
                    alt={`Case study ${i + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={i === 0}
                  />
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className={`absolute bottom-[6%] left-[6%] flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 active:scale-105 ${item.btn}`}
                  >
                    View Case Study
                    <Image
                      src="/icons/case-study-arrow.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Prev */}
          <button
            type="button"
            onClick={goToPrevCaseStudy}
            aria-label="Previous case study"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 p-3 min-w-[44px] min-h-[44px] shadow-md backdrop-blur hover:bg-white cursor-pointer"
          >
            <Image
              src="/icons/case-study-arrow.svg"
              alt="Previous"
              width={20}
              height={20}
              className="w-4 h-4 rotate-180"
            />
          </button>

          {/* Mobile Next */}
          <button
            type="button"
            onClick={goToNextCaseStudy}
            aria-label="Next case study"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/80 p-3 min-w-[44px] min-h-[44px] shadow-md backdrop-blur hover:bg-white cursor-pointer"
          >
            <Image
              src="/icons/case-study-arrow.svg"
              alt="Next"
              width={20}
              height={20}
              className="w-4 h-4"
            />
          </button>
        </div>

        {/* ── DESKTOP CAROUSEL ─────────────────────────────────── */}
        <div className="relative mt-10 w-full overflow-hidden min-h-[360px] md:h-[55vh] lg:h-[90vh] hidden md:block">
          {caseStudies.map((item, i) => (
            <div
              key={`desktop-${item.slug}-${i}`}
              className={`absolute inset-0 flex items-center justify-center px-4 xl:px-6 transition-opacity duration-500 ease-in-out ${
                activeCaseStudy === i
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="group relative w-full h-full min-h-[360px] rounded-3xl overflow-hidden shadow-lg transition-all duration-300">
                <Image
                  src={item.img}
                  alt={`Case study ${i + 1}`}
                  width={1400}
                  height={720}
                  className="w-full h-full object-cover object-[center_30%] scale-94"
                  sizes="(min-width: 1536px) 1700px, (min-width: 1024px) 1200px, (min-width: 768px) 768px, 100vw"
                  priority={i === 0}
                />
                <Link
                  href={`/portfolio/${item.slug}`}
                  className={`absolute bottom-4 lg:bottom-7 left-4 md:left-8 lg:left-20 flex items-center gap-2.5 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md ${item.btn}`}
                >
                  View Case Study
                  <Image
                    src="/icons/case-study-arrow.svg"
                    alt="arrow"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              </div>
            </div>
          ))}

          {/* Desktop Prev */}
          <button
            type="button"
            onClick={goToPrevCaseStudy}
            aria-label="Previous case study"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/80 p-3 shadow-md backdrop-blur hover:bg-white cursor-pointer"
          >
            <Image
              src="/Home/casestudy-rightarrow.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-5 h-5 rotate-180"
            />
          </button>

          {/* Desktop Next */}
          <button
            type="button"
            onClick={goToNextCaseStudy}
            aria-label="Next case study"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white p-3 shadow-md backdrop-blur hover:bg-white cursor-pointer"
          >
            <Image
              src="/Home/casestudy-rightarrow.svg"
              alt="Next"
              width={24}
              height={24}
              className="w-5 h-5"
            />
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <FeaturesGrid
        eyebrow="WHY TRIMSEL"
        heading="Empowering Businesses with 360° Digital Transformation"
        description="We don't just deliver projects and move on, we build relationships that last. Based in Chennai, we start with your goals and build everything around them, bringing the right people, thinking, and technology to make it work every single time."
        columns={4}
        features={[
          {
            icon: "/icons/whytrimsel1.svg",
            title: "Diverse Global Clientele",
            description: "From early-stage startups to large enterprises, we've worked with businesses of all sizes across multiple industries, delivering solutions that fit their unique goals and challenges.",
          },
          {
            icon: "/icons/whytrimsel2.svg",
            title: "Domain & Tech Expertise",
            description: "Our developers, DevOps engineers, and UI/UX designers bring genuine depth to every project from cloud platforms and full stack development to AI and automation.",
          },
          {
            icon: "/icons/whytrimsel3.svg",
            title: "Flexible Engagement Models",
            description: "Whether you need a dedicated team, end-to-end delivery, or extra hands on an existing project we adapt our approach to suit the way you work best.",
          },
          {
            icon: "/icons/whytrimsel4.svg",
            title: "All-in-One IT Partner",
            description: "Design, development, DevOps, QA, and support all under one roof, keeping communication clear and giving you full control without the hassle.",
          },
        ]}
      />

      {/* Fivestage */}
      <Ourprocess />

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

      {/* Industries */}
      <section className="bg-[#F5F6FF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              INDUSTRIES WE SERVE
            </h2>

            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Deep Experience Across the Sectors That Matter.
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
              From healthcare and on-demand platforms to logistics, e-commerce,
              and SaaS, our custom software development and mobile app teams
              bring the technical depth to build solutions that fit how your
              industry actually operates. We&apos;ve delivered across 12+ sectors and
              counting.
            </p>
          </div>

          {/* Grid Section */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {[
              {
                name: "Healthcare",
                bg: "#CBE6FC",
                icon: "/icons/healthcare.svg",
                alt: "Healthcare software development and app solutions",
              },
              {
                name: "On-Demand",
                bg: "#ACFFCE",
                icon: "/icons/on-demand.svg",
                alt: "On-demand service app development",
              },
              {
                name: "Entertainment",
                bg: "#EDAFF7",
                icon: "/icons/entertainment.svg",
                alt: "Entertainment platform development",
              },
              {
                name: "Logistics",
                bg: "#FAD4B6",
                icon: "/icons/logistics.svg",
                alt: "Logistics and supply chain app development",
              },
              {
                name: "E-Commerce",
                bg: "#FDA8A6",
                icon: "/icons/ecommerce.svg",
                alt: "E-commerce website and app development",
              },
              {
                name: "Real Estate",
                bg: "#F9DF89",
                icon: "/icons/real-estate.svg",
                alt: "Real estate app and platform development",
              },
              {
                name: "Food Delivery",
                bg: "#FFCACE",
                icon: "/icons/food-delivery.svg",
                alt: "Food delivery app development",
              },
              {
                name: "Grocery",
                bg: "#DCCFCB",
                icon: "/icons/grocery.svg",
                alt: "Grocery delivery app development",
              },
              {
                name: "Travel",
                bg: "#A3D5FD",
                icon: "/icons/travel.svg",
                alt: "Travel app and booking platform development",
              },
              {
                name: "Restaurant",
                bg: "#D4F7AA",
                icon: "/icons/restaurant.svg",
                alt: "Restaurant management app development",
              },
              {
                name: "Media",
                bg: "#E080F9",
                icon: "/icons/media.svg",
                alt: "Media streaming platform development",
              },
              {
                name: "EduTech",
                bg: "#7AEE7F",
                icon: "/icons/edutech.svg",
                alt: "EdTech and education app development",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex h-[100px] w-[120px] sm:h-[110px] sm:w-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-white/60 shadow-md transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: item.bg }}
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={40}
                  height={40}
                  className="object-contain sm:w-[48px] sm:h-[48px]"
                />

                <span className="text-center text-xs sm:text-sm font-semibold text-black">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: "url('/Home/model.svg')" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            OUR DELIVERY MODELS
          </h2>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Flexible Engagement. Built Around You.
          </h2>

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

      {/* OurBlog */}
      <OurBlog {...blogData.default} />

      {/* FaqSection */}
      <FaqSection />

    </main>
  );
}
