"use client";
import { useState } from "react";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const services = [
    {
      id: "01",
      title: "Continuous Integration",
      icon: "/icons/ci.svg",
      description:
        "CI is an industry standard to detect any problems in the early stage. Our CI experts use continuous integration tools in devops like Jenkins, Docker & Kubernetes for high-level cross-team communication to save time.",
      points: [
        "Better Time Management",
        "Instant Feedback",
        "Early Problem Detection",
        "Productive Software Development",
        "No last-minute issues",
      ],
    },
    {
      id: "02",
      title: "Continuous Delivery",
      icon: "/icons/cd.svg",
      description:
        "Continuous Delivery ensures your software is always in a deployable state. Our experts automate the release process to deliver updates faster and more reliably.",
      points: [
        "Faster Releases",
        "Reduced Risk",
        "Automated Pipelines",
        "Consistent Deployments",
        "Improved Collaboration",
      ],
    },
    {
      id: "03",
      title: "Infrastructure Management",
      icon: "/icons/infra.svg",
      description:
        "We manage and automate your infrastructure to ensure scalability, reliability, and security across all environments.",
      points: [
        "Auto Scaling",
        "Cost Optimization",
        "High Availability",
        "Security Compliance",
        "24/7 Monitoring",
      ],
    },
    {
      id: "04",
      title: "Configuration Management",
      icon: "/icons/config.svg",
      description:
        "Our configuration management services ensure consistency across your infrastructure using tools like Ansible, Puppet, and Chef.",
      points: [
        "Environment Consistency",
        "Reduced Errors",
        "Version Control",
        "Automated Rollbacks",
        "Faster Provisioning",
      ],
    },
    {
      id: "05",
      title: "Continuous Testing",
      icon: "/icons/testing.svg",
      description:
        "We integrate automated testing at every stage of the pipeline to catch bugs early and ensure software quality.",
      points: [
        "Automated Test Suites",
        "Early Bug Detection",
        "Faster Feedback",
        "Improved Code Quality",
        "Reduced QA Costs",
      ],
    },
    {
      id: "06",
      title: "Continuous Monitoring",
      icon: "/icons/monitoring.svg",
      description:
        "Real-time monitoring of your applications and infrastructure ensures maximum uptime and rapid incident response.",
      points: [
        "Real-time Alerts",
        "Performance Insights",
        "Log Management",
        "Incident Response",
        "Uptime Guarantee",
      ],
    },
    {
      id: "07",
      title: "Microservices",
      icon: "/icons/microservices.svg",
      description:
        "We design and deploy microservices architectures that improve scalability, flexibility, and independent deployability.",
      points: [
        "Independent Scaling",
        "Fault Isolation",
        "Technology Flexibility",
        "Faster Development",
        "Easy Maintenance",
      ],
    },
  ];

  const steps = [
    {
      id: "01",
      title: "Strategic Planning",
      description:
        "Before adopting the Devops culture, our Devops consulting team analyze the current IT infrastructure, available resources and products portfolio. With DevOps as a service, Increase the frequency of software deliveries with enhanced user experience",
      gradientFrom: "#7b5ea7",
      gradientTo: "#5b7fde",
      side: "left",
      Icon: () => (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
          <circle cx="18" cy="7" r="3" fill="white" />
          <circle cx="7" cy="27" r="3" fill="white" />
          <circle cx="29" cy="27" r="3" fill="white" />
          <line x1="18" y1="7" x2="7" y2="27" stroke="white" strokeWidth="1.8" />
          <line x1="18" y1="7" x2="29" y2="27" stroke="white" strokeWidth="1.8" />
          <line x1="7" y1="27" x2="29" y2="27" stroke="white" strokeWidth="1.8" />
          <circle cx="18" cy="18" r="2.5" fill="white" fillOpacity="0.85" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Implementation Procedure",
      description:
        "Before adopting the Devops culture, our Devops consulting team analyze the current IT infrastructure, available resources and products portfolio. With DevOps as a service, Increase the frequency of software deliveries with enhanced user experience",
      gradientFrom: "#0ea5e9",
      gradientTo: "#6366f1",
      side: "right",
      Icon: () => (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
          <rect x="5" y="9" width="26" height="5.5" rx="2" fill="white" />
          <rect x="5" y="17.5" width="26" height="5.5" rx="2" fill="white" />
          <rect x="5" y="26" width="26" height="4" rx="2" fill="white" fillOpacity="0.45" />
          <circle cx="9" cy="11.75" r="1.5" fill="#6366f1" />
          <circle cx="9" cy="20.25" r="1.5" fill="#6366f1" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Strategic Planning",
      description:
        "Before adopting the Devops culture, our Devops consulting team analyze the current IT infrastructure, available resources and products portfolio. With DevOps as a service, Increase the frequency of software deliveries with enhanced user experience",
      gradientFrom: "#14b8a6",
      gradientTo: "#38bdf8",
      side: "left",
      Icon: () => (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
          <circle cx="18" cy="18" r="5" stroke="white" strokeWidth="2" />
          <circle cx="18" cy="18" r="2" fill="white" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={18 + 8 * Math.cos(rad)}
                y1={18 + 8 * Math.sin(rad)}
                x2={18 + 12 * Math.cos(rad)}
                y2={18 + 12 * Math.sin(rad)}
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      ),
    },
    {
      id: "04",
      title: "Strategic Planning",
      description:
        "Before adopting the Devops culture, our Devops consulting team analyze the current IT infrastructure, available resources and products portfolio. With DevOps as a service, Increase the frequency of software deliveries with enhanced user experience",
      gradientFrom: "#22c55e",
      gradientTo: "#16a34a",
      side: "right",
      Icon: () => (
        <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
          <rect x="3" y="13" width="30" height="10" rx="3" stroke="white" strokeWidth="2" />
          <circle cx="11" cy="27" r="4" stroke="white" strokeWidth="2" />
          <circle cx="25" cy="27" r="4" stroke="white" strokeWidth="2" />
          <line x1="11" y1="13" x2="11" y2="9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="18" y1="13" x2="18" y2="9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="25" y1="13" x2="25" y2="9" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const ICON_POSITIONS = [
    { top: 10, left: 50 },  // y = 231.15
    { top: 33, left: 48 },  // y = 763.0
    { top: 57, left: 42 },  // y = 1317.6
    { top: 80, left: 55 },  // y = 1849.2
  ];

  const features = [
    {
      icon: "/icons/Devops-what-we-do1.svg",
      title: "Complex Delivery Experience",
    },
    {
      icon: "/icons/Devops-what-we-do2.svg",
      title: "Skilled And Talented Engineers",
    },
    {
      icon: "/icons/Devops-what-we-do3.svg",
      title: "Best Security Integration",
    },
    {
      icon: "/icons/Devops-what-we-do4.svg",
      title: "Dedicated DevOps Team",
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

                <div className="container mx-auto mt-14 px-4 py-8 text-white sm:py-12">
                    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 md:px-8">

                        {/* LEFT CONTENT */}
                        <div className="relative z-20 text-center md:text-left">
                            <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
                                Leading DevOps Consulting Services
                            </h1>

                            <p className="mb-8 max-w-xl text-base sm:text-lg">
                                Trimsel is a top-rated DevOps company in India offering expert DevOps consulting services to businesses worldwide. We help teams build scalable CI/CD pipelines, leverage Kubernetes, and automate infrastructure for high-speed, secure, and reliable deployments.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
                            >
                                Contact Our Cloud Expert <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
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
          Different phases of Devops process integrated into any business model seamlessly. Businesses to modernize their technologies.
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
      className={`text-left px-6 py-3 rounded-md text-md font-semibold transition-all duration-200 ${
        active === i
          ? "bg-[#1C75BC] text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {s.id}. {s.title}
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
                width={32}
                height={32}
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
                <li key={point} className="flex items-center gap-2 text-md text-black font-medium">
                  <span className="text-gray-500">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      </section>


      <section
      className="py-6 px-6 md:px-12"
      style={{
        background:
          "radial-gradient(ellipse 90% 65% at 50% 0%, #e0f2fe 0%, #f8fafc 55%, #eef2ff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative">

        {/* SVG Connector */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">

        <svg
  viewBox="0 0 757.95 2311.5"
  className="absolute w-full h-full"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#f97316" />
      <stop offset="100%" stopColor="#fdba74" />
    </linearGradient>
  </defs>

  {/* Segment 1: Icon1(379,231) → Icon2(363,763) — bows LEFT */}
  <path
    d="M 379 231 Q 270 497, 363 763"
    fill="none"
    stroke="#c8ccd5"
    strokeWidth="3.5"
    strokeDasharray="22 13"
    strokeLinecap="round"
  />
  <g transform="translate(295, 490) rotate(170)">
    <polygon points="0,-18 12,8 0,2 -12,8" fill="url(#arrowGradient)" />
  </g>

  {/* Segment 2: Icon2(363,763) → Icon3(318,1318) — bows LEFT */}
  <path
    d="M 363 763 Q 245 1040, 318 1318"
    fill="none"
    stroke="#c8ccd5"
    strokeWidth="3.5"
    strokeDasharray="22 13"
    strokeLinecap="round"
  />
  <g transform="translate(268, 1035) rotate(168)">
    <polygon points="0,-18 12,8 0,2 -12,8" fill="url(#arrowGradient)" />
  </g>

  {/* Segment 3: Icon3(318,1318) → Icon4(416,1849) — bows RIGHT */}
  <path
    d="M 318 1318 Q 435 1550, 416 1849"
    fill="none"
    stroke="#c8ccd5"
    strokeWidth="3.5"
    strokeDasharray="22 13"
    strokeLinecap="round"
  />
  <g transform="translate(400, 1548) rotate(155)">
    <polygon points="0,-18 12,8 0,2 -12,8" fill="url(#arrowGradient)" />
  </g>
</svg>

          {/* Icons */}
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="absolute flex items-center justify-center"
              style={{
                left: `${ICON_POSITIONS[i].left}%`,
                top: `${ICON_POSITIONS[i].top}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${step.gradientFrom}, ${step.gradientTo})`,
                }}
              >
                <step.Icon size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="space-y-24 relative z-10">
          {steps.map((step) => {
            const isLeft = step.side === "left";

            return (
              <div
                key={step.id}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {isLeft ? (
                  <div className="md:pr-16">
                    <span className="text-6xl font-black text-blue-200">
                      {step.id}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 mt-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div />
                )}

                {!isLeft ? (
                  <div className="md:pl-16 text-right">
                    <span className="text-6xl font-black text-blue-200">
                      {step.id}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 mt-2">
                      {step.title}
                    </h3>

                    <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>


    <section className="relative py-24 px-6 bg-white overflow-hidden">
    
      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto bg-black rounded-3xl p-8 shadow-2xl border border-white/10">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[900px] h-[200px] 
    bg-[linear-gradient(90deg,#4686FF,#9005E5,#1D55C7)] 
    rounded-2xl opacity-60 blur-[280px]"></div>
  </div>

        {/* Header */}
        <div className="mb-8">
          <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
            WHY CHOOSE US
          </h3>
          <h2 className="mt-4 text-center text-2xl text-white md:text-4xl font-semibold">
          Why choose Trimsel for your DevOps services?
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-white font-medium">
          Clients choose us because of our ability to improve business agility, increase efficiency, and reduce costs. We are differentiated by our.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-5">
                <Image
                  src={feature.icon}
                  alt="icon"
                  width={40}
                  height={40}
                />
              </div>

              <h3 className="text-white font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                We have years of experience in helping organizations streamline
                the release cycles of different applications, from legacy to
                agile and beyond. Our experts ensure that the best CI/CD
                practices are implemented.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>



{/* Getintouch */}
<section className="bg-white py-20">
  <div className="flex justify-center px-4 sm:px-6">
  <div className="relative w-full max-w-6xl rounded-xl bg-[#552A8B] shadow-lg flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 w-full md:w-[55%] lg:w-1/2 text-left">
        <h3 className="text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-3xl lg:text-4xl">
          GET IN TOUCH
        </h3>
        <h2 className="mt-2 text-2xl text-white font-semibold leading-tight sm:text-3xl md:text-3xl lg:text-4xl">
          Need a DevOps consultants? Contact us Now!
        </h2>
        <p className="mt-4 text-white font-medium text-sm sm:text-base max-w-lg">
          Reach out to us to identify business challenges and get
          efficient digital solutions.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
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
      <div className="relative w-full md:w-[45%] lg:w-1/2 flex justify-center md:justify-end items-end self-stretch px-6 pt-4 min-h-[250px] md:min-h-[auto]">
        <Image
          src="/Devops-getintouch.svg"
          alt="Devops-get-in-touch"
          width={700}
          height={700}
          className="w-[85%] sm:w-[60%] md:w-[95%] lg:max-w-md h-auto object-contain translate-y-[5%]"
        />
      </div>
    </div>
  </div>
</section>

            <Clients />

            <Contactform />

            <OurBlog />

            <Faq />

            <Footer />
        </main>
    )
}
