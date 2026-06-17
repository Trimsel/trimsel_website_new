import Link from "next/link";
import Image from "next/image";
import Client from "@/components/Client";
import LatestInsights from "@/components/LatestInsights";
import Testimonial from "@/components/testimonial";
import { getFilteredPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Contactform from "@/components/Contactform";
import FeaturesGrid from "@/components/FeaturesGrid";

export const metadata = {
  title: "About Trimsel | Software Development Company in Chennai, India",
  description:
    "Trimsel is a software development company in Chennai — building mobile apps, AI, web platforms, and cloud infrastructure since 2020. 200+ projects. 92% retention.",
  alternates: {
    canonical: "https://www.trimsel.com/aboutus",
  },
  openGraph: {
    type: "website",
    url: "https://www.trimsel.com/aboutus",
    title: "About Trimsel | Software Development Company in Chennai, India",
    description:
      "Trimsel is a software development company in Chennai — building mobile apps, AI, web platforms, and cloud infrastructure since 2020. 200+ projects. 92% retention.",
    locale: "en_IN",
    siteName: "Trimsel",
    images: [
      {
        url: "https://www.trimsel.com/images/myherocloud.png",
        width: 1200,
        height: 630,
        alt: "Trimsel software development company in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TrimselSoftwares",
    creator: "@TrimselSoftwares",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trimsel",
  alternateName: "Trimsel Softwares",
  url: "https://www.trimsel.com",
  logo: "https://www.trimsel.com/trimsel-logo.svg",
  description:
    "Trimsel is a software development company in Chennai building mobile apps, AI systems, web platforms, cloud infrastructure, and running digital marketing campaigns since 2020.",
  foundingDate: "2020",
  foundingLocation: {
    "@type": "Place",
    name: "Chennai, Tamil Nadu, India",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 15,
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress:
        "No.21-B 5th Cross Street, South Phase Thiru VI KA Industrial Estate, Indira Nagar, Guindy",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600032",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress:
        "1st Floor, Crystal Plaza State Bank, 138/2, NGO B Colony, New Colony",
      addressLocality: "Tirunelveli",
      addressRegion: "Tamil Nadu",
      postalCode: "627007",
      addressCountry: "IN",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-72008-41581",
    email: "contact@trimsel.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/trimsel",
    "https://www.instagram.com/trimselsoftwares",
  ],
  knowsAbout: [
    "Mobile App Development",
    "Web Application Development",
    "AI Development",
    "Machine Learning",
    "DevOps Consulting",
    "Cloud Consulting",
    "Digital Marketing",
    "SEO",
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
      name: "About Us",
      item: "https://www.trimsel.com/aboutus",
    },
  ],
};

const whatDrivesUs = [
  {
    icon: "/icons/aboutus-process1.svg",
    title: "Built to Last, Not to Rebuild",
    description:
      "Every app, platform, and system we deliver is built on a solid technical foundation — clean architecture, proper documentation, and scalable infrastructure that grows with your business.",
  },
  {
    icon: "/icons/aboutus-process2.svg",
    title: "Interfaces Designed for Real Users",
    description:
      "Our designers build interfaces that are clean, easy to use, and designed around how your users actually think and behave — not around what looks impressive in a Figma mockup.",
  },
  {
    icon: "/icons/aboutus-process3.svg",
    title: "Agile Without the Buzzwords",
    description:
      "We work in short, focused sprints. You see progress every two weeks, give feedback early, and always know exactly where your project stands.",
  },
  {
    icon: "/icons/aboutus-process4.svg",
    title: "Engineers Who've Done It Before",
    description:
      "Our team covers mobile, web, AI, cloud, and DevOps — and we don't rotate junior developers onto your project after the kickoff call. The engineers who scope your project build it.",
  },
  {
    icon: "/icons/aboutus-process5.svg",
    title: "Responsive Across Every Screen",
    description:
      "Every product is tested across real devices and screen sizes — not just resized in Chrome DevTools. Mobile-first design is the default.",
  },
  {
    icon: "/icons/aboutus-process6.svg",
    title: "Your Goals Come First",
    description:
      "We don't push unnecessary features, inflate timelines, or recommend tools that don't fit. What we recommend is always in the interest of your business — even when that means a smaller scope.",
  },
];

const services = [
  {
    title: "Mobile App Development",
    description:
      "Android, iOS, and cross-platform apps using Flutter and React Native — fast, scalable, and built for real-world traffic.",
    icon: "/icons/about-whatwedo1.svg",
    href: "/mobile-app-development-chennai",
  },
  {
    title: "Web Application Development",
    description:
      "From business websites to large-scale web platforms — built on React, Next.js, and Node.js with performance, security, and SEO.",
    icon: "/icons/about-whatwedo2.svg",
    href: "/web-development-company-chennai",
  },
  {
    title: "AI Development",
    description:
      "Custom ML models, generative AI products, AI agents, chatbots, computer vision, and predictive analytics — built to integrate with your existing systems.",
    icon: "/icons/about-whatwedo3.svg",
    href: "/ai-development-company",
  },
  {
    title: "DevOps Consulting",
    description:
      "CI/CD pipelines, Kubernetes orchestration, Infrastructure as Code, and DevSecOps — helping teams ship faster with 99.95% uptime targets.",
    icon: "/icons/about-whatwedo4.svg",
    href: "/devops-consulting-services",
  },
  {
    title: "Cloud Consulting",
    description:
      "Migration, architecture, security, and cost optimisation across AWS, Azure, and GCP — with 40% average cloud cost savings.",
    icon: "/icons/aboutus-process1.svg",
    href: "/cloud-consulting-services",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, Google Ads, Meta Ads, social media, content strategy, and AI search optimisation (AEO/GEO) — focused on leads, not impressions.",
    icon: "/icons/aboutus-process2.svg",
    href: "/digital-marketing-company-chennai",
  },
];

const timeline = [
  {
    year: "2020",
    title: "Founded in Chennai",
    body: "Trimsel was founded with a small team of engineers in Chennai — focused on mobile app development and web platforms for local businesses and early-stage startups.",
    link: null,
  },
  {
    year: "2021",
    title: "First Major Client Projects",
    body: "Delivered EzyHelpers (home services app) and began work with early clients across Chennai. Built our first CI/CD pipelines and moved into DevOps consulting.",
    link: { label: "EzyHelpers", href: "/portfolio/ezyhelpers-case-study" },
  },
  {
    year: "2022",
    title: "Expanded Into AI & Cloud",
    body: "Added AI development and cloud consulting. Started the KarIOT smart water management project — our first AI + IoT engagement. Opened a second office in Tirunelveli.",
    link: { label: "KarIOT", href: "/portfolio/kariot-case-study" },
  },
  {
    year: "2023",
    title: "100+ Projects Milestone",
    body: "Crossed 100 delivered projects. Completed the Mocial platform migration (EC2 → EKS microservices). Built our digital marketing practice.",
    link: { label: "Mocial", href: "/portfolio/mocial-case-study" },
  },
  {
    year: "2024",
    title: "Enterprise & International Growth",
    body: "Started working with clients in the US and Middle East. Expanded into generative AI and AI agent development. Achieved 92% client retention rate.",
    link: null,
  },
  {
    year: "2025–2026",
    title: "200+ Projects & Growing",
    body: "Crossed 200 delivered projects. Added AEO/GEO (AI search optimisation) to digital marketing services. Continued scaling the team.",
    link: null,
  },
];

export default function AboutUs() {
  const posts = getFilteredPosts([], 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      {/* ── 1. HERO ── */}
      <section className="relative flex min-h-screen lg:min-h-[100dvh] items-center overflow-hidden bg-gradient-to-br from-[#dbeafe] via-[#e0f2fe] to-[#f0f9ff]">
        <div className="container mx-auto grid max-w-7xl gap-10 px-4 pt-24 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12 lg:pt-10 lg:pb-0">
          {/* LEFT */}
          <div className="relative z-20 text-center text-black md:text-left">
            <p className="text-md font-medium text-black mt-2 mb-4">
              <Link
                href="/"
                className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
              >
                Home
              </Link>
              {" • "}
              <span className="px-2 py-1 rounded-md">About Us</span>
            </p>

            <h1 className="mt-4 mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              About Trimsel — Software Development Company in Chennai, India
            </h1>

            <p className="mb-4 max-w-xl text-lg font-semibold text-[#1C75BC]">
              Building Products That Work. For Businesses That Can&apos;t Afford
              Ones That Don&apos;t.
            </p>

            <p className="mb-8 max-w-xl text-base text-gray-700 leading-relaxed">
              We started in Chennai in 2020 with one goal — help businesses stop
              struggling with outdated technology and start building digital
              products that actually perform. Six years, 200+ projects, and a 92%
              client retention rate later, we&apos;re still run by the same team,
              still based in Chennai, and still focused on the same thing —
              building technology that works in production, not just in
              presentations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
              >
                Talk to Our Team
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

          {/* RIGHT */}
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
            <Image
              src="/aboutus-Heroimage.svg"
              alt="Trimsel engineering team in Chennai"
              width={520}
              height={400}
              className="relative z-10 h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── 2. WHO WE ARE + STATS ── */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            WHO WE ARE
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-6">
            A Chennai-Based Engineering Team That Turns Ideas Into Products That
            Perform
          </h2>

          <div className="max-w-4xl mx-auto space-y-4 text-gray-700 font-medium leading-relaxed text-center">
            <p>
              We started in 2020 with a small team in Chennai and a simple
              observation — most businesses don&apos;t have a technology problem.
              They have a partner problem. They&apos;ve worked with agencies that
              overpromised and underdelivered, freelancers who disappeared
              mid-project, or offshore teams that built exactly what was
              specified but missed what was actually needed.
            </p>
            <p>
              Trimsel was built to be the alternative. We&apos;re an
              engineering-first company — our founders are developers, not
              salespeople. We&apos;ve grown to a team of 15+ across Chennai and
              Tirunelveli, working with startups finding product-market fit and
              established businesses rebuilding legacy systems. We&apos;ve
              delivered mobile apps, AI systems, web platforms, cloud
              infrastructure, and marketing campaigns for clients across India,
              the US, and the Middle East. We don&apos;t just build and leave —
              we stay involved, ask the hard questions, and make sure what we
              deliver actually works for your business and your users.
            </p>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo1.svg"
                alt="Projects Delivered"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                200+
              </div>
              <p className="text-sm font-medium text-gray-600">
                Projects Delivered
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo2.svg"
                alt="Client Retention"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                92%
              </div>
              <p className="text-sm font-medium text-gray-600">
                Client Retention Rate
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo3.svg"
                alt="Founded"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                Since 2020
              </div>
              <p className="text-sm font-medium text-gray-600">
                Building From Chennai
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/about-whatwedo4.svg"
                alt="In-House Team"
                width={50}
                height={50}
              />
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                100%
              </div>
              <p className="text-sm font-medium text-gray-600">
                In-House Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <Client />

      {/* ── 3. MISSION, VALUES & APPROACH ── */}
      <section className="bg-[#f5f7fb] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl text-gray-900 mb-4">
            What We Stand For — And How We Actually Work
          </h2>
          <p className="text-gray-600 font-medium max-w-3xl mb-12 leading-relaxed">
            Technology should make running your business easier, not harder.
            That&apos;s the principle behind everything we build at Trimsel.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="relative bg-blue-100 rounded-2xl p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut" />
              <Image
                src="/icons/our-value.svg"
                alt="Mission"
                width={44}
                height={44}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                Build technology that helps businesses operate better, reach more
                customers, and grow without being held back by the tools they
                depend on. Every project we take on is measured by one question
                — did it make the client&apos;s business genuinely better than it
                was before we started?
              </p>
            </div>

            {/* Values */}
            <div className="relative bg-blue-100 rounded-2xl p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut" />
              <Image
                src="/icons/our-value.svg"
                alt="Values"
                width={44}
                height={44}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Values
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                We believe good work starts with honesty. We tell you what&apos;s
                actually possible, give you realistic timelines, and never
                overpromise to win a project. If something isn&apos;t worth
                building, we&apos;ll tell you. If a cheaper approach works just
                as well, we&apos;ll recommend it. That&apos;s how we&apos;ve
                maintained a 92% client retention rate — by earning trust, not
                by locking clients into contracts.
              </p>
            </div>

            {/* Approach */}
            <div className="relative bg-blue-100 rounded-2xl p-8 shadow-sm">
              <div className="absolute top-0 right-0 w-16 h-12 bg-[#f5f7fb] clip-cut" />
              <Image
                src="/icons/our-approach.svg"
                alt="Approach"
                width={44}
                height={44}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Our Approach
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                We don&apos;t follow a fixed process because no two businesses are
                the same. We listen first, plan carefully, and build in stages —
                keeping you involved at every step so the end product matches
                what you actually need. Every project gets a dedicated team lead
                who stays your single point of contact from kickoff to launch and
                beyond.
              </p>
            </div>
          </div>

          <div className="mt-10">
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
      </section>

      {/* ── 4. WHAT DRIVES US — FeaturesGrid ── */}
      <FeaturesGrid
        eyebrow="WHAT DRIVES US"
        heading="What Keeps Us Doing Our Best Work"
        description="We use modern tools and proven methods — not because they're trendy, but because they deliver better results."
        features={whatDrivesUs}
        columns={3}
        sectionClass="bg-white"
      />

      {/* ── 5. WHAT WE DO — Service cards with links ── */}
      <section className="bg-[#f5f7fb] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            WHAT WE DO
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-3">
            Everything Your Business Needs to Build, Launch, and Grow Digitally
          </h2>
          <p className="text-center text-gray-600 font-medium max-w-2xl mx-auto mb-12">
            Every business has a different challenge. We have the engineering
            depth and marketing expertise to help with all of it.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1C75BC] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm flex-1">
                  {service.description}
                </p>
                <span className="text-[#1C9ACF] text-sm font-semibold inline-flex items-center gap-1">
                  Learn more
                  <Image
                    src="/Home/right-arrow.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OUR JOURNEY — Timeline ── */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-12">
            From Two Founders to a Full-Service Engineering Team
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#1C75BC]/20 hidden sm:block" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={index} className="relative sm:pl-16">
                  {/* Year circle */}
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-[#1C75BC] text-white text-xs font-bold items-center justify-center text-center leading-tight shrink-0">
                    {item.year.includes("–") ? (
                      <span className="text-[9px]">{item.year}</span>
                    ) : (
                      item.year
                    )}
                  </div>

                  <div className="bg-[#f5f7fb] rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sm:hidden inline-block bg-[#1C75BC] text-white text-xs font-bold px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {item.link ? (
                        <>
                          {item.body.split(item.link.label)[0]}
                          <Link
                            href={item.link.href}
                            className="text-[#1896cd] underline underline-offset-2 font-semibold"
                          >
                            {item.link.label}
                          </Link>
                          {item.body.split(item.link.label)[1]}
                        </>
                      ) : (
                        item.body
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. OUR OFFICES ── */}
      <section className="bg-[#f5f7fb] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-12">
            Where We Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Chennai */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1C75BC] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1C75BC]">
                    Headquarters
                  </p>
                  <h3 className="font-semibold text-gray-900">
                    Chennai Office
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed text-sm mb-2">
                No.21-B 5th Cross Street, South Phase Thiru VI KA Industrial
                Estate, Indira Nagar, Guindy, Chennai, Tamil Nadu — 600032
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Our primary engineering and delivery office.
              </p>
              <a
                href="https://maps.google.com/?q=Trimsel+Softwares+Guindy+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1C9ACF] text-sm font-semibold hover:underline"
              >
                Get Directions
                <Image
                  src="/Home/right-arrow.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </a>
            </div>

            {/* Tirunelveli */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#27AAE1] flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#27AAE1]">
                    Branch Office
                  </p>
                  <h3 className="font-semibold text-gray-900">
                    Tirunelveli Office
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed text-sm mb-2">
                1st Floor, Crystal Plaza State Bank, 138/2, NGO B Colony, New
                Colony, Tirunelveli, Tamil Nadu — 627007
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Supports development and QA operations.
              </p>
              <a
                href="https://maps.google.com/?q=Crystal+Plaza+Tirunelveli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1C9ACF] text-sm font-semibold hover:underline"
              >
                Get Directions
                <Image
                  src="/Home/right-arrow.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-700 font-medium">
            <a
              href="mailto:contact@trimsel.com"
              className="flex items-center gap-2 hover:text-[#1C9ACF] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#1C75BC]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              contact@trimsel.com
            </a>
            <a
              href="tel:+917200841581"
              className="flex items-center gap-2 hover:text-[#1C9ACF] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#1C75BC]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 72008 41581
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. MEET THE TEAM ── */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#1C75BC] text-center mb-3">
            OUR TEAM
          </p>
          <h2 className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mb-3">
            The People Behind Your Product
          </h2>
          <p className="text-center text-gray-600 font-medium max-w-2xl mx-auto mb-12">
            Every project at Trimsel is led by the same engineers and
            strategists who scope it. No bait-and-switch. No rotating junior
            developers after the kickoff call.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                initials: "BT",
                name: "Balaji T K",
                title: "Founder & Director",
                description:
                  "15+ years of industry experience across development, DevOps, infrastructure, and AI/ML — setting the technical direction and staying involved in architecture decisions across every major project.",
              },
              {
                initials: "SP",
                name: "Selva Prakash G",
                title: "Full Stack Developer",
                description:
                  "Leads frontend and backend development across React, Next.js, and Node.js — building the web platforms and applications our clients depend on daily.",
              },
              {
                initials: "RM",
                name: "RajaMani",
                title: "Mobile App Developer",
                description:
                  "Builds native and cross-platform mobile apps using Flutter and React Native — from UI implementation to App Store deployment and performance optimisation.",
              },
              {
                initials: "V",
                name: "Vincent",
                title: "SEO Analyst",
                description:
                  "Drives organic search visibility through technical SEO audits, keyword strategy, content optimisation, and performance tracking across Google Search Console and analytics platforms.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-5 items-start"
              >
                <div className="shrink-0 w-16 h-16 rounded-full bg-[#1C75BC] text-white flex items-center justify-center text-lg font-bold">
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{member.name}</p>
                  <p className="text-blue-600 text-sm font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <Testimonial />

      {/* ── 10. CONTACT FORM ── */}
      <Contactform
        eyebrow="WORK WITH US"
        heading="Ready to Build Something That Actually Works?"
        subheading="Whether you need a product built from scratch, an existing system improved, or a marketing strategy that brings in real customers — tell our team what you're working with."
        formTitle="Start a Conversation"
        defaultService=""
      />

      {/* ── 11. BLOG ── */}
      <LatestInsights posts={posts} />
    </>
  );
}
