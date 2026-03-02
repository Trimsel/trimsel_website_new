"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Whatwedo from "@/components/Whatwedo";
import Fivestage from "@/app/Home/Fivestage";
import Testimonial from "@/components/testimonial";
import OurBlog from "@/components/OurBlog";
import Contactform from "@/components/Contactform";
import FaqSection from "@/components/Faq";
import { ToolsSection } from "./Home/ToolsSection";
import { useEffect, useState } from "react";

export default function Home() {

  const words = [
    "AI",
    "Intelligent Automation",
    "Cognitive Computing",
    "Smart Technology",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-100 via-[#d4e9fd] to-white text-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(147,197,253,0.55)_0%,transparent_35%),radial-gradient(circle_at_88%_78%,rgba(56,189,248,0.28)_0%,transparent_42%),linear-gradient(120deg,#dbeafe_0%,#e7f2ff_48%,#f8fcff_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(28,117,188,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(28,117,188,0.12)_1px,transparent_1px)] [background-size:120px_120px]" />
        <div className="absolute inset-0 hidden bg-[url('/Home/HomeImage.svg')] bg-[position:85%_52%] bg-no-repeat opacity-[0.08] md:block" style={{ backgroundSize: "52%" }} />

        <div className="container mx-auto flex min-h-screen items-center px-4 pb-10 pt-28 sm:px-6 md:pt-24">
          <div className="relative z-10 grid w-full items-center gap-10 md:grid-cols-2 md:gap-12">

            {/* LEFT CONTENT */}
            <div className="relative z-20 mt-6 text-center md:mt-0 md:text-left">
              <h1 className="mb-8 text-4xl font-bold leading-tight sm:text-5xl">
                Smarter Logistics,
                <br />
                Powered by{" "}
                <span className="relative mb-4 inline-block min-w-[160px] align-baseline sm:min-w-[220px]">
                  <span className="opacity-0">AI</span>
                  <span
                    key={index}
                    className="absolute inset-0 whitespace-nowrap text-2xl font-semibold text-[#1FA6A0] animate-rotate-word sm:text-3xl lg:text-4xl"
                  >
                    {words[index]}
                  </span>
                </span>
              </h1>

              <p className="mb-8 max-w-xl text-base sm:text-lg">
                Trimsel is a digital product development company based in India. We use the power of digital engineering and empower businesses to execute their ideas with innovation.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg bg-[#27AAE1] px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
              >
                Get Started Today <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative mx-auto flex h-[340px] w-full max-w-[620px] items-center justify-center sm:h-[440px] md:h-[72vh] md:max-h-[620px]">
              <div className="absolute z-0 h-[240px] w-[240px] rounded-full bg-blue-200 opacity-60 blur-3xl sm:h-[320px] sm:w-[320px] md:h-[420px] md:w-[420px]" />

              <Image
                src="/Home/HomeImage.svg"
                alt="Home"
                width={400}
                height={380}
                className="relative z-10 w-[280px] animate-shake sm:w-[360px] md:w-[430px]"
                priority
              />

              <Image
                src="/Home/Robot.svg"
                alt="AI Robot"
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2 
                     z-20 h-auto w-[150px] sm:w-[190px] md:w-[225px]"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* client */}
      <Client />

      {/* Works */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Heading */}
          <h3 className="text-center text-sm font-semibold tracking-[0.22em] text-[#1C75BC] sm:text-base">
            WHO WE ARE
          </h3>

          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            We’re Experts At Helping Businesses Reach Their True Potential
          </h2>

          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            Transform your business processes by migrating from legacy solutions
            to modern technology and developments that guarantee growth, optimization, and ROI for your business.
            Trimsel was founded at the right moment to meet the challenges faced by businesses and enable them to meet their digital transformation goals.
            Established in 2020 in Chennai, Trimsel and its robust team of developers and consultants have provided Product Engineering and
            Digital Transformation services to Fortune 500 companies and start-up enterprises globally.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work1.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">30+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Web & Mobile Products
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work2.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">2000+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Million Users Touched
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work3.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">110+</div>
              <p className="mt-2 text-sm font-medium text-black">
                Project Launched
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src="/icons/work4.svg"
                alt="Projects"
                width={40}
                height={40}
              />
              <div className="text-3xl sm:text-4xl font-bold">99%</div>
              <p className="mt-2 text-sm font-medium text-black">
                customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getintouch */}
      <section className="bg-white py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div
            className="
            relative
            w-full
            max-w-6xl
            px-5 py-8 sm:px-8 sm:py-10
            rounded-xl
            bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white
            shadow-md
          "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* LEFT CONTENT */}
              <div>
                <h3 className="text-sm font-semibold tracking-[0.22em] text-[#1C75BC] sm:text-base">
                  GET IN TOUCH
                </h3>

                <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                  Have a project? We would love to help.
                </h2>

                <p className="mt-4 text-black font-medium">
                  Reach out to us to identify business challenges and get efficient digital solutions.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
                >
                  Get Started →
                </Link>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center md:justify-end">
                <Image
                  src="/Home/getintouch.svg"
                  alt="Contact illustration"
                  width={700}
                  height={700}
                  className="h-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px]"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Whatwedo */}
      <Whatwedo />

      {/* Fivestage */}
      <Fivestage />

      {/* Industries */}
      <section className="bg-[#F5F6FF]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          {/* Heading Section */}
          <div className="flex flex-col items-center gap-4 text-center">

            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              INDUSTRIES WE SERVE
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
              Android App Solutions for Various Industries help businesses
              streamline operations, enhance customer engagement, and boost
              efficiency. From healthcare and education to retail and
              logistics, our tailored Android apps meet specific industry
              needs.
            </p>
          </div>

          {/* Grid Section */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">

            {[
              { name: "Healthcare", bg: "#CBE6FC", icon: "/icons/healthcare.svg" },
              { name: "On-Demand", bg: "#ACFFCE", icon: "/icons/on-demand.svg" },
              { name: "Entertainment", bg: "#EDAFF7", icon: "/icons/entertainment.svg" },
              { name: "Logistics", bg: "#FAD4B6", icon: "/icons/logistics.svg" },
              { name: "E-Commerce", bg: "#FDA8A6", icon: "/icons/ecommerce.svg" },
              { name: "Real Estate", bg: "#F9DF89", icon: "/icons/real-estate.svg" },
              { name: "Food Delivery", bg: "#FFCACE", icon: "/icons/food-delivery.svg" },
              { name: "Grocery", bg: "#DCCFCB", icon: "/icons/grocery.svg" },
              { name: "Travel", bg: "#A3D5FD", icon: "/icons/travel.svg" },
              { name: "Restaurant", bg: "#D4F7AA", icon: "/icons/restaurant.svg" },
              { name: "Media", bg: "#E080F9", icon: "/icons/media.svg" },
              { name: "EduTech", bg: "#7AEE7F", icon: "/icons/edutech.svg" },
            ].map((item) => (
              <div
                key={item.name}
                className="flex h-[100px] w-[120px] sm:h-[110px] sm:w-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-white/60 shadow-md transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: item.bg }}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="object-contain sm:w-[48px] sm:h-[48px]"
                />

                <span className="text-center text-xs sm:text-sm font-semibold text-black">
                  {item.name}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Tools and Technologies */}
      <ToolsSection />

      {/* Testimonial */}
      <Testimonial />

      {/* Contactform */}
      <Contactform />

      {/* OurBlog */}
      <OurBlog />

      {/* FaqSection */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
