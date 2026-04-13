"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Testimonial from "@/components/testimonial";

const features = [
  {
    icon: "/icons/Reliable Quality.svg",
    title: "App Quality & Performance Testing",
    description:
      "Every app we build undergoes functional testing, performance testing under load, and security validation before submission. We don't release apps with known bugs, every build meets a defined quality bar and performs consistently under real-world usage conditions.",
  },
  {
    icon: "/icons/Cost Efficient.svg",
    title: "Cost-Effective App Development",
    description:
      "We help you prioritise the features that matter for launch and phase the rest avoiding unnecessary complexity and reducing long-term maintenance costs. Our fixed-fee and T&M models both come with transparent cost tracking so there are no budget surprises.",
  },
  {
    icon: "/icons/Build by experts.svg",
    title: "Expert Mobile App Developers",
    description:
      "Our mobile team includes Flutter specialists, native iOS and Android developers, React Native engineers, and UI/UX designers who have shipped production apps, not just portfolio projects. Every solution is tailored to your specific business workflows and user expectations.",
  },
  {
    icon: "/icons/Transparent process.svg",
    title: "Agile & Transparent Development",
    description:
      "You get a shared project board, weekly sprint demos, and direct access to your developers, not status updates filtered through a project manager. You always know project status, milestones, and what's coming next without having to chase for updates.",
  },
  {
    icon: "/icons/Customer Engagement.svg",
    title: "Apps Built for User Retention",
    description:
      "An app that gets downloaded but not used is a failed product. We design for engagement from the first screen, intuitive onboarding, push notifications, personalised experiences, and interaction patterns that reduce drop-off and bring users back. Our apps average 4.8★ across the App Store and Google Play.",
  },
  {
    icon: "/icons/Quick time to Market.svg",
    title: "Fast App Development & Delivery",
    description:
      "Most MVPs ship within 6–10 weeks. We achieve this through agile sprints, parallel design and development tracks, and CI/CD pipelines that automate testing and deployment, helping your business launch ahead of competitors without cutting corners on quality.",
  },
];

const benefits = [
  {
    icon: "/icons/help-1.svg",
    text: "Validate your vision and provide a clear roadmap",
  },
  {
    icon: "/icons/help-2.svg",
    text: "Innovate solutions for complex problems",
  },
  {
    icon: "/icons/help-3.svg",
    text: "Deliver products at 10x speed and maximize efficiency",
  },
  {
    icon: "/icons/help-4.svg",
    text: "Adapt to the latest technologies and provide a future-proof product",
  },
  {
    icon: "/icons/help-5.svg",
    text: "Ensure product scalability, security, and modularity",
  },
  {
    icon: "/icons/help-6.svg",
    text: "World-class support during and after project completion",
  },
];

const services = [
  {
    icon: "/icons/mobile-service-1.svg",
    title: "Android App Development",
    description:
      "We build native Android apps using Kotlin, reliable, fast, and optimised for the Android ecosystem's wide range of devices, screen sizes, and OS versions. Every app focuses on usability, stability, and long-term scalability with rigorous compatibility testing across devices before Google Play submission.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-2.svg",
    title: "IOS App Development",
    description:
      "We build native iOS apps using Swift and Xcode, designed to meet Apple's performance standards with full access to iOS-specific capabilities like Face ID, Apple Pay, ARKit, and HealthKit. Every app is tested across current and legacy iPhone and iPad models, delivering consistent experiences for premium device users.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-3.svg",
    title: "Cross-Platform App Development",
    description:
      "We build cross-platform apps using Flutter and React Native, delivering native-like performance on both iOS and Android from a single codebase. This approach reduces development time and overall project cost without sacrificing user experience. Best suited for startups and businesses that need to reach both platforms simultaneously.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-4.svg",
    title: "UI/UX Design for Mobile Apps",
    description:
      "We design mobile interfaces that feel intuitive from the first tap built on user research, tested interaction patterns, and platform-specific guidelines including iOS Human Interface Guidelines and Android Material Design. Every interface we design prioritises clear navigation, fast interactions, and accessibility compliance across all screen sizes.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-5.svg",
    title: "Enterprise Mobile Applications",
    description:
      "We build internal business applications for enterprises that need secure, scalable tools for field teams, operations management, and cross-department coordination. Enterprise apps from Trimsel include admin dashboards, role-based access control, SSO integration, offline functionality, and compliance with corporate MDM policies built to handle real operational complexity.",
    href: "#",
  },
  {
    icon: "/icons/mobile-service-6.svg",
    title: "App Maintenance and Support",
    description:
      "After launch, your app needs ongoing attention, OS updates break features, user behaviour reveals new requirements, and growing load needs active management. Our post-launch support covers bug fixes, OS compatibility updates, performance monitoring, feature enhancements, and App Store and Google Play re-submissions keeping your application secure, stable, and aligned with evolving business needs. You get a dedicated point of contact, not a support queue.",
    href: "#",
  },
];

const tabs = [
  "NATIVE MOBILE ARCHITECTURES",
  "CROSS-PLATFORM AND HYBRID ENGINES",
  "BACKEND AND MICROSERVICES",
];

const toolsData = {
  "NATIVE MOBILE ARCHITECTURES": [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "Angular", icon: "/icons/angular.png" },
  ],

  "CROSS-PLATFORM AND HYBRID ENGINES": [
    { name: "Node.js", icon: "/icons/node.png" },
    { name: "Express", icon: "/icons/express.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "Java", icon: "/icons/java.png" },
  ],

  "BACKEND AND MICROSERVICES": [
    { name: "AWS", icon: "/icons/aws.png" },
    { name: "Azure", icon: "/icons/azure.png" },
    { name: "Docker", icon: "/icons/docker.png" },
  ],
};

export default function MobileAppDevelopment() {
  const [activeTab, setActiveTab] = useState("NATIVE MOBILE ARCHITECTURES");

  return (
    <main>
      <Header />
      <section className="bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto mt-6 md:mt-10 px-4 py-8 sm:py-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 md:px-12 lg:px-20">
            {/* LEFT CONTENT */}
            <div className="relative z-20 text-center md:text-left mb-4 space-y-4">
              {/* BREADCRUMB */}
              <p className="text-md md:text-base font-medium text-black mb-4">
                <Link
                  href="/"
                  className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]"
                >
                  Home
                </Link>

                {" • "}

                <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                  Mobile App Development
                </span>
              </p>

              <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
                Mobile App Development
                <br />
                Company in Chennai
              </h1>

              <p className="mb-8 max-w-xl text-base sm:text-lg">
                We help businesses turn app ideas into working mobile products
                that customers actually use Android, iOS, and Flutter
                applications built to support daily operations, scale with
                growth, and perform under real-world conditions. From MVP
                validation to enterprise-grade apps, our mobile app development
                team in Chennai covers UI/UX design, development, App Store
                deployment, and post-launch support under one roof.
              </p>

              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#29B375] to-[#2E70C3] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get a Mobile App Consultation
                  <Image
                    src="/Home/right-arrow.svg"
                    width={20}
                    height={20}
                    alt="RightArrow"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative flex justify-center">
              {/* Background Glow */}
              <div className="absolute h-[240px] w-[240px] rounded-full bg-blue-200 opacity-50 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px]" />

              <div className="relative mt-4 flex h-[360px] w-full max-w-[420px] items-center justify-center sm:h-[460px] md:h-[520px]">
                {/* Main Mobile */}
                <Image
                  src="/Mobile1.svg"
                  alt=" Mobile app development company in Chennai, custom iOS, Android and cross-platform apps"
                  width={520}
                  height={520}
                  className="relative z-10 h-auto w-[260px] sm:w-[320px] md:w-[380px]"
                  priority
                />

                {/* Center UI */}
                <Image
                  src="/Mobile3.svg"
                  alt=" Mobile app development company in Chennai, custom iOS, Android and cross-platform apps"
                  width={280}
                  height={320}
                  className="absolute left-1/2 top-1/2 z-20 h-auto w-[170px] -translate-x-1/2 -translate-y-[46%] zoom-animation sm:w-[210px] md:w-[250px]"
                  priority
                />

                {/* Overlay Graphic */}
                <Image
                  src="/Mobile2.svg"
                  alt=" Mobile app development company in Chennai, custom iOS, Android and cross-platform apps"
                  width={280}
                  height={340}
                  className="absolute z-30 h-auto w-[180px] sm:w-[220px] md:w-[260px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16"
        style={{
          background:
            "radial-gradient(circle at center, #E3EFFF 10%, #DDD7D7 90%)",
        }}
      >
        <div className="mb-12">
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            WHAT WE DO
          </h3>

          <h2 className="mt-2 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Custom Mobile App Development Services,Built Around Your Business
          </h2>
        </div>
        <p className="px-10 text-center text-black font-medium leading-relaxed">
          At Trimsel, we don't start with code, we start with your users, your
          workflows, and your long-term goals. Instead of jumping straight into
          development, we work closely with you to define the right approach
          before building anything. The result is a mobile app your customers
          actually want to use and your team can depend on daily.
        </p>

        <div className="mt-6 ml-6 px-10 mx-auto">
          <h4 className="text-lg font-semibold text-[#1C75BC] mb-4 text-left">
            We help you:
          </h4>

          <ul className="space-y-3 text-black font-medium list-disc list-inside">
            <li>
              Define the right mobile app strategy, platform choice, feature
              prioritisation, and go-to-market approach
            </li>
            <li>
              Build native Android and iOS apps or cross-platform solutions
              using Flutter and React Native
            </li>
            <li>
              Design intuitive interfaces that reduce friction and keep users
              engaged session after session
            </li>
            <li>
              Develop secure backend systems and third-party integrations using
              Node.js, PostgreSQL, and AWS
            </li>
            <li>
              Launch successfully on the App Store and Google Play with store
              listing optimisation included
            </li>
            <li>
              Upgrade or rebuild existing mobile applications that have outgrown
              their original architecture
            </li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE TRIMSEL*/}
      <section className="bg-white py-16">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="mb-12">
            <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              WHY CHOOSE TRIMSEL
            </h3>
            <h2 className="mt-2 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Six Reasons Our Clients Trust Us to Build Their Mobile Apps
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
              From first prototype to App Store launch here's what makes working
              with Trimsel different from hiring just another development
              agency.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="px-3 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blue-100 rounded-lg p-4 hover:shadow-md hover:shadow-blue-100 transition-shadow duration-200 cursor-default"
              >
                {/* Icon + Heading */}
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />

                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="mt-4 text-md text-gray-700 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF5F8] px-10 py-16">
        <div className="mb-8">
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            HOW WE HELP?
          </h3>
          <h2 className="mt-2 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            What You Get When You Build Your App With Trimsel
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            From idea validation to post-launch improvements our mobile app
            development team supports your project at every stage with practical
            guidance and reliable execution.
          </p>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Image ONLY */}
          <div className="flex-1 flex items-center justify-center -ml-16">
            <Image
              src="/Help-you.svg"
              alt="How we can help illustration"
              width={680}
              height={560}
              className="object-contain w-full max-w-xl"
            />
          </div>

          {/* Right Side - Text + Benefit Cards */}
          <div className="flex-1 flex flex-col gap-4 ml-16">
            <div className="flex flex-col gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="shrink-0">
                    <Image
                      src={benefit.icon}
                      alt={benefit.text}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-md text-gray-700 font-medium leading-snug">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0efeb] px-10 py-16">
        <div className="mb-8">
          <h3 className="mt-4 text-2xl font-semibold text-center leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            Our Mobile App Development Services
          </h3>
          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            The Full Spectrum of Mobile App Development Services We Offer
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Whether you need a native iOS app, an Android app, a cross-platform
            solution, an enterprise mobile tool, or support for an existing
            product our team has the capability and experience to deliver it.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Top: Icon */}
              <div>
                <div className="mb-5">
                  <div className="relative w-14 h-14">
                    {/* Blue highlight background */}
                    <div className="absolute right-0 top-0 w-8 h-full rounded-md z-0" />
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="relative z-10 object-contain w-12 h-12"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-md font-medium text-black leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom: Arrow Button */}
              {/* <div className="mt-6">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center">
                  <Image
                    src="/icons/mobile-stage-arrow.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </section>
      {/* Development Process*/}
      <section className="bg-white px-10 py-16">
        <div className="mb-8">
          <h3 className="mt-4 text-2xl font-semibold text-center leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            Our Mobile App Development Process
          </h3>

          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            A Step-by-Step Approach to Building Reliable Mobile Applications
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            We follow a structured development approach that begins with
            understanding your business objectives and user expectations. Each
            stage from planning and design to testing and deployment is
            carefully managed to ensure quality delivery. This process helps
            reduce risks and ensures your application launches smoothly and
            performs reliably.
          </p>
        </div>

        {/* IMAGE BELOW CONTENT */}
        <div className="flex justify-center mt-10">
          <Image
            src="/whatwedoimage.svg" // put your image in public folder
            alt="What we do"
            width={1200}
            height={600}
            className="w-[100%] md:w-[100%]"
          />
        </div>
      </section>

      {/* Getintouch */}
      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl px-6 py-10 sm:px-12 md:py-16 rounded-xl bg-gradient-to-r from-[#FFF5EA] to-[#FFECDC] shadow-md flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                SPEAK WITH OUR EXPERTS
              </h3>

              <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Planning to Build a Mobile App for Your Business? Let’s Discuss
                Your Idea.
              </h2>

              <p className="mt-4 text-black font-medium">
                Start your project today with the best mobile app development
                company in Chennai and turn your app idea into a practical
                digital solution.
              </p>

              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Image
                  src="/icons/mailbox.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
                Get in Touch
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full md:w-[40%] lg:w-1/2 flex justify-end items-end self-stretch">
              <Image
                src="/getintouchmobile.svg"
                alt="Contact illustration"
                width={700}
                height={700}
                className="relative md:absolute md:bottom-0 md:right-0 ml-auto w-[80%] sm:w-[50%] md:w-full h-full object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f3f3] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            Tools and Technology
          </h3>

          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            We pride ourselves on being the one stop shop for all your needs
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Tools and technology help make work easier and faster. They play an
            important role in improving efficiency and innovation in everyday
            life.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-36 mt-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-md md:text-md font-medium transition-all duration-300
          ${
            activeTab === tab
              ? "border-b-2 border-[#1C76BD] bg-gradient-to-r from-[#1C76BD] to-[#02A89B] bg-clip-text text-transparent font-semibold"
              : "border-b-2 border-transparent text-black hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:bg-clip-text hover:text-transparent"
          }
        `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Icons */}
          <div className="flex flex-wrap justify-start gap-48 mt-12 ml-20">
            {toolsData[activeTab]?.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <p className="text-md font-medium text-black">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonial />
      <Clients />
      <Contactform />
      <OurBlog />
      <Faq />
      <Footer />
    </main>
  );
}
