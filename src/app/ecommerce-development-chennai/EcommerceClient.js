"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Faq from "@/components/Faq";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "200+", label: "Projects Delivered", bg: "#ffedef" },
  { value: "92%", label: "Client Retention", bg: "#ffebd6" },
  { value: "6+", label: "Years Experience", bg: "#fff8d1" },
  { value: "95%", label: "On-Time Delivery", bg: "#d6ffe9" },
  { value: "100%", label: "In-House Team", bg: "#ffe5f6" },
];

const audiences = [
  {
    title: "D2C Brands & Retail",
    description:
      "Direct-to-consumer brands that need a storefront that converts — fast load times, mobile-first design, loyalty programmes, and seamless checkout. We've launched D2C stores across fashion, wellness, and food verticals.",
    icon: "/images/ecommerce/icon-online-shop.png",
    color: "#e5f8ff",
  },
  {
    title: "Enterprise & High-Volume Commerce",
    description:
      "Multi-vendor marketplaces, B2B portals, and high-SKU catalogues that need robust inventory management, ERP integrations, and architecture that handles Black Friday traffic without downtime.",
    icon: "/images/ecommerce/icon-layers.png",
    color: "#f5e4ff",
  },
  {
    title: "Startups & First-Time Sellers",
    description:
      "First-time founders who need a production-grade store fast — without overbuilding. We choose the right platform for your stage, keep costs predictable, and give you a foundation you can scale.",
    icon: "/images/ecommerce/icon-lightbulb.png",
    color: "#deffcd",
  },
];

const coreFeatures = [
  {
    title: "Smart Cart & Checkout",
    description: "One-page checkout, cart abandonment recovery, guest checkout, and address autofill.",
    icon: "/images/ecommerce/icon-cart.png",
    bg: "#ffe4dd",
  },
  {
    title: "Secure Payment Gateway",
    description: "Razorpay, PayU, Stripe, UPI, and net banking — PCI-DSS compliant across all flows.",
    icon: "/images/ecommerce/icon-payment.png",
    bg: "#e5f8ff",
  },
  {
    title: "Ratings & Reviews",
    description: "Verified buyer reviews, star ratings, photo uploads, and seller response — built for trust.",
    icon: "/images/ecommerce/icon-reviews.png",
    bg: "#ffe8cf",
  },
  {
    title: "Live Chat Support",
    description: "Embedded live chat with product-context awareness — reduce support tickets, increase conversions.",
    icon: "/images/ecommerce/icon-livechat.png",
    bg: "#deffcd",
  },
  {
    title: "Dynamic Menu Builder",
    description: "Multi-level category menus, mega menus, and mobile-optimised navigation — no code changes needed.",
    icon: "/images/ecommerce/icon-menu.png",
    bg: "#f5e4ff",
  },
  {
    title: "Social Login",
    description: "Google, Facebook, and Apple sign-in. Reduce registration friction — increase returning visitors.",
    icon: "/images/ecommerce/icon-social-login.png",
    bg: "#e8e6ff",
  },
];

const paymentFeatures = [
  {
    title: "EMI & No-Cost EMI",
    description: "Bajaj Finserv, HDFC, ICICI, and Razorpay EMI integrations — increase average order value by 30–40%.",
    icon: "/images/ecommerce/icon-emi.png",
  },
  {
    title: "E-Wallet Integration",
    description: "Paytm, Amazon Pay, PhonePe, and Mobikwik — pre-loaded balances that convert faster than card payments.",
    icon: "/images/ecommerce/icon-ewallet.png",
  },
  {
    title: "Buy Now, Pay Later",
    description: "LazyPay, ZestMoney, and Simpl BNPL flows — widen your addressable market to credit-lite customers.",
    icon: "/images/ecommerce/icon-paylater.png",
  },
  {
    title: "Mobile Commerce",
    description: "React Native apps with shared cart, push notifications, and biometric checkout for iOS and Android.",
    icon: "/images/ecommerce/icon-smartphone.png",
  },
];

const platforms = {
  shopify: {
    label: "Shopify",
    heading: "Shopify — Fast Launch, Proven Ecosystem",
    description:
      "Best for D2C brands that want a reliable, app-rich platform with minimal technical overhead. We build custom Shopify themes using Liquid and Next.js storefronts on the Storefront API.",
    capabilities: [
      "Custom theme development (Liquid + Dawn)",
      "Shopify Plus migrations and customisations",
      "App integrations — Klaviyo, Gorgias, Recharge, Yotpo",
      "Headless Shopify with Next.js Storefront API",
      "Multi-currency and international market setup",
    ],
    icon: "/images/ecommerce/icon-browser.png",
  },
  woocommerce: {
    label: "WooCommerce",
    heading: "WooCommerce — Maximum Flexibility",
    description:
      "Best for businesses already on WordPress, or needing full ownership without SaaS fees. We build custom WooCommerce stores with optimised performance — not stock installs.",
    capabilities: [
      "Custom WooCommerce theme from Figma or scratch",
      "Plugin development for unique business logic",
      "Performance optimisation (TTFB, CLS, LCP)",
      "Multisite and multi-vendor marketplace setup",
      "WooCommerce → Shopify / headless migration",
    ],
    icon: "/images/ecommerce/icon-feature.png",
  },
  magento: {
    label: "Magento / Adobe Commerce",
    heading: "Magento — Enterprise-Grade Commerce",
    description:
      "For high-SKU catalogues, complex B2B pricing rules, and multi-store setups. We build and maintain Magento 2 / Adobe Commerce projects that most agencies won't touch.",
    capabilities: [
      "Magento 2 custom module development",
      "B2B quote workflows and customer-specific pricing",
      "ERP integrations (SAP, Oracle, Tally)",
      "Magento → headless PWA migration",
      "Performance audits and server-side caching",
    ],
    icon: "/images/ecommerce/icon-layers.png",
  },
  headless: {
    label: "Headless / Custom",
    heading: "Headless Commerce — Maximum Performance",
    description:
      "For brands that need sub-second page loads, unique UX, and deep API integrations. We build headless storefronts with Next.js, React, and any commerce backend.",
    capabilities: [
      "Next.js storefront with SSR + ISR for SEO",
      "Custom React components from your Figma designs",
      "REST / GraphQL API integrations",
      "Headless CMS (Contentful, Sanity, Strapi)",
      "Core Web Vitals optimised — LCP < 2.5s guaranteed",
    ],
    icon: "/images/ecommerce/icon-diamond.png",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Discovery & Requirements",
    description:
      "We audit your catalogue, traffic projections, and business model to recommend the right platform and architecture — not the most profitable one for us.",
  },
  {
    number: "02",
    title: "UX Design & Prototyping",
    description:
      "Figma wireframes of all key flows — homepage, category, PDP, cart, checkout, account. Validated with real users before a line of code is written.",
  },
  {
    number: "03",
    title: "Development & Integration",
    description:
      "Frontend build, backend APIs, payment gateway wiring, admin panel, and third-party integrations — all in one sprint-based cycle with weekly demos.",
  },
  {
    number: "04",
    title: "QA & Performance Testing",
    description:
      "Cross-browser, cross-device testing. Load testing to simulate sale traffic. Core Web Vitals audit — we don't launch until Google PageSpeed scores green.",
  },
  {
    number: "05",
    title: "Launch & Handover",
    description:
      "Zero-downtime deployment, DNS cutover, payment gateway go-live checklist, and 30-day hypercare support. Your team gets full documentation and admin training.",
  },
];

const whyTrimsel = [
  {
    title: "Technical Depth",
    description:
      "Our team has built custom payment flows, real-time inventory systems, and B2B pricing engines — not just Shopify installs. We handle the hard problems other agencies avoid.",
    icon: "/images/ecommerce/icon-diamond.png",
  },
  {
    title: "SEO-First Build",
    description:
      "Every page gets structured data, server-side rendering, and Core Web Vitals optimisation baked in. Your store is built to rank from day one.",
    icon: "/images/ecommerce/icon-browser.png",
  },
  {
    title: "Full Ownership",
    description:
      "100% in-house team in Chennai. No outsourcing, no freelancers. You always talk to the people building your product — and the code is yours from day one.",
    icon: "/images/ecommerce/icon-support.png",
  },
  {
    title: "Post-Launch Partnership",
    description:
      "92% of our clients continue with us beyond launch. We run your marketing campaigns, maintain your platform, and build new features — one partner for growth.",
    icon: "/images/ecommerce/icon-ecommerce.png",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function EcommerceClient() {
  const [activeTab, setActiveTab] = useState("shopify");

  const activePlatform = platforms[activeTab];

  return (
    <div className="font-sans">
      <Header transparent={false} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="pt-28 pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(121.67deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 100%), linear-gradient(114.5deg, rgb(218,255,226) 0%, rgb(157,205,143) 100%)",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-[#252525] rounded-full px-4 py-2 mb-6">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{
                    background:
                      "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  E-commerce Development — Chennai
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#111] leading-tight mb-6">
                E-commerce Websites That{" "}
                <span className="text-[#67bb3d]">Convert</span>, Not Just
                Display
              </h1>

              <p className="text-lg sm:text-xl text-[#333] leading-relaxed mb-8 font-light">
                We build Shopify, WooCommerce, and headless React storefronts
                with full payment integration, sub-second load times, and
                built-in SEO. 200+ projects delivered. 92% client retention.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center bg-[#67bb3d] text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#58a832] transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center border-2 border-[#67bb3d] text-[#67bb3d] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[#f0fde8] transition-colors"
                >
                  View Our Work
                </Link>
              </div>

              {/* Trust bar */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  "Razorpay Certified Partners",
                  "Google Core Web Vitals Optimised",
                  "100% In-House Team",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#67bb3d] flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm text-[#444] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px]">
                <Image
                  src="/images/ecommerce/icon-hero.png"
                  alt="E-commerce website development illustration"
                  width={460}
                  height={420}
                  className="w-full h-auto drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[10px] px-5 py-6 text-center"
                style={{ backgroundColor: stat.bg }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#111] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#555] font-medium leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we build for ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#f7fff4]">
        <div className="container mx-auto max-w-6xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-[#252525] rounded-full px-4 py-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Who We Build For
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#111] text-center leading-tight mb-4">
            Built for Businesses at Every Stage
          </h2>
          <p className="text-lg text-[#555] text-center max-w-2xl mx-auto mb-12 font-light">
            Whether you&apos;re launching your first store or scaling to 10,000
            daily orders, we build the platform your stage actually needs.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="rounded-[12px] p-7 flex flex-col gap-4"
                style={{ backgroundColor: a.color }}
              >
                <Image
                  src={a.icon}
                  alt={a.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-bold text-[#111]">{a.title}</h3>
                <p className="text-[#444] text-[15px] leading-relaxed font-light">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core features — dark bg ──────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#030303]">
        <div className="container mx-auto max-w-6xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-[#1a1a1a] border border-[#333] rounded-full px-4 py-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Core Features
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white text-center leading-tight mb-4">
            Everything Your Store Needs to Sell
          </h2>
          <p className="text-lg text-[#aaa] text-center max-w-2xl mx-auto mb-12 font-light">
            Not a template. Not a plugin stack. Every feature is built to your
            business logic and QA-tested before launch.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-[10px] p-6 flex flex-col gap-3"
                style={{ backgroundColor: f.bg }}
              >
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain"
                />
                <h3 className="text-lg font-bold text-[#111]">{f.title}</h3>
                <p className="text-[#444] text-[14px] leading-relaxed font-light">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advanced payment features ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#f7fff4]">
        <div className="container mx-auto max-w-6xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-[#252525] rounded-full px-4 py-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Payment & Checkout
              </span>
            </div>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-center leading-tight mb-4"
            style={{
              background:
                "linear-gradient(94deg, rgb(144,5,229) 0%, rgb(5,161,229) 50%, rgb(103,187,61) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Advanced Payment Integrations
          </h2>
          <p className="text-lg text-[#555] text-center max-w-2xl mx-auto mb-12 font-light">
            More payment options = higher conversion. We integrate every major
            Indian payment method — including BNPL flows that are proven to
            increase AOV by 30–40%.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paymentFeatures.map((f, i) => {
              const bgs = ["#ffe4dd", "#e5f8ff", "#ffe8cf", "#deffcd"];
              return (
                <div
                  key={f.title}
                  className="rounded-[10px] p-6 flex flex-col gap-4 text-center items-center"
                  style={{ backgroundColor: bgs[i] }}
                >
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={52}
                    height={52}
                    className="w-13 h-13 object-contain"
                  />
                  <h3 className="text-base font-bold text-[#111]">{f.title}</h3>
                  <p className="text-[#555] text-[13px] leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Platform tabs ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-[#1a1a1a] border border-[#333] rounded-full px-4 py-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Platforms
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white text-center leading-tight mb-12">
            We Work With the Platform That Fits You
          </h2>

          {/* Tab strip */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.entries(platforms).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === key
                    ? "bg-[#67bb3d] text-white"
                    : "bg-[#1a1a1a] text-[#aaa] hover:bg-[#252525] hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Active platform content */}
          <div className="bg-[#141414] rounded-[16px] p-8 sm:p-10 grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <Image
                src={activePlatform.icon}
                alt={activePlatform.label}
                width={56}
                height={56}
                className="w-14 h-14 object-contain mb-5"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {activePlatform.heading}
              </h3>
              <p className="text-[#aaa] text-base leading-relaxed font-light">
                {activePlatform.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {activePlatform.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-3 bg-[#1f1f1f] rounded-[8px] px-5 py-4"
                >
                  <div className="w-5 h-5 rounded-full bg-[#67bb3d] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#ddd] text-[15px] leading-relaxed">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-[#252525] rounded-full px-4 py-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Process
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#111] text-center leading-tight mb-4">
            From Discovery to Launch in 5 Stages
          </h2>
          <p className="text-lg text-[#555] text-center max-w-2xl mx-auto mb-12 font-light">
            A clear, repeatable process with weekly demos — so you always know
            where your project is.
          </p>

          <div className="flex flex-col gap-0">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-6 items-start relative"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[26px] top-[52px] w-[2px] h-full bg-[#e5e5e5] z-0" />
                )}

                {/* Number badge */}
                <div className="relative z-10 shrink-0 w-[52px] h-[52px] rounded-full bg-[#67bb3d] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3 className="text-lg font-bold text-[#111] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#555] text-[15px] leading-relaxed font-light max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Trimsel ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-[#f6f6f6]">
        <div className="container mx-auto max-w-6xl">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center bg-[#252525] rounded-full px-4 py-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{
                  background:
                    "linear-gradient(90deg, #60df22 0%, #54ff00 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Why Trimsel
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#111] text-center leading-tight mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-[#555] text-center max-w-2xl mx-auto mb-12 font-light">
            Any agency can launch a store. We build e-commerce products that
            grow with your business — and stay with you after launch.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {whyTrimsel.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[12px] p-7 flex gap-5 shadow-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain shrink-0"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#555] text-[14px] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="mt-12 bg-[#67bb3d] rounded-[16px] px-8 py-10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Build Your E-commerce Store?
            </h3>
            <p className="text-white/90 text-base mb-6 font-light">
              Tell us about your project and we&apos;ll give you a platform
              recommendation, timeline, and fixed-price quote — within 48 hours.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-white text-[#67bb3d] font-bold px-8 py-4 rounded-lg text-base hover:bg-[#f0fde8] transition-colors"
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Faq />

      {/* ── Contact form ─────────────────────────────────────────────────── */}
      <GetInTouchBanner />
      <Contactform />
    </div>
  );
}
