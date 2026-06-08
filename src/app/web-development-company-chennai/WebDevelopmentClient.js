"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import GetInTouchBanner from "@/components/GetInTouchBanner";
import LatestInsights from "@/components/LatestInsights";
import Faq from "@/components/Faq";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { caseStudies } from "@/data/caseStudies";
import FeaturesGrid from "@/components/FeaturesGrid";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";
import TechStackTabs from "@/components/TechStackTabs";
import Testimonial from "@/components/testimonial";
import IndustriesWeServe from "@/components/IndustriesWeServe";

const services = [
  {
    title: "UI/UX Design for Web",
    icon: "/web-whatwedo1.svg",
    description: "We design interfaces that make sense to real users clear navigation, logical flows, and mobile-first layouts tested against real user behaviour. Every design decision targets conversion and usability reducing drop-off and increasing the time visitors spend engaging with your product",
  },
  {
    title: "Front-End Development",
    icon: "/web-whatwedo2.svg",
    description: "We build fast, responsive frontends using React, Next.js, Vue.js, and Angular optimised for Core Web Vitals, SEO performance, and WCAG accessibility standards. Every interface is tested across devices and browsers before a single page goes live.",
  },
  {
    title: "Backend Web Development",
    icon: "/web-whatwedo3.svg",
    description: "We build secure, scalable backend systems using Node.js, Python, and PHP — handling authentication, business logic, database management, and third-party integrations reliably, whether you're serving 100 users or 100,000",
  },
  {
    title: "API Development & Integration",
    icon: "/web-whatwedo4.svg",
    description: "We design and build RESTful and GraphQL APIs that connect your web platform to third-party tools, mobile apps, payment gateways, and CRMs enabling clean, consistent data flow across your entire stack. Every API is documented, versioned, and secured.",
  },
  {
    title: "CMS Web Development",
    icon: "/web-whatwedo5.svg",
    description: "We build and configure CMS platforms WordPress, Headless CMS solutions like Contentful and Sanity, and custom builds so your team can update pages, publish content, and manage media without raising a development ticket every time.",
  },
  {
    title: "Ecommerce Web Development",
    icon: "/web-whatwedo6.svg",
    description: "We deliver complete e-commerce solutions WooCommerce, Shopify, and custom platforms covering product catalogue setup, payment gateway integration, cart logic, order management, and conversion-optimised checkout. Every build is tested under peak traffic conditions before launch.",
  },
  {
    title: "DevOps for Web Projects",
    icon: "/web-whatwedo7.svg",
    description: "We set up CI/CD pipelines, staging and production environments, automated testing workflows, and cloud hosting on AWS or GCP so deployments are reliable, rollbacks are safe, and your development cycle keeps moving without your production environment becoming a risk.",
  },
  {
    title: "Website Testing & QA",
    icon: "/web-whatwedo8.svg",
    description: "We run functional testing, cross-browser checks, mobile compatibility, performance audits under load, security vulnerability scanning, and regression testing before every launch so what goes live is exactly what you approved in review.",
  },
  {
    title: "24/7 Maintenance & Support",
    icon: "/web-whatwedo9.svg",
    description: "After launch, we monitor uptime, apply security patches, update plugins and dependencies, manage hosting renewals, and respond to performance issues around the clock so your website never goes unmanaged. You get a dedicated support contact and agreed response SLAs, not a shared inbox.",
  },
];

const features = [
  {
    title: "Skip Recruitment - Get a Full Team Immediately",
    description: "Hiring and training an in-house team of frontend, backend, UI/UX, and QA professionals takes 3–6 months and significant overhead. With Trimsel you skip the recruitment cycle entirely our team of experienced React, Next.js, Node.js, and WordPress developers is ready to start on your project within days, not months.",
    icon: "/webservice1.svg",
  },
  {
    title: "Faster Time to Market",
    description: "Our agile delivery process, pre-built component libraries, and structured development workflows cut typical web project timelines by 40–60% compared to an in-house team building from scratch. A basic business website takes 2–4 weeks. A complex web application takes 8–16 weeks. You get working demos every two weeks throughout.",
    icon: "/webservice2.svg",
  },
  {
    title: "Experienced Professionals on Every Project",
    description: "You get senior developers and designers who have shipped real products across multiple industries not juniors practising on your budget. Every specialist is applied only when your project needs their skills, so you're never paying for idle capacity.",
    icon: "/webservice3.svg",
  },
  {
    title: "Lower Cost Than Hiring In-House",
    description: "Working with a professional web development company in Chennai means you avoid the overhead of salaries, infrastructure, and software licenses  while getting output that meets enterprise-grade standards.",
    icon: "/webservice4.svg",
  },
];

const components = [
  {
    title: "Your Business Runs 24/7 — Your Platform Should Too",
    desc: "Your web platform takes enquiries, processes orders, delivers product information, and captures leads around the clock even outside business hours, weekends, and holidays. No additional staffing cost, no downtime, no missed opportunities.",
    icon: "/we-need-1.svg",
  },
  {
    title: "Automate the Work Your Team Shouldn't Be Doing Manually",
    desc: "Custom web applications replace repetitive manual processes data entry, report generation, invoice creation, approval workflows with automated systems that reduce errors, save hours weekly, and let your team focus on work that actually moves the business forward.",
    icon: "/we-need-2.svg",
  },
  {
    title: "Multi-layer Security",
    desc: "We build security into every layer of your web application encrypted data handling, role-based access controls, OWASP-compliant code practices, and regular vulnerability scanning. Your customers' data and your business reputation are protected by architecture, not afterthoughts.",
    icon: "/web-need-3.svg",
  },
  {
    title: "Built to Grow With Your Business",
    desc: "Every web application we build is designed to scale add new features, expand your user base, integrate new tools, or enter new markets without triggering a full rebuild. We plan for growth from the architecture stage so scaling up is a configuration change, not a rewrite.",
    icon: "/web-need-4.svg",
  },
];

const servicesprovider = [
  {
    title: "Startups & MVPs",
    description:
      "You need a working product fast validated, functional, and ready for real users. We help startups go from idea to live web product in 4–8 weeks with agile sprints and lean architecture that doesn't lock you into decisions you'll regret at scale.",
  },
  {
    title: "Growing SMEss",
    description:
      "Your website or web application needs to keep up with your business more traffic, more products, more users, more integrations. We build web platforms designed for growth so you're not facing a full rebuild every 18 months as your business evolves.",
  },
  {
    title: "Enterprise Teams",
    description:
      "Your web platform needs to integrate with existing enterprise systems, meet compliance and security standards, and support complex workflows across departments. We build enterprise-grade web applications with SSO, role-based access control, audit logging, and API-first architecture.",
  },
  {
    title: "Agencies & White-Label Partners",
    description:
      "You need a reliable development team behind the scenes one that delivers consistently without your clients ever knowing you outsourced. We provide white-label web development for agencies your brand, our engineering, same quality standards, full confidentiality.",
  },
];

const items = [
  {
    title: "Pre-Discovery Phase",
    icon: "/web-approach1.svg",
    points: [
      "Stakeholder alignment and business goal mapping understanding what success looks like for your project",
      "Review of existing systems, platforms, and current pain points",
      "High-level scope definition, feasibility assessment, and budget estimation",
      "Team onboarding, responsibility allocation, and communication setup",
    ],
  },
  {
    title: "Discovery Phase",
    icon: "/web-approach2.svg",
    points: [
      "User research, audience analysis, and competitor benchmarking",
      "Detailed technical requirements and acceptance criteria documentation",
      "Architecture planning and technology selection. React, Next.js, Node.js, WordPress, or headless CMS based on project needs",
      "Risk identification, dependency mapping, and sprint-by-sprint project roadmap",
    ],
  },
  {
    title: "Design Phase",
    icon: "/web-approach3.svg",
    points: [
      "Information architecture, sitemap structure, and user flow mapping",
      "Wireframes for structural feedback before visual design begins",
      "High-fidelity UI design with brand-aligned visual language mobile-first and responsive",
      "Interactive prototypes for client review and testing design sign-off required before a line of code is written",
    ],
  },
  {
    title: "Development & QA",
    icon: "/web-approach4.svg",
    points: [
      "Two-week agile sprints with working demos at the end of every cycle you see real progress, not just status updates",
      "Code reviews, unit testing, integration testing, and structured QA after every sprint",
      "Staging environment deployed for client testing and feedback before anything goes to production",
      "Performance audits under load, security vulnerability scanning, and cross-browser compatibility checks before release",
    ],
  },
  {
    title: "Launch & Post-Launch",
    icon: "/web-approach5.svg",
    points: [
      "Production deployment with environment configuration, DNS setup, SSL certificates, and CDN activation",
      "First 48–72 hours of active monitoring crash reports, performance anomalies, and user behaviour tracking",
      "Full documentation handover codebase, architecture, deployment procedures, and admin training for your team",
      "Ongoing maintenance and support plan with agreed SLAs bug fixes, security patches, OS updates, and feature enhancements",
    ],
  },
];

const techTabs = [
  {
    name: "FRONTEND",
    tools: [
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "JavaScript", icon: "/icons/js.png" },
      { name: "React", icon: "/icons/react.png" },
      { name: "Angular", icon: "/icons/angular.png" },
    ],
  },
  {
    name: "BACKEND",
    tools: [
      { name: "Node.js", icon: "/icons/node.png" },
      { name: "Express", icon: "/icons/express.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "Java", icon: "/icons/java.png" },
    ],
  },
  {
    name: "PLATFORMS",
    tools: [
      { name: "AWS", icon: "/icons/aws.png" },
      { name: "Azure", icon: "/icons/azure.png" },
      { name: "Docker", icon: "/icons/docker.png" },
    ],
  },
  {
    name: "DATABASE",
    tools: [
      { name: "MongoDB", icon: "/icons/mongodb.png" },
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "PostgreSQL", icon: "/icons/postgres.png" },
    ],
  },
  {
    name: "UI/UX",
    tools: [
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "Adobe XD", icon: "/icons/xd.png" },
      { name: "Sketch", icon: "/icons/sketch.png" },
    ],
  },
];

export default function WebDevelopment({ posts = [] }) {
  const [active, setActive] = useState(0);

  return (
    <main>
      <Header />

      <section className="relative overflow-hidden bg-[#E4F3FF] min-h-screen lg:min-h-[100dvh] flex items-center">
        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-12 lg:pt-10 lg:pb-0">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start">
            {/* BREADCRUMB */}
            <p className="text-md md:text-base font-medium text-black mt-2">
              <Link
                href="/"
                className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
              >
                Home
              </Link>

              {" • "}

              <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                Web Development Company
              </span>
            </p>

            <h1 className="mt-4 text-4xl font-bold text-black leading-tight sm:text-5xl">
              Web Development Company in Chennai
            </h1>

            <p className="max-w-xl mt-6 text-lg">
              Trimsel builds custom websites and web applications for startups,
              SMEs, and enterprises that need more than just an online presence.
              From business portals and e-commerce platforms to scalable web
              applications. We use React, Next.js, Node.js, and WordPress to
              build products that perform under real-world conditions. Every
              project is scoped around your business goals, not a templated
              shortcut.
            </p>

            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-md bg-gradient-to-r from-[#29B375] to-[#2E70C3] text-white font-medium hover:scale-105 transition-all shadow-lg mt-6"
              >
                Get a Free Web Consultation
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center overflow-hidden py-8 lg:py-0 lg:mt-12">
            {/* Glow blob */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-200 opacity-50 blur-3xl" />

            {/* Scale wrapper */}
            <div className="flex items-center justify-center scale-[0.65] -my-24 origin-center sm:scale-[0.85] sm:-my-14 lg:scale-100 lg:my-0 xl:scale-110">
              {/* Outer container — fixed size, never changes */}
              <div className="relative h-[540px] w-[540px]">
                {/* Web1 — dashboard/card, top-right */}
                <div className="absolute top-8 left-28 z-10 h-[75%] w-[95%]">
                  <Image
                    src="/Web1.svg"
                    alt="Web development company in Chennai — custom websites and web applications built with React, Next.js, and Node.js"
                    fill
                    sizes="(max-width: 768px) 95vw, 513px"
                    className="object-contain opacity-90 drop-shadow-lg"
                    priority
                  />
                </div>

                {/* Web2 — robot, bottom-left */}
                <div className="absolute bottom-28 left-12 z-20 h-[70%] w-[70%]">
                  <Image
                    src="/Web2.svg"
                    alt="Web development company in Chennai — custom websites and web applications built with React, Next.js, and Node.js"
                    fill
                    sizes="(max-width: 768px) 70vw, 378px"
                    className="object-contain drop-shadow-2xl animate-shake"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 md:px-10">
        <div>
          <h2 className="mb-8 text-2xl text-center font-semibold leading-tight sm:text-3xl md:text-4xl">
            What We Build And Why It Works For Your Business
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            {/* Paragraph */}
            <p className="mt-6 max-w-3xl mx-auto text-left text-gray-800 font-medium">
              A website is often the first meaningful interaction a potential
              customer has with your business and it needs to do more than exist
              online. It should load in under 3 seconds, communicate your value
              clearly on every device, and guide visitors toward a specific
              action. We work with founders, product teams, and enterprise
              stakeholders across industries to build websites and web
              applications that are well-engineered, easy to manage, and built
              to last beyond the first year of launch.
            </p>

            <p className="mt-4 max-w-3xl mx-auto text-left text-gray-800 font-medium">
              We don't hand off projects to junior developers or offshore them
              after scoping your project is handled by the same team from
              kickoff to go-live. That team works across the full web
              development stack: React and Next.js for fast, SEO-friendly
              frontends, Node.js and Python for robust backends, PostgreSQL and
              MongoDB for data management, and WordPress or headless CMS for
              content-driven sites.
              <br />
              <br />
              We've delivered 180+ web projects for clients across SaaS,
              FinTech, e-commerce, healthcare, and professional services with a
              95% on-time delivery rate. The businesses we work with don't just
              get a website,they get a web presence that works as hard as they
              do.
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-gradient-to-br from-[#3b3be0] to-[#6a4df4] text-white p-8 md:p-10 rounded-2xl shadow-xl max-w-lg w-full min-h-[440px] mx-auto">
            <div className="mt-6">
              <h5 className="text-xl font-bold mb-2">START YOUR PROJECT</h5>

              <h4 className="text-lg md:text-xl font-semibold leading-snug">
                Ready to Build or Rebuild Your Website?
              </h4>

              <p className="text-md font-medium mt-2">
                Tell us what you need. We'll get back to you within one business
                day with a clear plan.
              </p>

              {/* Inputs */}
              <div className="mt-6 space-y-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white/70 text-white outline-none font-medium"
                />

                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white/70 text-white outline-none font-medium"
                />
              </div>

              {/* Button */}
              <Link
                href="/"
                className="mt-5 w-full bg-white text-[#3b3be0] py-2.5 rounded-md text-md font-medium inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition"
              >
                Book A Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceCardsGrid
        eyebrow="WHAT WE DO"
        heading="Full-Stack Web Design and Development Services"
        description="Trimsel offers end-to-end web development services from early-stage planning and UI design through to backend engineering, integrations, and post-launch support. Whether you need a customer-facing website or a complex internal platform, our team handles the complete build without outsourcing any part of it."
        services={services}
        dark={true}
      />

      <FeaturesGrid
        eyebrow="WHY OUTSOURCE WEB DEVELOPMENT"
        heading="Why Businesses Outsource Web Development to Trimsel"
        description="Building and maintaining a web development team in-house is expensive, slow to scale, and hard to keep current with changing technology. Here's why businesses choose to work with Trimsel instead."
        features={features}
        columns={4}
        sectionClass="bg-gradient-to-br from-[#eef3f8] to-[#f7f4ef]"
      />

      <section className="px-4 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto bg-[#dbe6ee] rounded-3xl p-8 md:p-12 space-y-6">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Your Business Needs a Web Application?
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <p className="mt-5 text-gray-800 font-medium max-w-3xl leading-relaxed">
                Most businesses today don't just need a website they need a
                platform that actively supports how they operate, sell, and
                serve customers. A well-built web application reduces manual
                work, connects your systems, and gives your team the tools to
                make faster, better decisions every day.
              </p>

              {/* BUTTON */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 mb-4 md:mb-4 bg-[#1ea7d7] hover:bg-[#1696c4] text-white px-6 py-3 rounded-md text-md font-medium transition w-fit whitespace-nowrap"
              >
                Talk to Our Web Team
                <Image
                  src="/Home/right-arrow.svg"
                  width={16}
                  height={16}
                  alt="RightArrow"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-2 gap-6">
            {components.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-sm"
              >
                {/* ICON BOX */}
                <div className="w-10 h-10 bg-[#e6eef5] rounded-lg flex items-center justify-center mb-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-md font-medium text-gray-800 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f5f7fa] to-[#e4edf5] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Top Tag */}
          <div>
            <h3 className="mt-2 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              WHO WE BUILD FOR
            </h3>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4">
            Web Development for Every Stage of Business Growth
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-900 font-medium md:text-base">
            From first-time founders launching an MVP to enterprise teams
            modernising legacy platforms. We've built web products for
            businesses at every stage.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {servicesprovider.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-[#01AAEC] via-[#0057FF] to-[#FF0000] bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-800 text-md font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative text-white py-16 md:py-20 px-4 sm:px-6"
        style={{
          backgroundImage: "url('/web-approach.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <h2 className="text-left text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Our Web Development Process From Discovery to Deployment
          </h2>

          <p className="max-w-3xl text-left font-medium leading-relaxed text-gray-200">
            Every web project follows the same five-phase process — designed to
            eliminate guesswork, keep you in control of every decision, and
            deliver a product that works exactly as intended at launch and
            continues to perform long after.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="max-w-3xl mt-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="border-b border-white/30 pb-6">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setActive(active === index ? null : index)}
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <div className="shrink-0">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={25}
                          height={25}
                          className="text-blue-400"
                        />
                      </div>
                      <h3 className="font-medium text-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="shrink-0 ml-2">
                      <Image
                        src="/icons/add-icon.svg"
                        width={20}
                        height={20}
                        alt="RightArrow"
                      />
                    </div>
                  </div>

                  <div
                    className={`ml-8 overflow-hidden transition-all duration-300 ${
                      active === index
                        ? "mt-4 max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.points && (
                      <ul className="text-sm text-white-300 font-medium space-y-2">
                        {item.points.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="WEB SOLUTIONS"
        heading="Need a Website That Converts?"
        description="From landing pages to complex web applications, our React and Next.js experts build fast, scalable solutions. Let's talk about your project."
        ctaText="Talk to Our Experts"
        ctaLink="/contact-us"
        image="/getintouchweb.svg"
        imageAlt="Web development contact"
        bgClass="bg-gradient-to-r from-[#ECE1FF] to-[#E6D5FF]"
      />

      <TechStackTabs
        eyebrow="Tools and Technology"
        heading="The Web Development Stack We Use Chosen for Your Project, Not Just Ours"
        description="We choose tools based on what genuinely fits your project's scale, performance needs, and long-term maintainability not what's trending or easiest to bill. Here's the stack our web development team works with."
        tabs={techTabs}
      />

      {/* Getintouch */}
      <GetInTouchBanner
        eyebrow="WEB SOLUTIONS"
        heading="Ready to Build a Website That Works for Your Business?"
        description="Tell our web development team what you need — whether it's a business website, a complex web application, or an e-commerce platform — and we'll give you a realistic scope, honest timeline, and clear plan to build it right."
        ctaText="Talk to Our Web Team"
        ctaLink="/contact-us"
        image="/getintouchweb.svg"
        imageAlt="Web development contact"
        bgClass="bg-gradient-to-r from-[#ECE1FF] to-[#E6D5FF]"
      />

      <CaseStudyCarousel
        studies={[caseStudies.mocial, caseStudies.ezyhelpers, caseStudies.kariot]}
      />

      <Client />

      <Contactform
        eyebrow="START YOUR WEB PROJECT"
        heading="Need a Web Application That Performs?"
        subheading="Tell us about your web project. Our team builds fast, scalable web applications using React, Next.js, and Node.js — from simple websites to complex enterprise platforms."
        formTitle="Discuss Your Web Project"
        defaultService="Web Dev"
      />

      <Testimonial />

      <IndustriesWeServe />

      <Faq />

      <LatestInsights posts={posts} />

    </main>
  );
}
