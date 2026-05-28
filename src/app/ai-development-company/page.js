"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import AiHero from "@/app/ai-development-company/AiHero";
import Clients from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import { blogData } from "@/data/blogData";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/relatedcasestudy";

const features = [
  {
    icon: "/icons/AI-solution1.svg",
    title: "Tailored AI Solutions, Not Templates",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/AI-solution2.svg",
    title: "Strong Technical Expertise",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/AI-solution3.svg",
    title: "Seamless Integration with Your Existing Tech Stack",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/AI-solution4.svg",
    title: "Rapid Prototyping to Scalable Delivery",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/AI-solution5.svg",
    title: "Data Privacy and Compliance First",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
  {
    icon: "/icons/AI-solution6.svg",
    title: "End-to-End Partnership",
    description:
      "What makes Minitzon the top Mobile app development company is our keen attention to detail and grade-A product deliveries.",
  },
];

const services = [
  {
    icon: "/icons/AI-whatwedo1.svg",
    title: "Mobile Application Design",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo2.svg",
    title: "IOS Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo3.svg",
    title: "Android Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo4.svg",
    title: "Hybrid Application Development",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo5.svg",
    title: "Mobile Application Testing",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
  {
    icon: "/icons/AI-whatwedo6.svg",
    title: "24*7 Maintenance And Support",
    description:
      "We ensure to use guidelines by Apple and Google to make our apps visually appealing while keeping all functionalities tightly integrated.",
    href: "#",
  },
];

export default function AI() {
  return (
    <main>
      <Header transparent />
      <AiHero />

      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-center text-2xl md:text-4xl font-semibold">
              Why Minitzon for Software Testing Services?
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
              Take your business to the next level with the leading Software
              testing company in Chennai.
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
                <div className="flex items-center gap-3 mt-2">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h4 className="mt-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="mt-4 text-md text-gray-700 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0efeb] px-10 py-16 rounded-3xl">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
            WHAT WE DO
          </h3>

          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            Customize testing for your product with end-to-end software testing
            services
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Minitzon Software testing company aims to meet the full range of QA
            Testing within solid deadlines to deliver high-quality software to
            the end customer.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 20%, 100% 100%, 0 100%)",
                borderRadius: "16px",
              }}
            >
              {/* Top Content */}
              <div>
                {/* Icon */}
                <div className="mb-5">
                  <div className="relative w-14 h-14">
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
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-md text-gray-500 font-medium leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Arrow */}
              <div className="mt-6">
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center"
                >
                  <Image
                    src="/icons/mobile-stage-arrow.svg"
                    alt="arrow"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto bg-[#efefef] rounded-2xl p-10 space-y-8">
          {/* Top Section */}
          <div className="space-y-4">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Types Of Software <br /> Testing Services In India
            </h2>

            <p className="mt-4 text-center text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              By identifying issues and bugs in the early stages of product
              development, we eliminate costly reworks and poor software
              performance.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="relative bg-[#c9d6ea] rounded-xl p-6 overflow-hidden">
              {/* Big Number */}
              <span className="absolute right-6 top-4 text-5xl font-bold text-white/40">
                01
              </span>

              {/* Icon */}
              <div className="absolute -top-6 left-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/icons/automation.svg" // replace with your icon
                    alt="Automated Testing Services icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-10 text-lg font-semibold text-gray-800">
                Automated Testing Services
              </h3>

              <p className="mt-3 text-md font-medium text-gray-700 leading-relaxed">
                At Minitzon software testing company in Chennai uses modern
                technology for agile and accurate testing. With simulated
                scenarios and skilled QA experts, we are able to deduce issues,
                bugs and errors and make timely and effective fixes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#ead7a4] rounded-xl p-6 overflow-hidden">
              {/* Big Number */}
              <span className="absolute right-6 top-4 text-5xl font-bold text-black/20">
                02
              </span>

              {/* Icon */}
              <div className="absolute -top-6 left-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Image
                    src="/icons/manual.svg" // replace with your icon
                    alt="Manual Testing Services icon"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="mt-10 text-lg font-semibold text-gray-800">
                Manual Testing Services
              </h3>

              <p className="mt-3 text-md font-medium text-gray-700 leading-relaxed">
                Minitzon’s Manual Testing Services helps replicate user
                behaviour, with consistent processes to eliminate all the bugs
                along the way. Our tests cases and plans make the software
                testing assurance services reliable, quality rich and
                error-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT CARD */}
          <div className="ml-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Our Testing Approach
              </h2>

              <p className="mt-4 text-gray-600">
                As A Software Testing Services Company, We Test Every Part Of
                The Application In Your Agile Environment.
              </p>

              {/* Points */}
              <div className="mt-6 space-y-5">
                {/* Item 1 */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/icons/simplicity.svg"
                    alt="simplicity"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-700">
                    <span className="text-md font-semibold">Simplicity- </span>
                    In alignment with your business needs translates to clear
                    testing goals.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/icons/reliability.svg"
                    alt="reliability"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Reliability- </span>
                    By improving the quality of your application, release on
                    release.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/icons/transparency.svg"
                    alt="transparency"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Transparency- </span>
                    Of your product health and testing efficacy by always
                    available insights.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-gray-700 font-medium">
                Based on these parameters, we scope out:
              </p>

              {/* Boxes */}
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  "What experience is good for the users?",
                  "What devices or platforms need to test?",
                  "What load range and traffic are covered?",
                  "What are the business success factors?",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="bg-[#d7ead9] text-sm px-4 py-3 rounded-lg flex items-center gap-2"
                  >
                    ✔ {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#dbe7f3] rounded-2xl p-8 shadow-sm h-full flex flex-col">
            <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              WHAT WE DELIVER
            </h3>

            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-black sm:text-3xl md:text-4xl">
              Testing In Continuous Integration And Continuous Delivery (CI/CD)
            </h2>

            <p className="mt-4 text-gray-700 text-md font-medium leading-relaxed">
              As a software testing services company, we test every part of the
              application in your Agile environment. Testing is conducted
              frequently while deployment steps are automated. The razor sharp
              focus is on the business requirements, code quality, and security.
              Through QA and testing services and adopting CI/CD, we ensure that
              the new features are quickly tested and shipped to the market.
            </p>
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl rounded-xl bg-gradient-to-r from-[#0C0F14] via-black to-[#162D9C] min-h-[280px] md:min-h-[320px] shadow-lg flex flex-col md:flex-row items-center justify-between">
            {/* LEFT CONTENT */}
            <div className="relative z-10 px-8 py-10 sm:px-12 md:py-16 w-full md:w-[60%] lg:w-1/2 text-left">
              <h3 className="text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-3xl lg:text-4xl">
                GET IN TOUCH
              </h3>
              <h2 className="mt-2 text-2xl text-white font-semibold leading-tight sm:text-3xl md:text-3xl lg:text-4xl">
                Need a DevOps consultants? Contact us Now!
              </h2>

              {/* Button */}
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#05A1E5] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Contact Us
                <Image
                  src="/Home/right-arrow.svg"
                  width={20}
                  height={20}
                  alt="RightArrow"
                />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full md:w-[40%] lg:w-1/2 self-stretch flex justify-end items-end">
              <Image
                src="/AI&ML-getintouch.svg"
                alt="AI&ML-get-in-touch"
                width={500}
                height={500}
                className="md:absolute md:bottom-0 md:right-0 w-full h-[280px] sm:h-[320px] md:h-[420px] object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection
        tag="RELATED CASE STUDIES"
        heading="Read About The Challenges We Faced And How We Helped Our Clients Achieve Their Goals."
        studies={[
          {
            title: "EzyHelpers",
            description:
              "Quisque a pretium nulla, at porttitor eros. Mauris pharetra nisl sit amet mauris efficitur malesuada.",
            image: "/images/ezyhelpers.png",
            link: "/case-study/ezyhelpers",
          },
          {
            title: "KarIOT",
            description:
              "Quisque a pretium nulla, at porttitor eros. Mauris pharetra nisl sit amet mauris efficitur malesuada.",
            image: "/images/kariot.png",
            link: "/case-study/kariot",
          },
        ]}
      />

      <Clients />
      <Contactform />
      <OurBlog {...blogData.ai} />
      <Faq />
      <Footer />
    </main>
  );
}
