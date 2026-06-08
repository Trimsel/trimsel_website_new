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
 *
 * Responsive behaviour:
 *   < 768px  (mobile)  — full-width image, arrows + dots below (no overlap)
 *   768-1023 (tablet)  — aspect-[1438/763] container so object-cover fills
 *                        exactly with zero cropping, arrows at card edges
 *   ≥ 1024px (desktop) — h-[90vh] with arrows at card edges
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
    <section className="bg-white py-8 md:py-16">
      {/* ── HEADING ──────────────────────────────────────────────── */}
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

      {/* ── MOBILE CAROUSEL (< 768px) ────────────────────────────── */}
      {/*
          Arrows are placed BELOW the image in a flex row with dot
          indicators — no overlap with image content.
      */}
      <div className="mt-6 w-full md:hidden">
        {/* Slide images */}
        <div className="relative w-full aspect-[1438/763] overflow-hidden bg-gray-100">
          {studies.map((item, i) => (
            <div
              key={`mobile-${item.slug}-${i}`}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                active === i
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
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
                className={`absolute bottom-[6%] left-[4%] flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-105 ${item.btn}`}
              >
                View Case Study
                <Image
                  src="/icons/case-study-arrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Nav controls: arrows on sides, dots in centre */}
        <div className="flex items-center justify-center gap-4 mt-4 px-4">
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous case study"
            className="flex items-center justify-center rounded-full bg-gray-100 p-3 min-w-[44px] min-h-[44px] shadow-sm hover:bg-gray-200 cursor-pointer transition-colors"
          >
            <Image
              src="/icons/case-study-arrow.svg"
              alt="Previous"
              width={20}
              height={20}
              className="w-4 h-4 rotate-180"
            />
          </button>

          <div className="flex items-center gap-2">
            {studies.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active === i ? "bg-[#1C75BC] w-6" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next case study"
            className="flex items-center justify-center rounded-full bg-gray-100 p-3 min-w-[44px] min-h-[44px] shadow-sm hover:bg-gray-200 cursor-pointer transition-colors"
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
      </div>

      {/* ── TABLET + DESKTOP CAROUSEL (≥ 768px) ─────────────────── */}
      {/*
          Tablet (md, 768–1023px):
            Container uses aspect-[1438/763] so the image ratio matches
            the container ratio exactly — object-cover fills with zero
            horizontal cropping. Left-side text content stays fully visible.

          Desktop (lg, ≥ 1024px):
            Container switches to h-[90vh] (aspect-auto resets the ratio).
            Object-cover fills the taller container; content-[center_30%]
            keeps the vertical focus on the upper portion of each card.

          Arrows sit at the outermost edges (left-0 / right-0) of the
          section, z-20, so they never overlap the rounded card corners.
          Dot indicators appear below the slide area.
      */}
      <div className="hidden md:block mt-10 w-full">
        {/* Slide + arrow wrapper */}
        <div className="relative w-full md:aspect-[1438/763] lg:aspect-auto lg:h-[90vh] overflow-hidden">
          {studies.map((item, i) => (
            <div
              key={`desktop-${item.slug}-${i}`}
              className={`absolute inset-0 flex items-stretch md:px-8 lg:px-10 xl:px-12 transition-opacity duration-500 ease-in-out ${
                active === i
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="relative w-full h-full min-h-[360px] rounded-3xl overflow-hidden shadow-lg transition-all duration-300">
                <Image
                  src={item.img}
                  alt={`${item.title} case study`}
                  width={1400}
                  height={720}
                  className="w-full h-full object-cover object-[center_30%]"
                  sizes="(min-width: 1536px) 1700px, (min-width: 1024px) 1200px, (min-width: 768px) 800px, 100vw"
                  priority={i === 0}
                />
                <Link
                  href={item.slug}
                  className={`absolute bottom-4 lg:bottom-7 left-4 md:left-6 lg:left-12 xl:left-16 flex items-center gap-2.5 rounded-full px-5 py-2.5 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md ${item.btn}`}
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

          {/* Prev arrow — at the very left edge, z-20 above slides */}
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous case study"
            className="absolute left-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white/80 min-w-[44px] min-h-[44px] p-3 shadow-md backdrop-blur hover:bg-white cursor-pointer transition-colors"
          >
            <Image
              src="/Home/casestudy-rightarrow.svg"
              alt="Previous"
              width={24}
              height={24}
              className="w-5 h-5 rotate-180"
            />
          </button>

          {/* Next arrow — at the very right edge */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next case study"
            className="absolute right-1 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-white min-w-[44px] min-h-[44px] p-3 shadow-md hover:bg-gray-50 cursor-pointer transition-colors"
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

        {/* Dot indicators below slide area */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {studies.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                active === i ? "bg-[#1C75BC] w-6" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
