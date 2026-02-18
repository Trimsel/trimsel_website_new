import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Whatwedo from "@/components/Whatwedo";
import Fivestage from "@/components/Fivestage";
import Testimonial from "@/components/testimonial";
import OurBlog from "@/components/OurBlog";
import Contactform from "@/components/Contactform";
import FaqSection from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-100 via-[#d4e9fd] to-white text-black overflow-hidden">
        <div className="container mx-auto px-4 py-4 md:py-4 mt-28">
          <div className="relative grid md:grid-cols-2 gap-12 items-center ml-24 
                    -translate-y-8 md:-translate-y-10">

            {/* LEFT CONTENT */}
            <div className="relative z-20 text-center md:text-left gap-4 mt-12">
              <h1 className="text-5xl font-bold mb-10 leading-tight">
                Grow Your Business
                With Trimsel – Your
                No.1 Expert Digital Partner
              </h1>

              <p className="max-w-xl mb-8 text-lg">
                Trimsel is a digital product development company based in India. We use the power of digital engineering and empower businesses to execute their ideas with innovation.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#27AAE1] 
             text-white px-8 py-4 rounded font-medium"
              >
                Get Started Today <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
              </Link>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-[520px] h-[480px] flex items-center justify-center ml-6">
              <div className="absolute w-[380px] h-[380px] rounded-full 
                        bg-blue-200 blur-3xl opacity-60 z-0" />

              <Image
                src="/Home/HomeImage.svg"
                alt="Home"
                width={400}
                height={380}
                className="relative z-10 w-[380px] animate-shake"
                priority
              />

              <Image
                src="/Home/Robot.svg"
                alt="AI Robot"
                width={200}
                height={200}
                className="absolute top-1/2 left-1/2 
                     -translate-x-1/2 -translate-y-1/2 
                     z-20 w-[200px] h-auto"
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
        <div className="container mx-auto px-6">

          {/* Heading */}
          <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
            WHO WE ARE
          </h3>

          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
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
        <div className="flex justify-center">
          <div
            className="
            relative
            w-full
            max-w-6xl
            px-8 py-10
            rounded-xl
            bg-gradient-to-r from-blue-200 via-[#d4e9fd] to-white
            shadow-md
            min-h-[55vh]
          "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              {/* LEFT CONTENT */}
              <div>
                <h3 className="text-[#1C75BC] text-2xl font-semibold tracking-widest">
                  GET IN TOUCH
                </h3>

                <h2 className="mt-2 text-2xl md:text-4xl font-semibold">
                  Have a project? We would love to help.
                </h2>

                <p className="mt-4 text-black font-medium">
                  Reach out to us to identify business challenges and get efficient digital solutions.
                </p>

                <button
                  className="
                  mt-6 inline-flex items-center gap-2
                  bg-[#27AAE1]
                  text-white font-semibold
                  px-6 py-3 rounded-lg
                "
                >
                  Get Started →
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative flex justify-center md:justify-end">
                <Image
                  src="/Home/getintouch.svg"
                  alt="Contact illustration"
                  width={700}
                  height={700}
                  className="w-full max-w-md md:absolute md:-bottom-44 md:right-0"
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

            <h2 className="mt-4 text-[#1C75BC] text-center text-2xl md:text-4xl font-semibold">
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

