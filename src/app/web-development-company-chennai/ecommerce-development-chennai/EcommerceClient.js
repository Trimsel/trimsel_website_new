"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Faq from "@/components/Faq";
import Contactform from "@/components/Contactform";
import LatestInsights from "@/components/LatestInsights";
import Testimonial from "@/components/testimonial";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import TechStackTabs from "@/components/TechStackTabs";

// ── Section 6 data ─────────────────────────────────────────────────────────
const customerFeatures = [
  {
    title: "Social Login & Registration",
    description: "One-tap signup through Google, Facebook, or Apple.",
  },
  {
    title: "Multiple Payment Options",
    description: "Razorpay, Stripe, PayU, UPI, cards, wallets, COD.",
  },
  {
    title: "Smart Product Search & Filters",
    description: "Category navigation, autocomplete, attribute filters.",
  },
  {
    title: "Push Notifications",
    description: "Order updates, abandoned cart reminders, flash sale alerts.",
  },
  {
    title: "Reviews & Ratings",
    description: "Star ratings, photo reviews, verified buyer badges.",
  },
  {
    title: "Shopping Cart & Wishlist",
    description: "Persistent cart, saved-for-later, coupon codes.",
  },
];

const adminFeatures = [
  {
    title: "Product & Inventory Management",
    description: "Variants, SKU tracking, stock alerts, bulk import.",
  },
  {
    title: "Order Management & Fulfilment",
    description: "Status tracking, shipping labels, returns, logistics.",
  },
  {
    title: "Customer Management",
    description: "Profiles, order history, segment tagging.",
  },
  {
    title: "Revenue Analytics & Reports",
    description: "Sales dashboards, conversion tracking, AOV, CLV.",
  },
  {
    title: "Coupon & Promotion Engine",
    description: "Discount codes, BOGO, flash sales, free shipping.",
  },
  {
    title: "Multi-Vendor Management",
    description: "Vendor onboarding, commissions, payouts, per-vendor analytics.",
  },
];

// ── Section 9 tech stack ───────────────────────────────────────────────────
const techTabs = [
  {
    name: "E-COMMERCE PLATFORMS",
    tools: [
      { name: "React", icon: "/icons/Tools/react.svg" },
      { name: "Next.js", icon: "/icons/Tools/nextjs.svg" },
      { name: "Node.js", icon: "/icons/Tools/nodejs.svg" },
      { name: "MongoDB", icon: "/icons/Tools/mongodb.svg" },
      { name: "PostgreSQL", icon: "/icons/Tools/postgresql.svg" },
      { name: "MySQL", icon: "/icons/Tools/mysql.svg" },
    ],
  },
  {
    name: "FRONTEND & BACKEND",
    tools: [
      { name: "React", icon: "/icons/Tools/react.svg" },
      { name: "Next.js", icon: "/icons/Tools/nextjs.svg" },
      { name: "Node.js", icon: "/icons/Tools/nodejs.svg" },
      { name: "Tailwind CSS", icon: "/icons/Tools/tailwindcss.svg" },
      { name: "TypeScript", icon: "/icons/Tools/typescript.svg" },
      { name: "Express.js", icon: "/icons/Tools/expressjs.svg" },
    ],
  },
  {
    name: "PAYMENTS & INTEGRATIONS",
    tools: [
      { name: "Google Analytics", icon: "/icons/Tools/googleanalytics.svg" },
      { name: "HubSpot", icon: "/icons/Tools/hubspot.svg" },
      { name: "Mailchimp", icon: "/icons/Tools/mailchimp.svg" },
    ],
  },
];

export default function EcommerceClient({ posts }) {
  const [activeFeatureTab, setActiveFeatureTab] = useState("CUSTOMER APP");

  return (
    <main className="bg-white">
      <Header />

      {/* ── SECTION 1: HERO ───────────────────────────────────────────── */}
      <section className="relative flex min-h-screen lg:min-h-[90dvh] items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-[#eef3f8]">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 pt-24 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12 lg:pt-10 lg:pb-0">

          {/* Left content */}
          <div className="relative z-20 text-center text-black md:text-left">
            {/* Breadcrumb */}
            <p className="text-sm font-medium text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#1C75BC] transition-colors">Home</Link>
              {" › "}
              <Link href="/web-development-company-chennai" className="hover:text-[#1C75BC] transition-colors">Web Development</Link>
              {" › "}
              <span className="text-gray-700">E-Commerce Development</span>
            </p>

            <h1 className="mt-2 mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              E-Commerce Website &amp; App Development Company in Chennai
            </h1>

            <p className="mb-3 text-xl font-semibold text-[#1C75BC]">
              Custom Online Stores That Sell — Not Just Look Good
            </p>

            <p className="mb-8 max-w-xl text-base sm:text-lg text-gray-700 leading-relaxed">
              We build e-commerce platforms that handle real traffic, real transactions, and real customer expectations — from product catalogues and inventory management to payment processing, order tracking, and automated fulfilment. Whether you need a Shopify store, a WooCommerce site, or a fully custom e-commerce platform built on React and Node.js — our Chennai-based team delivers online stores that convert visitors into buyers and keep them coming back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-lg bg-[#1C75BC] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
              >
                Get a Free Quote
                <Image src="/Home/right-arrow.svg" width={20} height={20} alt="" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-[#1C75BC] px-7 py-3.5 text-base font-semibold text-[#1C75BC] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1C75BC] hover:text-white"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:mt-2">
            <Image
              src="/Web1.svg"
              alt="E-commerce website and app development company in Chennai"
              width={500}
              height={500}
              className="relative z-10 h-auto w-[260px] sm:w-[340px] md:w-[460px]"
              priority
            />
            <Image
              src="/Web2.svg"
              alt="E-commerce platform features"
              width={500}
              height={500}
              className="absolute z-10 h-auto w-[300px] sm:w-[380px] md:w-[500px] opacity-60"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY CHOOSE TRIMSEL ─────────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            BUILD YOUR ONLINE STORE
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-4">
            Why Businesses Choose Trimsel to Build Their E-Commerce Platform
          </h2>
          <p className="text-center text-gray-600 font-medium max-w-3xl mx-auto mb-10">
            We don&apos;t build cookie-cutter online stores. Every e-commerce platform we deliver is designed around your product catalogue, your customer behaviour, and your revenue goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {/* Card 1 */}
            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
              <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center mb-4">
                <span className="text-pink-700 font-bold text-lg">✦</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Experienced E-Commerce Developers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our team has built online stores across D2C, B2B, and marketplace models — from product configurators to subscription platforms.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center mb-4">
                <span className="text-orange-700 font-bold text-lg">92%</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">92% Client Retention</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We don&apos;t just launch your store and disappear. Ongoing optimisation, support, and conversion improvements keep clients with us long-term.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
              <div className="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center mb-4">
                <span className="text-yellow-700 font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Performance-First Architecture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Every store we build is optimised for Core Web Vitals, mobile speed, and SEO — because slow stores lose customers before they browse.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold text-lg">↑</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Conversion-Focused UI/UX</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We design checkout flows, product pages, and navigation based on how shoppers actually buy — not what looks good in a mockup.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100">
              <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center mb-4">
                <span className="text-pink-700 font-bold text-lg">6+</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Since 2020</h3>
              <p className="text-gray-600 text-sm leading-relaxed">6 years building web platforms and e-commerce systems for businesses across India, the US, and the Middle East.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C75BC] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
            >
              Start a Project
              <Image src="/Home/right-arrow.svg" width={16} height={16} alt="" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TYPES OF E-COMMERCE ────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#eef3f8] to-[#dde6ef] py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            WHAT WE BUILD
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-12">
            Custom E-Commerce Platforms for Every Business Model
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left — 4 types */}
            <div className="flex flex-col gap-6">
              {[
                {
                  title: "Business to Consumer (B2C)",
                  desc: "Direct-to-consumer online stores — product catalogues, shopping carts, checkout, and order management.",
                },
                {
                  title: "Business to Business (B2B)",
                  desc: "Wholesale platforms with bulk pricing, quote requests, account-based ordering, and custom catalogues.",
                },
                {
                  title: "Consumer to Consumer (C2C)",
                  desc: "Peer-to-peer marketplaces with escrow payments, seller verification, and dispute resolution.",
                },
                {
                  title: "Multi-Vendor Marketplace",
                  desc: "Platforms with vendor dashboards, commission management, and unified checkout.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#1C75BC] flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">→</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1C75BC] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
                >
                  Contact Our Expert
                  <Image src="/Home/right-arrow.svg" width={16} height={16} alt="" />
                </Link>
              </div>
            </div>

            {/* Right — checklist card */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-snug">
                Want to launch an e-commerce platform that actually generates revenue?
              </h3>
              <ul className="space-y-4">
                {[
                  "Custom platforms tailored to your catalogue, pricing model, and customer journey",
                  "Payment gateways (Razorpay, Stripe, PayU), shipping APIs (Shiprocket, Delhivery), and inventory management",
                  "SEO, performance, and mobile-first design as defaults",
                  "Shopify, WooCommerce, or custom React + Node.js based on your needs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT SETS US APART ─────────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            HOW ARE WE DIFFERENT?
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-10">
            What Sets Trimsel Apart From Other E-Commerce Development Companies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Revenue-First Design",
                desc: "Every design decision is made to increase conversion rate and average order value.",
              },
              {
                title: "Transparent Pricing",
                desc: "Fixed-price proposal with clear deliverables. No scope creep surprises.",
              },
              {
                title: "Full Source Code Ownership",
                desc: "You own 100% of the source code. No vendor lock-in.",
              },
              {
                title: "Modern Tech Stack",
                desc: "React, Next.js, Node.js, Shopify, WooCommerce — chosen for your needs.",
              },
              {
                title: "Post-Launch Support",
                desc: "Updates, performance monitoring, security patches, and conversion optimisation.",
              },
              {
                title: "SEO & Performance Built In",
                desc: "Core Web Vitals, schema markup, meta tags optimised from day one.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1C75BC]/10 flex items-center justify-center mb-4">
                  <span className="text-[#1C75BC] text-sm font-bold">✦</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MID-PAGE CTA ────────────────────────────────────── */}
      <section className="bg-[#0B1120] py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#1C75BC] font-semibold text-sm uppercase tracking-widest mb-4">
            India&apos;s e-commerce market is projected to reach $350 billion by 2030.
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
            Your Customers Are Already Shopping Online. Is Your Store Ready?
          </h2>
          <p className="text-gray-300 font-medium text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re launching your first online store or rebuilding an underperforming one — get in touch.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-3 rounded-lg bg-[#1C75BC] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
          >
            Get in Touch
            <Image src="/Home/right-arrow.svg" width={20} height={20} alt="" />
          </Link>
        </div>
      </section>

      {/* ── SECTION 6: E-COMMERCE FEATURES (TABS) ─────────────────────── */}
      <section className="bg-[#F5F7FA] py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            FEATURE-RICH E-COMMERCE PLATFORM
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-3">
            E-Commerce Features That Drive Sales
          </h2>
          <p className="text-center text-gray-600 font-medium max-w-2xl mx-auto mb-10">
            Complete suite of features for customers and operations team.
          </p>

          {/* Tab buttons */}
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {["CUSTOMER APP", "ADMIN PANEL"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFeatureTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFeatureTab === tab
                    ? "bg-[#1C75BC] text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#1C75BC] hover:text-[#1C75BC]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content — all in DOM */}
          {[
            { id: "CUSTOMER APP", features: customerFeatures },
            { id: "ADMIN PANEL", features: adminFeatures },
          ].map(({ id, features }) => (
            <div key={id} className={activeFeatureTab === id ? "" : "hidden"}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map((feat) => (
                  <div
                    key={feat.title}
                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1C75BC]/10 flex items-center justify-center mb-3">
                      <span className="text-[#1C75BC] font-bold text-sm">✦</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feat.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 7: ADVANCED FEATURES ──────────────────────────────── */}
      <section className="relative py-16 px-4 md:px-10 overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#162D9C]">
        {/* Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        >
          <span className="text-white/5 font-black text-[120px] sm:text-[160px] uppercase tracking-tighter whitespace-nowrap">
            ADVANCED FEATURES
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl text-white mb-12">
            Advanced Commerce Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Live Customer Support",
                desc: "Real-time chat with Intercom, Tidio, or WhatsApp Business API. Chatbot + human handoff.",
              },
              {
                title: "Digital Wallet & Saved Payments",
                desc: "One-tap repeat purchases. PCI-DSS compliant tokenised storage.",
              },
              {
                title: "EMI & Buy Now Pay Later",
                desc: "Simpl, LazyPay, ZestMoney, Bajaj Finserv EMI integration.",
              },
              {
                title: "Pay Later / Credit Options",
                desc: "B2B invoice-based ordering with net-30/60 terms and credit limits.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#1C75BC]/30 flex items-center justify-center mb-4">
                  <span className="text-[#1C75BC] font-bold">✦</span>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: BUSINESS TYPES ─────────────────────────────────── */}
      <section className="bg-gray-900 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            E-COMMERCE FOR EVERY BUSINESS
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl text-white mb-3">
            Custom Platforms for Every Stage of Growth
          </h2>
          <p className="text-center text-gray-400 font-medium max-w-2xl mx-auto mb-10">
            We work with first-time sellers and established brands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "D2C Brands & Retail",
                desc: "Branded storefronts, social commerce, analytics showing where revenue comes from and where it leaks.",
              },
              {
                title: "Startups & First-Time Sellers",
                desc: "MVP stores on Shopify or WooCommerce — selling in weeks, not months.",
              },
              {
                title: "Enterprise & High-Volume Commerce",
                desc: "Custom React + Node.js for thousands of SKUs, complex pricing, multi-warehouse fulfilment.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="font-semibold text-white text-xl mb-3">{card.title}</h3>
                <p className="text-gray-300 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1C75BC] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg"
            >
              Contact Our Expert
              <Image src="/Home/right-arrow.svg" width={16} height={16} alt="" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: TOOLS & TECH ────────────────────────────────────── */}
      <TechStackTabs
        eyebrow="TOOLS AND TECHNOLOGIES"
        heading="The E-Commerce Tech Stack We Build With"
        description="React and Next.js for performance, Node.js for the backend, and the payment and analytics integrations your store needs from day one."
        tabs={techTabs}
      />

      {/* ── SECTION 10: SHARED COMPONENTS ─────────────────────────────── */}
      <CaseStudyCarousel
        studies={[caseStudies.ezyhelpers, caseStudies.mocial, caseStudies.kariot]}
      />

      <Client />

      <Testimonial />

      <IndustriesWeServe
        description="We build e-commerce platforms for D2C brands, B2B wholesalers, multi-vendor marketplaces, and service businesses across retail, fashion, electronics, healthcare, food & beverage, and education — each with its own catalogue complexity and customer behaviour."
      />

      <Contactform
        eyebrow="GET A FREE QUOTE"
        heading="Ready to Build Your Online Store?"
        subheading="Tell us about your e-commerce project — products, platform preference, features — and we'll give you a clear proposal."
        formTitle="Start Your E-Commerce Project"
        defaultService="Web Dev"
      />

      <LatestInsights posts={posts} />

      <Faq />
    </main>
  );
}
