"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "/icons/cloud-whatwedo1.svg",
    title: "Mobile Application Design",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/cloud-whatwedo2.svg",
    title: "IOS Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/cloud-whatwedo3.svg",
    title: "Android Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/cloud-whatwedo4.svg",
    title: "Hybrid Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/cloud-whatwedo5.svg",
    title: "Mobile Application Testing",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/cloud-whatwedo6.svg",
    title: "24*7 Maintenance And Support",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
];

const features = [
  {
    title: "Private Cloud :",
    description:
      "Securely govern sensitive data, keep your operations under control, and enjoy wider opportunities for customization",
  },
  {
    title: "Public :",
    description:
      "Providing easily accessible cloud computing consulting and implementation services and launching scalable solutions without infrastructure provisioning and maintenance headaches",
  },
  {
    title: "Hybrid :",
    description:
      "Achieve great agility and reliability in handling data and resources, balancing the advantages of on- and off-premises deployment",
  },
  {
    title: "Multicloud :",
    description:
      "Avoid vendor lock-in and take advantage of best-of-breed cloud solutions to expand your service portfolio and business reach",
  },
  {
    title: "Distributed Cloud :",
    description:
      "Target location-dependent use cases, eliminate latency issues, and massively reduce the risk of downtime",
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" stroke="#3B82F6" strokeWidth="1.5" />
    <path
      d="M6.5 10.5L8.5 12.5L13.5 8"
      stroke="#3B82F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cards = [
  {
    title: "IT Infrastructure Assessment",
  },
  {
    title: "Planning",
  },
  {
    title: "Development And Deployment",
  },
  {
    title: "Optimization",
  },
  {
    title: "Ongoing Support",
  },
  {
    title: "Security Risk Analysis",
  },
];

const cloudItems = [
  {
    id: "01",
    title: "Scalability From Day One",
    desc: "A cloud infrastructure that will scale flexibly along with your business for unstoppable growth",
  },
  {
    id: "02",
    title: "Built-In Security",
    desc: "Advanced security tools and best practices of cloud security consulting for utmost data protection",
  },
  {
    id: "03",
    title: "Compliance With Industry-Specific Standards",
    desc: "Comprehensive compliance controls for HIPAA, PCI-DSS, GDPR, and other standards",
  },
  {
    id: "04",
    title: "Room For Innovation",
    desc: "A perfect environment for deploying AI, ML, IoT, and other next-gen solutions",
  },
];

const tabData = [
  {
    title: "Vendor-Agnostic",
    content:
      "We provide unbiased cloud solutions tailored to your business needs without being tied to any vendor.",
    stat: "10+",
    statLabel: "Projects Delivered",
  },
  {
    title: "Skilled & Talented Engineers",
    content:
      "Our team consists of certified cloud professionals with deep expertise in modern technologies.",
    stat: "50+",
    statLabel: "Engineers",
  },
  {
    title: "Diverse Expertise",
    content:
      "We have experience across multiple industries including fintech, healthcare, and logistics.",
    stat: "15+",
    statLabel: "Industries Served",
  },
  {
    title: "Proven Track Record",
    content:
      "We have consistently delivered high-quality cloud solutions with measurable results.",
    stat: "100+",
    statLabel: "Successful Deployments",
  },
];

export default function CloudConsulting() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <Header transparent />

      <section className="flex min-h-screen items-center bg-[url('/CloudConsultingservice.svg')] bg-cover bg-center pt-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 pb-8 text-center sm:px-6">
          <h1 className="text-center text-4xl font-bold leading-tight text-white sm:text-5xl">
            Cloud Consulting & Implementation
            <br />
            Services in Chennai, India
          </h1>

          <p className="mt-6 max-w-xl text-base text-white sm:text-lg">
            An AI-driven logistics optimization platform that revolutionizes how
            businesses plan, execute, and manage transportation.Real-time
            insights enable smarter decisions, while end-to-end visibility
            ensures greater transparency across every stage of the supply chain.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg px-8 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl sm:px-10 sm:text-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgba(28, 125, 189, 1) 0%, rgba(5, 168, 152, 1) 100%)",
              }}>
              Schedule Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-lg border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f0efeb] px-4 md:px-10 py-16">
        <div className="mb-8">
          <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
            WHAT WE DO
          </h3>
          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            All-inclusive cloud computing consulting and implementation services
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            We embrace an end-to-end approach — from thinking over the strategic
            aspects of cloud adoption and migration to cloud, security
            consulting and cloud infrastructure management. Our team of cloud
            consultants, business analysts, developers, and DevOps engineers
            will ensure that your cloud environment is efficient, safe, and
            high-performing.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              {/* Top: Icon */}
              <div>
                <div className="mb-5">
                  <div className="relative w-14 h-14">
                    {/* Blue highlight background */}
                    <div className="absolute right-0 top-0 w-8 h-full rounded-md z-0" />
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="relative z-10 object-contain w-12 h-12"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-md text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom: Arrow Button */}
              <div className="mt-6">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center">
                  <Image
                    src="/icons/mobile-stage-arrow.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white flex items-center justify-center px-4 py-12 sm:px-6 md:px-12 md:py-16 font-sans">
        <div>
          <div className="max-w-5xl w-full">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row gap-8 mb-6">
              {/* Left: Heading + Description + CTA */}
              <div className="lg:w-[45%] flex flex-col justify-between">
                <div>
                  <h1 className="text-[2rem] leading-tight font-bold text-gray-900 mb-4">
                    Expert Consulting On Cloud-Native And Cloud-Agnostic
                    Solutions
                  </h1>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We consult on and build IaaS, PaaS, and SaaS solutions to
                    let you capture the cloud value with the most fitting
                    implementation. To balance technology, risks, and costs,
                    while keeping your business goals in focus, our cloud
                    computing consultants orchestrate multiple deployment
                    models.
                  </p>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="lg:w-[55%] relative flex items-center justify-center">
                {/* Rotating "Discuss your project idea" text ring */}
                <div className="hidden sm:block absolute left-[-4%] top-[99%] -translate-y-1/2 z-10 w-40 h-40">
                  <svg
                    viewBox="0 0 160 160"
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "12s" }}>
                    <defs>
                      <path
                        id="circle"
                        d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                      />
                    </defs>
                    <text
                      fontSize="11.5"
                      fill="#9CA3AF"
                      letterSpacing="2.5"
                      fontFamily="sans-serif">
                      <textPath href="#circle">
                        . Discuss your project idea . Discuss your project idea
                      </textPath>
                    </text>
                  </svg>
                  {/* Center Button */}
                  <button className="absolute inset-0 m-auto w-16 h-16 bg-blue-500 hover:bg-blue-600 transition-colors rounded-full flex items-center justify-center text-white text-xs font-semibold text-center leading-tight shadow-md">
                    Let&apos;s talk
                  </button>
                </div>

                {/* Cloud + Person image placeholder */}
                <div className="w-full h-64 lg:h-72 rounded-2xl overflow-hidden bg-sky-100 relative ml-0 lg:ml-16">
                  {/*
                Replace the div below with:
                <Image src="/cloud-person.png" alt="Cloud consultant" fill className="object-cover" />
                once you add your image to /public/
              */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-sky-400">
                    <Image
                      src="/cloud-image.svg" // put this inside /public
                      alt="Cloud Person"
                      width={600}
                      height={180}
                      className="object-contain opacity-90 mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Deployment Models (match screenshot layout) */}
            <div className="relative bg-[#DDF1F7] rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
              {/* Decorative cloud shape (bottom-right) */}
              <div className="pointer-events-none absolute -bottom-6 -right-4 sm:-bottom-4 sm:right-0 opacity-90">
                <Image
                  src="/cloud-shape.svg"
                  alt="Cloud Shape"
                  width={200}
                  height={240}
                  className="object-contain w-[160px] sm:w-[200px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 relative z-10">
                {/* Left column (01–03) */}
                <div className="space-y-10">
                  {features.slice(0, 3).map((f, i) => (
                    <div key={`left-${i}`} className="flex gap-3">
                      <CheckIcon />
                      <div>
                        <p className="font-semibold text-gray-900 text-[15px] mb-1">
                          {f.title}
                        </p>
                        <p className="text-gray-500 text-[13px] leading-relaxed max-w-sm">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right column (04–05) */}
                <div className="space-y-10 md:pt-6 md:-translate-x-10">
                  {features.slice(3).map((f, i) => (
                    <div key={`right-${i}`} className="flex gap-3">
                      <CheckIcon />
                      <div>
                        <p className="font-semibold text-gray-900 text-[15px] mb-1">
                          {f.title}
                        </p>
                        <p className="text-gray-500 text-[13px] leading-relaxed max-w-sm">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12">
        {/* Outer Container with cut corner */}
        <div className="bg-gradient-to-r from-[#d9e6f2] to-[#cfd8e6] p-8 md:p-12 clip-cut-lg rounded-2xl">
          {/* Top Section */}
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-3xl">
              Every Aspect Of Cloud Adoption, Taken Care Of
            </h2>

            <p className="mt-4 px-0 md:px-10 text-center text-black font-medium leading-relaxed">
              From analyzing your business needs and providing cloud strategy
              consulting all the way to employee training, we dedicate to
              proactively delivering quality service throughout cooperation. Our
              business analysts work hand in hand with solution architects to
              make your cloud adoption and usage journey as smooth as possible.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 clip-cut-sm rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We will track and optimize cloud resource usage and spend,
                  extend your cloud services provide employee trainings to keep
                  your cloud workflows swift, secure, and aligned with your
                  business processes
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            OUR VALUE PROPOSITION
          </h3>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Cloud computing consulting with Minitzon :
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            Our mission as a cloud consulting firm is to help you undergo
            digital transformation with reasonable effort and little to no risk.
            Our cloud consulting services are dedicated to making your cloud
            infrastructure drive tangible business value, not costs.
          </p>
        </div>

        {/* Container */}
        <div className="max-w-6xl mx-auto md:mt-8 px-4 sm:px-6">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {cloudItems.map((item) => (
              <div key={item.id} className="flex items-start gap-2">
                {/* Number (Left Side) */}
                <span className="text-4xl font-bold text-blue-100 min-w-[50px]">
                  {item.id}
                </span>

                {/* Card (Right Side) */}
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                  <h3 className="font-semibold text-gray-900 text-lg leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Link Button */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1C9ACF] text-white px-6 py-3 rounded-md hover:bg-[#168bb9] transition">
              Discuss My Cloud Strategy
              <Image
                src="/Home/right-arrow.svg"
                alt="arrow"
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#eef3f8] to-[#dde6ef] py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why work with Minitzon?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
            Clients choose us because of our ability to improve business
            agility, increase efficiency, and reduce costs. We are
            differentiated by our:
          </p>

          {/* Tabs */}
          <div className="mt-8 flex w-full md:w-fit justify-between md:justify-center gap-1 sm:gap-2 md:gap-3 bg-white/70 backdrop-blur-md p-1.5 sm:p-2 rounded-xl mx-auto shadow-sm">
            {tabData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 flex items-center justify-center text-center whitespace-normal break-words px-1 py-1.5 sm:px-2 md:px-8 md:py-2 rounded-lg text-[10px] leading-[1.1] sm:text-xs md:text-sm font-medium transition ${activeTab === index
                    ? "bg-[#1C9ACF] text-white shadow"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Text */}
            <p className="text-gray-600 leading-relaxed">
              {tabData[activeTab].content}
            </p>

            {/* Right Card */}
            <div className="bg-[#cfdbe4] rounded-xl p-8 text-center transition-all w-56 mx-auto">
              <h3 className="text-5xl font-bold text-gray-900">
                {tabData[activeTab].stat}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {tabData[activeTab].statLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <section className="bg-white py-24">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl rounded-xl bg-[url('/getintouch2.svg')] bg-cover bg-center bg-no-repeat px-5 py-8 shadow-md sm:px-8 sm:py-10">
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                  GET IN TOUCH
                </h3>

                <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                  You want to improve your business processes using the cloud,
                  but you’re not sure how to handle it right?
                </h2>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg">
                  Contact Us
                  <Image
                    src="/Home/right-arrow.svg"
                    width={20}
                    height={20}
                    alt="RightArrow"
                  />
                </Link>
              </div>
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
  );
}
