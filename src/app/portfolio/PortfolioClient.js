"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";

const TABS = ["ALL", "MOBILE", "WEB", "AI / ML", "DEVOPS & CLOUD", "DIGITAL MARKETING"];

export default function PortfolioPage() {
  const [active, setActive] = useState("ALL");

  const normalizedProjects = useMemo(() => {
    return projects.map((p) => ({
      ...p,
      category: !p.category
        ? []
        : Array.isArray(p.category)
          ? p.category
          : p.category.split(" | "),
    }));
  }, []);

  const filteredProjects =
    active === "ALL"
      ? normalizedProjects
      : normalizedProjects.filter((p) => p.category.includes(active));

  const buttonStyle = (tab) =>
    `px-5 py-2 rounded-lg border font-medium transition-all duration-300 text-sm
    ${
      active === tab
        ? "bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white border-none"
        : "border-gray-300 text-black hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:text-white"
    }`;

  return (
    <div>
      <Header transparent />

      {/* ── 1. HERO ── */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:h-screen bg-[url('/portfolio.svg')] bg-cover bg-center flex items-center pt-24 md:pt-12">
        <div className="w-full px-4 sm:px-6 md:pl-24 md:pr-24 pb-6 text-center md:text-left">
          <p className="text-sm md:text-base font-medium text-black mb-8">
            <Link
              href="/"
              className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
            >
              Home
            </Link>
            {" • "}
            <span className="px-2 py-1 rounded-md">Portfolio</span>
          </p>

          <h1
            className="text-black font-bold leading-tight
            text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
            max-w-4xl mx-auto md:mx-0"
          >
            Products We&apos;ve Built — Mobile Apps, AI Systems, Web Platforms
            &amp; Cloud Infrastructure
          </h1>

          <p className="mt-6 mx-auto md:mx-0 max-w-2xl text-black text-base sm:text-lg md:text-xl font-medium">
            Every project below was designed, built, and deployed by our
            in-house team in Chennai — from concept to production. These
            aren&apos;t mock-ups or proposals. They&apos;re real products used
            by real businesses and real users every day.
          </p>
        </div>
      </section>

      {/* ── 2. FILTER TABS + PROJECT CARDS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={buttonStyle(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Projects */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24 text-gray-500 font-medium">
              <p className="text-lg">No case studies in this category yet.</p>
              <p className="mt-2 text-sm">
                We&apos;re building our{" "}
                {active === "DIGITAL MARKETING" ? "Digital Marketing" : active}{" "}
                portfolio — check back soon or{" "}
                <Link href="/contact-us" className="text-[#1C9ACF] underline">
                  talk to our team
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-16 pt-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 p-8 md:p-12"
                >
                  <div
                    className={`flex flex-col md:flex-row items-center gap-12 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1">
                      {/* Category tags */}
                      <div className="mb-3 flex flex-wrap gap-2">
                        {project.category.map((cat) => (
                          <span
                            key={cat}
                            className="text-xs font-semibold text-[#02A89B] bg-[#02A89B]/10 px-3 py-1 rounded-full"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h2 className="mb-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                        {project.title}
                      </h2>

                      <h3 className="mb-5 text-base font-semibold text-gray-600 leading-snug">
                        {project.subtitle}
                      </h3>

                      <p className="mb-6 max-w-3xl text-gray-700 font-medium leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack pills */}
                      {project.tech && project.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white font-medium hover:opacity-90 transition duration-300"
                      >
                        View Case Study
                        <Image
                          src="/Home/right-arrow.svg"
                          alt="arrow"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="flex-1">
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        width={600}
                        height={400}
                        className="rounded-2xl w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 3. BOTTOM CTA ── */}
      <section className="bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">
              YOUR PROJECT NEXT
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-4">
              Want Results Like These?
            </h2>
            <p className="text-gray-700 font-medium leading-relaxed max-w-xl mb-6">
              Every project in our portfolio started with a conversation. Tell
              us about your idea — what problem you&apos;re solving, who
              it&apos;s for, and where you are today — and we&apos;ll show you
              what&apos;s possible, what it takes, and how long it&apos;ll
              realistically take to get there.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
            >
              Talk to Our Experts
              <Image
                src="/Home/right-arrow.svg"
                alt="arrow"
                width={18}
                height={18}
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/getintouch1.svg"
              alt="Start your project with Trimsel"
              width={420}
              height={320}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* ── 4. CLIENT LOGOS ── */}
      <Client />

      {/* ── 5. CONTACT FORM ── */}
      <Contactform
        eyebrow="YOUR PROJECT NEXT"
        heading="Want Results Like These?"
        subheading="Every project in our portfolio started with a conversation. Tell us about your idea and we'll show you what's possible."
        formTitle="Start Your Project"
        defaultService=""
      />
    </div>
  );
}
