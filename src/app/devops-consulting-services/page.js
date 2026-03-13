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
          <div className="ml-32 relative rounded-xl bg-[#EBF4FF] p-6 sm:p-8 max-w-2xl">
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


            {/* Getintouch */}
{/* Getintouch */}
<section className="bg-white py-20">
  <div className="flex justify-center px-4 sm:px-6">
    <div
      className="relative w-full max-w-6xl overflow-hidden rounded-xl shadow-md min-h-[220px]"
      style={{ backgroundImage: "url('/Devops-get-in-Touch.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Content — locked to left 50% so image shows on right */}
      <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 w-full md:w-[50%]">
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
          GET IN TOUCH
        </h3>
        <h2 className="mt-2 text-2xl text-white font-semibold leading-tight sm:text-3xl md:text-4xl">
        Need a DevOps consultants? Contact us Now!
        </h2>
        <p className="mt-4 text-white font-medium text-sm sm:text-base">
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
