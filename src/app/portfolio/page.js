"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import Footer from "@/components/Footer";

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

  const categories = useMemo(() => {
    const allCats = normalizedProjects.flatMap((p) => p.category);
    return ["ALL", ...Array.from(new Set(allCats))];
  }, [normalizedProjects]);

  const filteredProjects =
    active === "ALL"
      ? normalizedProjects
      : normalizedProjects.filter((p) => p.category.includes(active));

  const buttonStyle = (category) =>
    `px-6 py-2 rounded-lg border font-medium transition-all duration-300
        ${active === category
      ? "bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white border-none"
      : "border-gray-300 text-black hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:text-white"
    }`;

  return (
    <div>
      <Header transparent />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:h-screen bg-[url('/portfolio.svg')] bg-cover bg-center flex items-center pt-24 md:pt-12">
        <div className="w-full px-4 sm:px-6 md:pl-24 md:pr-24 pb-6 text-center md:text-left">

          <h1
            className="text-black font-bold leading-tight
      text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl
      max-w-4xl mx-auto md:mx-0"
          >
            We Create Successful Digital
            <br />
            Experiences, Turning Your Ideas Into
            <br />
            Great Applications.
          </h1>

          <p className="mt-6 mx-auto md:mx-0 max-w-2xl text-black text-base sm:text-lg md:text-xl">
            From innovative mobile apps to robust web platforms, we help
            businesses turn ideas into exceptional digital products.
          </p>

        </div>
      </section>

      {/* Filter Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={buttonStyle(category)}>
                {category}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-16 pt-4">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300 p-8 md:p-12">
                <div
                  className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}>
                  {/* Content */}
                  <div className="flex-1">
                    {/* Categories */}
                    <div className="mb-4 text-lg font-semibold text-[#02A89B]">
                      {project.category.map((cat, i, arr) => (
                        <span key={i}>
                          {cat}
                          {i !== arr.length - 1 && (
                            <span className="mx-2 text-gray-400">|</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <h2 className="mb-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                      {project.title}
                    </h2>

                    <h3 className="mb-6 text-2xl font-semibold">
                      {project.subtitle}
                    </h3>

                    <p className="mb-8 max-w-3xl text-black font-medium">
                      {project.description}
                    </p>

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white font-medium hover:opacity-90 transition duration-300">
                      View Case Study
                    </Link>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 pt-6 sm:px-6">
          <div className="relative w-full max-w-6xl rounded-xl bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white px-6 py-10 sm:px-12 md:py-16 shadow-md flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* LEFT CONTENT */}
            <div className="relative z-10 w-full md:w-[60%] lg:w-1/2 text-left">
                <h3 className="text-sm font-semibold tracking-[0.22em] text-[#1C75BC] sm:text-base">
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
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg">
                  Get Started →
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-full md:w-[40%] lg:w-1/2 flex justify-end items-end self-stretch">
                <Image
                  src="/getintouch1.svg"
                  alt="Contact illustration"
                  width={700}
                  height={700}
                  className="relative md:absolute md:bottom-0 md:right-0 ml-auto w-[80%] sm:w-[50%] md:w-full h-full object-contain object-right-bottom"
                />
              </div>
          </div>
        </div>
      </section>

      <Clients />
      <Contactform />
      <Footer />
    </div>
  );
}
