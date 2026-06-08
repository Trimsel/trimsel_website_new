"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * CaseStudyCarousel
 *
 * Props:
 *   studies      {Array}   — array of case study objects from caseStudies.js
 *                            each item needs: { title, slug, img, btn }
 *   eyebrow      {string}  — blue label above heading (default "CASE STUDIES")
 *   heading      {string}  — main h2
 *   description  {string}  — body paragraph
 *   showViewAll  {boolean} — show "View All Case Studies" link (default true)
 */
export default function CaseStudyCarousel({
  studies = [],
  eyebrow = "CASE STUDIES",
  heading = "Projects That Shipped. Results That Speak.",
  description = "Each project below shows the same pattern — a real problem, a practical solution, and measurable outcomes. Browse the work and see how we approach different industries and challenges.",
  showViewAll = true,
}) {
  const [active, setActive] = useState(0);

  const goToPrev = () =>
    setActive((prev) => (prev === 0 ? studies.length - 1 : prev - 1));

  const goToNext = () =>
    setActive((prev) => (prev === studies.length - 1 ? 0 : prev + 1));

  if (!studies.length) return null;

  return (
    <section className="bg-white py-8 md:min-h-screen md:flex md:flex-col md:justify-center md:py-16">
      {/* Heading */}
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
          {eyebrow}
        </h2>
        <h3 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          {heading}
        </h3>
        <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
          {description}
        </p>
        {showViewAll && (
          <div className="mt-4 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[#1C75BC] font-semibold hover:underline"
            >
              View All Case Studies
              <Image
                src="/Home/right-arrow.svg"
                width={16}
                height={16}
                alt="arrow"
                className="w-4 h-4"
              />
            </Link>
          </div>
        )}
      </div>

      {/* ── MOBILE CAROUSEL ──────────────────────────────────── */}
      <div className="relative mt-6 w-full overflow-hidden md:hidden">
        <div className="relative w-full aspect-[1438/763] min-h-[240px]">
          {studies.map((item, i) => (
            <div
              key={`mobile-${item.slug}-${i}`}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                active === i
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="group relative w-full h-full rounded-none overflow-hidden shadow-lg transition-all duration-300 active:scale-[1.01] bg-gray-100">
                <Image
                  src={item.img}
                  alt={`${item.title} case study`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={i === 0}
                />
                <Link
                  href={item.slug}
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

        <button
          type="button"
          onClick={goToPrev}
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

        <button
          type="button"
          onClick={goToNext}
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
        {studies.map((item, i) => (
          <div
            key={`desktop-${item.slug}-${i}`}
            className={`absolute inset-0 flex items-center justify-center px-4 xl:px-6 transition-opacity duration-500 ease-in-out ${
              active === i
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="group relative w-full h-full min-h-[360px] rounded-3xl overflow-hidden shadow-lg transition-all duration-300">
              <Image
                src={item.img}
                alt={`${item.title} case study`}
                width={1400}
                height={720}
                className="w-full h-full object-cover object-[center_30%] scale-94"
                sizes="(min-width: 1536px) 1700px, (min-width: 1024px) 1200px, (min-width: 768px) 768px, 100vw"
                priority={i === 0}
              />
              <Link
                href={item.slug}
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

        <button
          type="button"
          onClick={goToPrev}
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

        <button
          type="button"
          onClick={goToNext}
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
  );
}
