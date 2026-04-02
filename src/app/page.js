/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Whatwedo from "@/components/Whatwedo";
import Fivestage from "@/app/Home/Fivestage";
import Testimonial from "@/components/testimonial";
import OurBlog from "@/components/OurBlog";
import Contactform from "@/components/Contactform";
import FaqSection from "@/components/Faq";
import { ToolsSection } from "./Home/ToolsSection";
import { useEffect, useState } from "react";

const HERO_WORDS = [
  "AI Development",
  "Mobile App",
  "Web Development",
  "DevOps & Cloud",
  "Digital Marketing",
];


export default function Home() {

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [mounted, setMounted] = useState(false);

  const caseStudies = [
    { img: "/Home/case-study-1.svg", btn: "bg-yellow-400 text-black", slug: "kariot-case-study", },
    { img: "/Home/case-study-2.svg", btn: "bg-black text-white", slug: "xaber-case-study", },
    { img: "/Home/case-study-3.svg", btn: "bg-black text-white", slug: "Mocial", },
    { img: "/Home/case-study-4.svg", btn: "bg-black text-white", slug: "EzyHelpers", },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % HERO_WORDS.length);
        setFade(true);
      }, 800);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ✅ mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  const goToPrevCaseStudy = () =>
    setActiveCaseStudy((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );

  const goToNextCaseStudy = () =>
    setActiveCaseStudy((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );

  // ✅ remove the full-page hydration guard that causes a blank screen flash
  // if (!mounted) return null;

  const cards = [
    {
      title: "TIME & MATERIALS (T&M)",
      headerColor: "#ed6b5a",
      arrowColor: "#d95a4a",
      bodyColor: "#f28a7e",
      items: [
        "Your team manages allocation of work for cost-efficiency",
        "Work conducted at your location",
        "Billed on T&M basis",
        "Resources have full access to our expertise and assistance during the engagement",
        "Resources have full access to our expertise and assistance during the engagement",
      ],
    },
    {
      title: "PROJECT-BASED FIXED-FEE",
      headerColor: "#5b4372",
      arrowColor: "#4a3659",
      bodyColor: "#7f659d",
      items: [
        "Well-defined and well-documented needs",
        "Small to midsize projects",
        "Time-bound",
        "Fixed cost based on agreed-upon requirements",
        "Fixed cost based on agreed-upon requirements",
        "Testing Mavens leadership manages and monitors quality of deliverables",
      ],
    },
    {
      title: "END-TO-END MANAGED SERVICES",
      headerColor: "#f8b652",
      arrowColor: "#e5a33d",
      bodyColor: "#fcc572",
      items: [
        "Long-term engagement",
        "Team of test engineers assigned on-site and offshore based on need",
        "Focused on adding value and increasing efficiency",
        "Seamless integration with your engineering team, including attending all Agile ceremonies",
        "Testing Mavens leadership manages and monitors quality of deliverables",
      ],
    },
  ];

  return (
    <main>
      <Header />

      <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-100 via-[#d4e9fd] to-white text-black">
        <div className="container mx-auto flex min-h-screen items-center px-4 pb-10 pt-16 sm:px-6 md:pt-16 lg:pt-20">
          <div className="relative z-10 grid w-full items-center gap-10 md:grid-cols-2 md:gap-12 md:px-12 lg:px-20">
            <div className="relative z-20 mt-6 text-center md:mt-0 md:text-left">
              <h1 className="mb-8 text-3xl font-bold leading-tight sm:text-5xl">
                We Build what you
                <br />
                <span className="inline-flex items-baseline justify-center whitespace-nowrap gap-2 sm:justify-start">
                  <span>imagine With</span>
                  <span
                    suppressHydrationWarning
                    className={`inline-block whitespace-nowrap text-xl font-semibold text-[#1FA6A0] sm:text-3xl lg:text-4xl ${fade ? "animate-rotate-word" : ""}`}>
                    {HERO_WORDS[index]}
                  </span>
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-base sm:text-lg">
                Trimsel is a digital product development company based in India.
                We use the power of digital engineering and empower businesses
                to execute their ideas with innovation.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg">
                Get Started Today{" "}
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
              </Link>
            </div>

            <div className="relative mx-auto flex h-[340px] w-full max-w-[620px] items-center justify-center sm:h-[440px] md:h-[72vh] md:max-h-[620px]">
              <div className="absolute z-0 h-[240px] w-[240px] rounded-full bg-blue-200 opacity-60 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]" />

              <Image
                src="/Home/HomeImage.svg"
                alt="Home"
                width={400}
                height={380}
                className="relative z-10 w-[280px] animate-shake sm:w-[360px] md:w-[430px]"
                priority
              />

              <Image
                src="/Home/Robot.svg"
                alt="AI Robot"
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-auto w-[150px] sm:w-[190px] md:w-[225px]"
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
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHO WE ARE
          </h3>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            We&apos;re Experts At Helping Businesses Reach Their True Potential
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Transform your business processes by migrating from legacy solutions
            to modern technology and developments that guarantee growth,
            optimization, and ROI for your business. Trimsel was founded at the
            right moment to meet the challenges faced by businesses and enable
            them to meet their digital transformation goals. Established in 2020
            in Chennai, Trimsel and its robust team of developers and
            consultants have provided Product Engineering and Digital
            Transformation services to Fortune 500 companies and start-up
            enterprises globally.
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
      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl px-6 py-10 sm:px-12 md:py-16 rounded-xl bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white shadow-md flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* LEFT CONTENT */}
            <div className="relative z-10 w-full md:w-[60%] lg:w-1/2 text-left">
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                GET IN TOUCH
              </h3>

              <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Have a project? We would love to help.
              </h2>

              <p className="mt-4 text-black font-medium">
                Reach out to us to identify business challenges and get
                efficient digital solutions.
              </p>

              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg">
                Get Started
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full md:w-[40%] lg:w-1/2 flex justify-end items-end self-stretch">
              <Image
                src="/Home/getintouch.svg"
                alt="Contact illustration"
                width={700}
                height={700}
                className="relative md:absolute md:bottom-0 md:right-0 ml-auto w-[80%] sm:w-[50%] md:w-full h-full object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Whatwedo */}
      <Whatwedo />


      {/* Case Study */}
      <section className="bg-white py-8 md:min-h-screen md:flex md:flex-col md:justify-center md:py-16">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            CASE STUDIES
          </h3>
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Real work. Real impact.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            Explore a few highlights from projects we&#39;ve delivered across
            industries.
          </p>
        </div>

        {/* ── MOBILE CAROUSEL ──────────────────────────────────── */}
        <div className="relative mt-6 w-full overflow-hidden md:hidden">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeCaseStudy * 100}%)` }}>
            {caseStudies.map((item, i) => (
              <div
                key={`mobile-${item.slug}-${i}`}
                className="w-full shrink-0 flex items-center justify-start pl-2 pr-2">
                <div className="group relative w-full max-w-[100vw] rounded-none overflow-hidden shadow-lg transition-all duration-300 active:scale-[1.01]">
                  <div className="relative w-full aspect-[1438/763] bg-gray-100">
                    <Image
                      src={item.img}
                      alt={`Case study ${i + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority={i === 0}
                    />
                  </div>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className={`absolute bottom-[6%] left-[6%] flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 active:scale-105 ${item.btn}`}>
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
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur hover:bg-white cursor-pointer">
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
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur hover:bg-white cursor-pointer">
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
        <div className="relative mt-10 w-full overflow-hidden flex-1 min-h-0 hidden md:flex">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeCaseStudy * 100}%)` }}>
            {caseStudies.map((item, i) => (
              <div
                key={`desktop-${item.slug}-${i}`}
                className="w-full shrink-0 flex items-center justify-center px-4 xl:px-6">
                <div className="group relative w-[102vw] h-[90vh] min-h-[420px] rounded-3xl overflow-hidden shadow-lg transition-all duration-300">
                  <Image
                    src={item.img}
                    alt={`Case study ${i + 1}`}
                    width={1400}
                    height={720}
                    className="w-full h-full object-cover object-[center_30%] scale-94"
                    sizes="(min-width: 1536px) 1700px, (min-width: 1024px) 1200px, 100vw"
                    priority={i === 0}
                  />
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className={`absolute bottom-7 left-20 flex items-center gap-2.5 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md ${item.btn}`}>
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
          </div>

          {/* Desktop Prev */}
          <button
            type="button"
            onClick={goToPrevCaseStudy}
            aria-label="Previous case study"
            className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white/80 p-3 shadow-md backdrop-blur hover:bg-white cursor-pointer">
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
            className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-white p-3 shadow-md backdrop-blur hover:bg-white cursor-pointer">
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
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHY TRIMSEL
          </h3>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Empowering Businesses with 360° Digital Transformation
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            At Trimsel, we don’t just build software—we build long-term
            partnerships. As a full-cycle software development company in
            Chennai, we deliver everything from mobile apps and cloud services
            to DevOps automation and AI-powered solutions. Our client-first
            approach means we start with your goals, not our tech stack, and
            deliver solutions that make a measurable difference.
          </p>

          {/* Four Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4 mb-4">
                <Image
                  src="/icons/whytrimsel1.svg"
                  alt="Client"
                  width={60}
                  height={40}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Diverse Global Clientele
              </h4>
              <p className="max-w-lg text-base text-black sm:text-lg">
                From startups and SMBs to Fortune 500 enterprises, Trimsel has
                delivered custom software solutions tailored to unique business
                models and challenges across industries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4 mb-4">
                <Image
                  src="/icons/whytrimsel2.svg"
                  alt="Client"
                  width={60}
                  height={40}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Domain & Tech Expertise
              </h4>
              <p className="max-w-xl text-base text-black sm:text-lg">
                Our certified developers, DevOps engineers, and UI/UX designers
                have deep expertise in cloud computing, full stack development,
                and emerging tech like AI & automation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4 mb-4">
                <Image
                  src="/icons/whytrimsel3.svg"
                  alt="Client"
                  width={60}
                  height={40}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Flexible Engagement Models
              </h4>
              <p className="max-w-xl text-base text-black sm:text-lg">
                Whether you need end-to-end product delivery, team augmentation,
                or application development outsourcing, we adapt our approach to
                your preferred engagement style.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-4 mb-4">
                <Image
                  src="/icons/whytrimsel4.svg"
                  alt="Client"
                  width={60}
                  height={40}
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                All-in-One IT Partner
              </h4>
              <p className="max-w-xl text-base text-black sm:text-lg">
                We manage your entire digital journey in-house — design,
                development, DevOps, QA, and support — ensuring seamless
                collaboration and better cost control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fivestage */}
      <Fivestage />

      {/* Industries */}
      <section className="bg-[#F5F6FF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              INDUSTRIES WE SERVE
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
              Android App Solutions for Various Industries help businesses
              streamline operations, enhance customer engagement, and boost
              efficiency. From healthcare and education to retail and logistics,
              our tailored Android apps meet specific industry needs.
            </p>
          </div>

          {/* Grid Section */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {[
              {
                name: "Healthcare",
                bg: "#CBE6FC",
                icon: "/icons/healthcare.svg",
              },
              {
                name: "On-Demand",
                bg: "#ACFFCE",
                icon: "/icons/on-demand.svg",
              },
              {
                name: "Entertainment",
                bg: "#EDAFF7",
                icon: "/icons/entertainment.svg",
              },
              {
                name: "Logistics",
                bg: "#FAD4B6",
                icon: "/icons/logistics.svg",
              },
              {
                name: "E-Commerce",
                bg: "#FDA8A6",
                icon: "/icons/ecommerce.svg",
              },
              {
                name: "Real Estate",
                bg: "#F9DF89",
                icon: "/icons/real-estate.svg",
              },
              {
                name: "Food Delivery",
                bg: "#FFCACE",
                icon: "/icons/food-delivery.svg",
              },
              { name: "Grocery", bg: "#DCCFCB", icon: "/icons/grocery.svg" },
              { name: "Travel", bg: "#A3D5FD", icon: "/icons/travel.svg" },
              {
                name: "Restaurant",
                bg: "#D4F7AA",
                icon: "/icons/restaurant.svg",
              },
              { name: "Media", bg: "#E080F9", icon: "/icons/media.svg" },
              { name: "EduTech", bg: "#7AEE7F", icon: "/icons/edutech.svg" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex h-[100px] w-[120px] sm:h-[110px] sm:w-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-white/60 shadow-md transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: item.bg }}>
                <Image
                  src={item.icon}
                  alt={item.name}
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
        style={{ backgroundImage: "url('/Home/model.svg')" }}>
        <div className="container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            OUR DELIVERY MODELS
          </h3>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            You get more than just a testing service provider you get a true
            partner and an extension of your team.
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            When you work with Testing Mavens, you get more than a testing
            services provider-you get a true partner and an extension of your
            team. Our delivery models are designed to be flexible, efficient,
            and easily scalable to meet your changing needs.
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
                  background: "#2BB673",
                }}>
                {/* INNER CARD */}
                <div
                  className="bg-white"
                  style={{
                    clipPath:
                      "polygon(0 0,50% 5%,100% 0,100% 100%,50% 95%,0 100%)",
                  }}>
                  {/* TOP */}
                  <div
                    className="text-center py-6 px-4"
                    style={{
                      clipPath: "polygon(0 0,100% 0,100% 70%,50% 85%,0 70%)",
                    }}>
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
                    }}>
                    <ul className="space-y-3 text-left list-disc list-inside">
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
      <Contactform />

      {/* OurBlog */}
      <OurBlog />

      {/* FaqSection */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
