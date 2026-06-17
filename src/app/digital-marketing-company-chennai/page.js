import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Faq from "@/components/Faq";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import LatestInsights from "@/components/LatestInsights";
import { getFilteredPosts } from "@/lib/blog";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import Testimonial from "@/components/testimonial";
import FeaturesGrid from "@/components/FeaturesGrid";
import TechStackTabs from "@/components/TechStackTabs";
import DmProcessAccordion from "./DmProcessAccordion";

export const metadata = {
  title: "Digital Marketing Company in Chennai | SEO, Google Ads & Social Media | Trimsel",
  description:
    "Trimsel is a digital marketing company in Chennai delivering SEO, Google Ads, Meta Ads, and content marketing. 180% average traffic growth. 4.5x ROAS on paid campaigns. Free strategy session.",
  alternates: {
    canonical: "https://www.trimsel.com/digital-marketing-company-chennai",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/digital-marketing-company-chennai",
    title: "Digital Marketing Company in Chennai | SEO, Google Ads & Social Media | Trimsel",
    description:
      "Trimsel is a digital marketing company in Chennai delivering SEO, Google Ads, Meta Ads, and content marketing. 180% average traffic growth. 4.5x ROAS on paid campaigns. Free strategy session.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Digital marketing services by Trimsel Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "Trimsel",
    url: "https://trimsel.com",
  },
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
  description:
    "Digital marketing company in Chennai delivering SEO, Google Ads, Meta Ads, social media marketing, content marketing, and AEO/GEO optimisation.",
  offers: {
    "@type": "AggregateOffer",
    offerCount: 7,
    offers: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Search Engine Optimisation (SEO)" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Performance Marketing (Google Ads & Meta Ads)" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Social Media Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Content Marketing & Strategy" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Local SEO" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Answer Engine & Generative Engine Optimisation (AEO & GEO)" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Email Marketing & Automation" },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I choose the best digital marketing company in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for transparent reporting, channel expertise across SEO and paid media, and proof of real results — not just follower counts. Trimsel delivers 180% average traffic growth and 4.5x ROAS with full attribution tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital marketing cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO retainers typically start from ₹25,000–60,000/month. Google Ads management starts from ₹15,000/month plus ad spend. Full-service digital marketing ranges from ₹50,000–2,00,000/month depending on channels and scale.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical SEO fixes show results in 4–8 weeks. Ranking improvements for competitive keywords typically take 3–6 months. Paid channels (Google Ads, Meta Ads) can generate leads within the first week.",
      },
    },
    {
      "@type": "Question",
      name: "Should I run Google Ads or focus on SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both serve different purposes. Google Ads generates immediate traffic and leads. SEO builds long-term organic visibility at lower cost per click. The best strategy depends on your timeline and budget — we assess both and recommend the right mix.",
      },
    },
    {
      "@type": "Question",
      name: "What is AEO and GEO in digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO (Answer Engine Optimisation) targets featured snippets and voice search answers. GEO (Generative Engine Optimisation) ensures your brand appears in AI-generated answers from ChatGPT, Gemini, and Perplexity. Both are critical as AI search grows.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage our social media accounts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we handle strategy, content creation, scheduling, community management, and paid social campaigns across Instagram, LinkedIn, Facebook, and X (Twitter) — with monthly performance reports.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between digital marketing and performance marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing covers all online channels including SEO, content, social, and email. Performance marketing specifically refers to paid campaigns (Google Ads, Meta Ads) where you pay per click or conversion — directly measurable against ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Do you run Meta Ads campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we run Facebook and Instagram Ads campaigns including prospecting, retargeting, and lead generation. We use conversion-optimised creative, audience segmentation, and A/B testing to maximise ROAS.",
      },
    },
    {
      "@type": "Question",
      name: "Can digital marketing work for B2B businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — B2B digital marketing uses LinkedIn Ads, SEO for intent-driven keywords, email nurturing, and content marketing to generate qualified leads. Our approach aligns messaging with your sales funnel stages.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Trimsel for digital marketing services in Chennai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data-first strategy, full attribution reporting, and a team that works across SEO, paid media, social, and content — not channel silos. 180% average traffic growth, 4.5x ROAS, 55% CPL reduction across client accounts.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.trimsel.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Digital Marketing Company Chennai",
      item: "https://www.trimsel.com/digital-marketing-company-chennai",
    },
  ],
};

const services = [
  {
    title: "Search Engine Optimisation (SEO)",
    description:
      "Technical SEO, on-page optimisation, link building, and content strategy to rank for the keywords your customers actually search. We've driven 180% traffic growth for clients through sustainable organic rankings — not shortcuts that reverse on the next algorithm update.",
    icon: "/digital-whatwedo1.svg",
    href: "#",
  },
  {
    title: "Performance Marketing",
    description:
      "Google Ads and Meta Ads campaigns built around conversions — not impressions. We structure campaigns by intent, write conversion-optimised ad copy, and optimise bids weekly to deliver 4.5x ROAS across client accounts.",
    icon: "/digital-whatwedo2.svg",
    href: "#",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategy, content creation, community management, and paid social across Instagram, LinkedIn, Facebook, and X. We build your brand presence and generate leads — with clear metrics on reach, engagement, and conversions.",
    icon: "/digital-whatwedo3.svg",
    href: "#",
  },
  {
    title: "Content Marketing & Strategy",
    description:
      "Blog posts, landing pages, case studies, and thought leadership content that ranks in search and converts visitors. Our content is written for your target audience first, search engines second — tied directly to your business goals.",
    icon: "/digital-whatwedo4.svg",
    href: "#",
  },
  {
    title: "Local SEO",
    description:
      "Google Business Profile optimisation, local citation building, review management, and geo-targeted content to dominate local search results. Critical for service businesses, clinics, restaurants, and retail locations in Chennai and across India.",
    icon: "/digital-whatwedo5.svg",
    href: "#",
  },
  {
    title: "AEO & GEO Optimisation",
    description:
      "Answer Engine Optimisation for featured snippets and voice search, plus Generative Engine Optimisation to ensure your brand appears in AI-generated answers from ChatGPT, Gemini, and Perplexity — the next frontier of search visibility.",
    icon: "/digital-whatwedo6.svg",
    href: "#",
  },
  {
    title: "Email Marketing & Automation",
    description:
      "Drip campaigns, lead nurturing sequences, re-engagement flows, and transactional emails — built in HubSpot, Mailchimp, or your existing CRM. We set up the automation so your leads are followed up consistently without manual effort.",
    icon: "/digital-whatwedo7.svg",
    href: "#",
  },
];

const whyTrimsel = [
  {
    icon: "/digital-whatwedo1.svg",
    title: "Full-Funnel Visibility",
    description:
      "We track every lead back to its source — channel, campaign, keyword, and ad — so you know exactly which spend is generating revenue and which isn't.",
  },
  {
    icon: "/digital-whatwedo2.svg",
    title: "No Channel Silos",
    description:
      "SEO, paid, social, and content teams work from one shared strategy. Messaging stays consistent and budgets move to wherever the data shows the best return.",
  },
  {
    icon: "/digital-whatwedo3.svg",
    title: "Proven Paid Media Results",
    description:
      "4.5x average ROAS on Google Ads and Meta Ads campaigns — with 55% CPL reduction achieved through structured testing and weekly optimisation, not set-and-forget management.",
  },
  {
    icon: "/digital-whatwedo4.svg",
    title: "AI-Powered Content at Scale",
    description:
      "We integrate AI-assisted content production with human editorial oversight — using our in-house AI expertise to produce SEO content faster without sacrificing quality or E-E-A-T signals.",
  },
  {
    icon: "/digital-whatwedo5.svg",
    title: "Technical SEO Depth",
    description:
      "Our team includes engineers who understand Core Web Vitals, JavaScript rendering, and crawl architecture — not just keyword research. Your web platform and SEO strategy are built together.",
  },
  {
    icon: "/digital-whatwedo6.svg",
    title: "Transparent Reporting",
    description:
      "Monthly reports in plain language — traffic, leads, cost per acquisition, and ROAS — with clear actions for the next period. No vanity metrics, no jargon.",
  },
];

const techTabs = [
  {
    label: "SEO & ANALYTICS",
    tools: [
      { name: "SEMrush", icon: "/icons/Tools/semrush.svg" },
      { name: "Ahrefs", icon: "/icons/Tools/ahrefs.svg" },
      { name: "Google Analytics", icon: "/icons/Tools/googleanalytics.svg" },
      { name: "Hotjar", icon: "/icons/Tools/hotjar.svg" },
      { name: "Google Ads", icon: "/icons/Tools/googleads.svg" },
    ],
  },
  {
    label: "PAID & SOCIAL",
    tools: [
      { name: "Google Ads", icon: "/icons/Tools/googleads.svg" },
      { name: "Meta Ads", icon: "/icons/Tools/metaads.svg" },
      { name: "LinkedIn Ads", icon: "/icons/Tools/linkedinads.svg" },
      { name: "Hootsuite", icon: "/icons/Tools/hootsuite.svg" },
    ],
  },
  {
    label: "CRM & AUTOMATION",
    tools: [
      { name: "HubSpot", icon: "/icons/Tools/hubspot.svg" },
      { name: "Mailchimp", icon: "/icons/Tools/mailchimp.svg" },
      { name: "LinkedIn", icon: "/icons/Tools/linkedin.svg" },
    ],
  },
];

export default function Digitalmarketing() {
  const posts = getFilteredPosts(["Digital Marketing", "SEO"], 3);
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* HERO */}
      <section className="relative flex min-h-screen lg:min-h-[100dvh] items-center overflow-hidden bg-white">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 pt-24 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12 lg:pt-10 lg:pb-0">
          {/* LEFT CONTENT */}
          <div className="relative z-20 text-center text-black md:text-left">
            <p className="text-md md:text-base font-medium text-black mt-2 mb-4">
              <Link
                href="/"
                className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
              >
                Home
              </Link>
              {" • "}
              <span className="px-2 py-1 rounded-md">
                Digital Marketing Company
              </span>
            </p>

            <h1 className="mt-4 mb-6 text-4xl font-bold leading-tight sm:text-5xl">
              Digital Marketing Company in Chennai That Drives Measurable Growth
            </h1>

            <p className="mb-4 max-w-xl text-base sm:text-lg text-gray-700">
              SEO, Google Ads, Meta Ads, social media, and content marketing —
              built around your revenue goals, not vanity metrics. We run
              data-driven campaigns that generate leads and reduce cost per
              acquisition.
            </p>

            <p className="mb-8 max-w-xl text-base text-gray-600">
              Backed by engineering expertise from our{" "}
              <Link
                href="/web-development-company-chennai"
                className="text-[#1896cd] underline underline-offset-2"
              >
                web development
              </Link>{" "}
              and{" "}
              <Link
                href="/ai-development-company"
                className="text-[#1896cd] underline underline-offset-2"
              >
                AI development
              </Link>{" "}
              teams — so your marketing strategy and your platform work together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
              >
                Get a Free Strategy Session
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-lg border-2 border-[#27AAE1] px-7 py-3.5 text-base font-semibold text-[#27AAE1] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#27AAE1] hover:text-white"
              >
                See Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center lg:mt-2">
            <Image
              src="/digitalmarketing1.svg"
              alt="Digital Marketing Illustration"
              width={340}
              height={340}
              className="relative z-10 h-auto w-[220px] sm:w-[280px] md:w-[340px]"
              priority
            />
            <Image
              src="/digitalmarketing2.svg"
              alt="Marketing Analytics Dashboard"
              width={550}
              height={550}
              className="absolute left-1/6 top-1/6 z-10 h-auto w-[280px] -translate-x-1/2 -translate-y-1/2 animate-shake sm:w-[360px] md:w-[460px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="bg-[#1C75BC] py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div>
            <p className="text-3xl font-bold">4.5x</p>
            <p className="text-sm font-medium mt-1 text-blue-100">Average ROAS on Paid Campaigns</p>
          </div>
          <div>
            <p className="text-3xl font-bold">180%</p>
            <p className="text-sm font-medium mt-1 text-blue-100">Average Organic Traffic Growth</p>
          </div>
          <div>
            <p className="text-3xl font-bold">55%</p>
            <p className="text-sm font-medium mt-1 text-blue-100">Reduction in Cost Per Lead</p>
          </div>
          <div>
            <p className="text-3xl font-bold">SEO · Ads · Social</p>
            <p className="text-sm font-medium mt-1 text-blue-100">Full-Channel Digital Marketing</p>
          </div>
        </div>
      </section>

      <Client />

      {/* WHAT WE DO */}
      <section className="bg-gradient-to-r from-[#eef3f8] to-[#dde6ef] py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">
              WHAT WE DO
            </p>
            <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Digital Marketing Company in Chennai, India
            </h2>

            <p className="mt-4 text-gray-700 font-medium leading-relaxed">
              Trimsel is a digital marketing company in Chennai that combines
              data-driven strategy with full-channel execution — SEO, paid
              media, social, content, and marketing automation under one roof.
              We don&apos;t work in channel silos: every campaign is built around
              your revenue goal, with shared attribution across all touchpoints.
            </p>

            <p className="mt-3 text-gray-700 font-medium leading-relaxed">
              Digital marketing changes faster than most businesses can keep up
              with — algorithm updates, AI search, new ad formats, changing
              audience behaviour. You&apos;re already managing the core business.
              We handle the channels, the testing, and the optimisation so
              your marketing compounds over time instead of stalling.
            </p>

            <p className="mt-3 text-gray-700 font-medium leading-relaxed">
              Our engineering background from{" "}
              <Link
                href="/web-development-company-chennai"
                className="text-[#1896cd] underline underline-offset-2"
              >
                web development
              </Link>{" "}
              and{" "}
              <Link
                href="/ai-development-company"
                className="text-[#1896cd] underline underline-offset-2"
              >
                AI development
              </Link>{" "}
              means we understand the technical side of digital marketing —
              Core Web Vitals, JavaScript rendering, conversion tracking
              infrastructure, and AI-assisted content production — not just
              campaign management.
            </p>

            <div className="mt-6">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#1C9ACF] text-white font-medium px-6 py-3 rounded-md hover:bg-[#168bb9] transition"
              >
                Talk to Our Team
                <Image
                  src="/Home/right-arrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#cfdbe4] rounded-xl p-6 md:p-8 w-full max-w-md mx-auto shadow-sm">
            <div className="mb-4">
              <Image
                src="/growth-icon.svg"
                alt="Digital marketing growth"
                width={80}
                height={80}
                style={{ width: "80px", height: "80px" }}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 leading-snug">
              Is Your Website Losing Traffic and Leads?
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Rankings dropping after a Google algorithm update?",
                "Running ads but seeing high cost per lead?",
                "Social media presence not converting to business?",
                "No visibility in AI search answers (ChatGPT, Gemini)?",
                "Not sure which marketing channels to prioritise?",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="mt-5 w-full bg-[#1C9ACF] text-white py-3 rounded-md hover:bg-[#168bb9] transition flex items-center justify-center gap-2 font-medium"
            >
              Get a Free Marketing Audit
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

      {/* SERVICES */}
      <ServiceCardsGrid
        eyebrow="OUR SERVICES"
        heading="Digital Marketing Services That Drive Revenue"
        description="Seven specialised services across organic and paid channels — each built around measurable business outcomes, not activity metrics."
        services={services}
        bgColor="bg-white"
        containerClass="max-w-8xl mx-auto bg-gradient-to-br from-[#cfe3f1] via-[#c9d7ea] to-[#bfc7e6] rounded-3xl p-8 md:p-12 clip-cut-container shadow-sm clip-cut-section"
      />

      {/* WHY TRIMSEL */}
      <FeaturesGrid
        eyebrow="WHY TRIMSEL"
        heading="Why Businesses Choose Trimsel for Digital Marketing"
        description="We work across SEO, paid media, social, and content as one integrated team — so your marketing strategy compounds across channels instead of competing with itself."
        features={whyTrimsel}
        columns={3}
        sectionClass="bg-white"
      />

      {/* PROCESS ACCORDION */}
      <DmProcessAccordion />

      {/* GET IN TOUCH BANNER */}
      <GetInTouchBanner
        eyebrow="GET IN TOUCH"
        heading="Ready to Grow Your Business Online?"
        description="Whether you need SEO, Google Ads, social media, or a full digital marketing strategy — our Chennai-based team builds campaigns around your revenue goals, not vanity metrics."
        ctaText="Get a Free Strategy Session"
        ctaLink="/contact-us"
        image="/getintouchdigitalmarketing.svg"
        imageAlt="Digital marketing contact"
        bgClass="bg-[#E1C8FF]"
      />

      {/* TECH STACK */}
      <TechStackTabs
        eyebrow="TOOLS AND TECHNOLOGIES"
        heading="The Platforms and Tools We Use"
        description="Industry-leading tools for SEO research, paid campaign management, social scheduling, CRM, and marketing automation — so every campaign is measurable end-to-end."
        tabs={techTabs}
      />

      {/* PROVEN RESULTS */}
      <section className="bg-gradient-to-br from-[#eef3f8] to-[#dde6ef] py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] mb-3">
            PROVEN RESULTS
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Numbers That Reflect Real Client Outcomes
          </h2>
          <p className="mt-3 text-gray-600 font-medium max-w-2xl mx-auto">
            These aren&apos;t projections. These are averages across active client accounts managed by our team.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <p className="text-4xl font-bold text-[#1C75BC]">180%</p>
            <p className="mt-2 font-semibold text-gray-800">Organic Traffic Growth</p>
            <p className="mt-2 text-sm text-gray-600">
              Average increase in organic sessions within 6 months of technical SEO and content implementation.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <p className="text-4xl font-bold text-[#1C75BC]">55%</p>
            <p className="mt-2 font-semibold text-gray-800">Reduction in Cost Per Lead</p>
            <p className="mt-2 text-sm text-gray-600">
              Average CPL reduction achieved through audience optimisation and conversion-rate testing on paid campaigns.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
            <p className="text-4xl font-bold text-[#1C75BC]">4.2x</p>
            <p className="mt-2 font-semibold text-gray-800">Average ROAS</p>
            <p className="mt-2 text-sm text-gray-600">
              Return on ad spend across Google Ads and Meta Ads campaigns — measured on actual revenue, not leads alone.
            </p>
          </div>
        </div>
      </section>

      <CaseStudyCarousel
        studies={[caseStudies.ezyhelpers, caseStudies.mocial, caseStudies.kariot]}
      />

      <Testimonial />

      <IndustriesWeServe
        description="We run digital marketing campaigns across industries in India — B2B SaaS, healthcare, e-commerce, real estate, education, hospitality, and manufacturing. Each sector has different buyer journeys and channel mixes; we build strategies that match how your customers actually make decisions."
      />

      <Contactform
        eyebrow="START GROWING"
        heading="Let&apos;s Build Your Digital Marketing Strategy"
        subheading="Tell us your goals — more leads, better ROAS, higher rankings, or all three. Our Chennai team will audit your current marketing and propose a strategy with realistic targets."
        formTitle="Get Your Free Marketing Audit"
        defaultService="Digital Marketing"
      />

      <LatestInsights posts={posts} />

      <Faq />
    </main>
  );
}
