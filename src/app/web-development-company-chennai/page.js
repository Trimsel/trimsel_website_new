"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Client from "@/components/Client";
import Contactform from "@/components/Contactform";
import OurBlog from "@/components/OurBlog";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Testimonial from "@/components/testimonial";




const services = [
  {
    title: "User-Centric UI/UX Design",
    icon: "/web-whatwedo1.svg",
    desc: "We craft intuitive and engaging user experiences that enhance usability and drive customer satisfaction through thoughtful design."
  },
  {
    title: "Front-End Development",
    icon: "/web-whatwedo2.svg",
    desc: "Build fast, responsive, and interactive interfaces using modern technologies to deliver seamless user experiences across all devices."
  },
  {
    title: "Backend Web Development",
    icon: "/web-whatwedo3.svg",
    desc: "Develop secure and scalable server-side solutions that ensure smooth performance, data handling, and system reliability."
  },
  {
    title: "Multi-Tier API Development",
    icon: "/web-whatwedo4.svg",
    desc: "Design robust APIs that enable efficient communication between systems and ensure seamless data flow across applications."
  },
  {
    title: "CMS Web Development",
    icon: "/web-whatwedo5.svg",
    desc: "Create flexible and user-friendly CMS platforms that allow easy content management without technical expertise."
  },
  {
    title: "Ecommerce Web Development",
    icon: "/web-whatwedo6.svg",
    desc: "Build powerful ecommerce platforms with secure payment integration, user-friendly design, and high performance."
  },
  {
    title: "DevOps As A Service",
    icon: "/web-whatwedo7.svg",
    desc: "Streamline development and deployment with automated workflows, improving efficiency, scalability, and reliability."
  },
  {
    title: "Quality Engineering & Testing",
    icon: "/web-whatwedo8.svg",
    desc: "Ensure flawless performance with comprehensive testing strategies that enhance product quality and reliability."
  },
  {
    title: "24/7 Maintenance & Support",
    icon: "/web-whatwedo9.svg",
    desc: "Provide continuous monitoring and support to keep your systems running smoothly and resolve issues instantly."
  },
];


const features = [
  {
    title: "Access to Top Worldwide Talent",
    desc: "Web development company in Chennai helps you access top talents in the industry to meet your business needs with the best-in-class technology and industry knowledge.",
    icon: "/webservice1.svg",
  },
  {
    title: "Reduce Turnaround Time",
    desc: "Building a website on your own can consume a lot of time and effort. Outsourcing web development to the best web development company in India can help you save costs.",
    icon: "/webservice2.svg",
  },
  {
    title: "Experienced Professionals of the Field",
    desc: "Get access to experienced developers and professionals to help you construct and manage your project. We implement the best practices and trends to deliver products.",
    icon: "/webservice3.svg",
  },
  {
    title: "Cut Down Extra Cost",
    desc: "Not needing to hire in-house teams and resources can help you save a lot of money and capital by simply investing in the top web development agency in India.",
    icon: "/webservice4.svg",
  },
];


const components = [
  {
    title: "24/7 Support",
    desc: "Reach out to Minitzon at any time to get your requirements fulfilled or your queries answered.",
    icon: "/we-need-1.svg",
  },
  {
    title: "Higher Efficiency",
    desc: "Reach out to Minitzon at any time to get your requirements fulfilled or your queries answered.",
    icon: "/we-need-2.svg",
  },
  {
    title: "Multi-layer Security",
    desc: "Reach out to Minitzon at any time to get your requirements fulfilled or your queries answered.",
    icon: "/web-need-3.svg",
  },
  {
    title: "Customisable & Scalable Solutions",
    desc: "Reach out to Minitzon at any time to get your requirements fulfilled or your queries answered.",
    icon: "/web-need-4.svg",
  },
];

const servicesprovider = [
  {
    title: "Grade A Services Available 24/7",
    description:
      "Minitzon provides support, assistance and consulting regarding our products and services on all days and at all times. Technical experts, consultants and customer support are always on board and active to help you gain the best from our services.",
  },
  {
    title: "Well – Trained Experts",
    description:
      "Minitzon provides support, assistance and consulting regarding our products and services on all days and at all times. Technical experts, consultants and customer support are always on board and active to help you gain the best from our services.",
  },
  {
    title: "Efficient Communications",
    description:
      "Minitzon provides support, assistance and consulting regarding our products and services on all days and at all times. Technical experts, consultants and customer support are always on board and active to help you gain the best from our services.",
  },
  {
    title: "Best Services at Reasonable Cost",
    description:
      "Minitzon provides support, assistance and consulting regarding our products and services on all days and at all times. Technical experts, consultants and customer support are always on board and active to help you gain the best from our services.",
  },
];

const items = [
  {
    title: "Pre-Discovery Phase",
    icon: "/web-approach1.svg",
    points: [
      "Analysis Of The Legislative Environment",
      "Assessment Of User Complaints And The Shortcomings Of Existing Services",
      "Measurements Related To The Service",
      "Team Alignment",
    ],
  },
  {
    title: "Discovery Phase",
    icon: "/web-approach2.svg",
    points: [
      "Analysis Of The Legislative Environment",
      "Assessment Of User Complaints And The Shortcomings Of Existing Services",
      "Measurements Related To The Service",
      "Team Alignment",
    ],
  },
  {
    title: "Design Phase",
    icon: "/web-approach3.svg",
    points: [
      "Analysis Of The Legislative Environment",
      "Assessment Of User Complaints And The Shortcomings Of Existing Services",
      "Measurements Related To The Service",
      "Team Alignment",
    ],
  },
  {
    title: "Delivery Phase",
    icon: "/web-approach4.svg",
    points: [
      "Analysis Of The Legislative Environment",
      "Assessment Of User Complaints And The Shortcomings Of Existing Services",
      "Measurements Related To The Service",
      "Team Alignment",
    ],
  },
  {
    title: "Launch And Deployment",
    icon: "/web-approach5.svg",
    points: [
      "Analysis Of The Legislative Environment",
      "Assessment Of User Complaints And The Shortcomings Of Existing Services",
      "Measurements Related To The Service",
      "Team Alignment",
    ],
  },
];


export default function WebDevelopment() {

  const [active, setActive] = useState(null);


  return (
    <main>

      <Header />

      <section className="relative overflow-hidden bg-[#E4F3FF]">
        {/* Content */}
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:items-start lg:px-12 lg:pt-24">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-start">

            {/* BREADCRUMB */}
            <p className="text-md md:text-base font-medium text-black mt-8">
              <Link href="/" className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">
                Home
              </Link>

              {" • "}

              <span className="px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:text-[#1896cd]">Web Development Company</span>
            </p>

            <h1 className="mt-8 text-4xl font-semibold text-black">
              Top-Rated Web Development
              Company in Chennai –
              Built for Growth & Performance.
            </h1>

            <p className="max-w-xl mt-6 text-lg">
              An AI-driven logistics optimization platform that revolutionizes how
              businesses plan, execute, and manage transportation. Real-time
              insights enable smarter decisions, while end-to-end visibility ensures
              greater transparency across every stage of the supply chain.
            </p>

            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-md bg-gradient-to-r from-[#29B375] to-[#2E70C3] text-white font-medium hover:scale-105 transition-all shadow-lg mt-6"
              >
                Get a Free Consultation
                <Image src="/Home/right-arrow.svg" width={20} height={20} alt="RightArrow" />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center overflow-hidden py-8 lg:py-0">

            {/* Glow blob */}
            <div className="absolute h-72 w-72 rounded-full bg-blue-200 opacity-50 blur-3xl" />

            {/* Scale wrapper */}
            <div className="flex items-center justify-center scale-[0.6] -my-28 origin-center sm:scale-[0.85] sm:-my-14 lg:scale-100 lg:my-0">

              {/* Outer container — fixed size, never changes */}
              <div className="relative h-[540px] w-[540px]">

                {/* Web1 — dashboard/card, top-right */}
                <div className="absolute top-8 left-28 z-10 h-[75%] w-[95%]">
                  <Image
                    src="/Web1.svg"
                    alt="Web1"
                    fill
                    className="object-contain opacity-90 drop-shadow-lg"
                    priority
                  />
                </div>

                {/* Web2 — robot, bottom-left */}
                <div className="absolute bottom-28 left-12 z-20 h-[70%] w-[70%]">
                  <Image
                    src="/Web2.svg"
                    alt="AI Robot"
                    fill
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="mb-8 text-left text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Web Development Company <br />
              In Chennai
            </h2>


            {/* Paragraph */}
            <p className="mt-6 max-w-3xl mx-auto text-left text-gray-800 font-medium">
              Minitzon web development company in India has been serving businesses
              with their digital needs for years. Our experts have helped start-ups,
              enterprises and businesses of all scales enhance their profits in the
              B2C and B2B sectors of various industries. We create endless
              possibilities to help businesses achieve great heights in the marketplace.
            </p>

            <p className="mt-4 max-w-3xl mx-auto text-left text-gray-800 font-medium">
              If you are on the lookout for the best web app development company in
              India to set up your digital presence, you have reached the right place.
              Our custom solutions will fit right into your requirements at an
              affordable price.
            </p>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-gradient-to-br from-[#3b3be0] to-[#6a4df4] text-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto">

            <h5 className="text-md tracking-wider opacity-80 mb-2">
              START YOUR PROJECT
            </h5>

            <h4 className="text-lg md:text-xl font-semibold leading-snug">
              Are You Looking Out To Develop A Website For Your Business?
            </h4>

            <p className="text-md font-medium mt-2 opacity-80">
              Grow your business with well-developed websites that engage customer attention.
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
      </section>


      <section className="bg-balck py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#0b0b14] to-[#120a1f] rounded-3xl p-8 md:p-12 text-white">

          {/* HEADER */}
          <div>
            {/* Heading */}
            <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
              WHAT WE DO
            </h3>

            <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
              Full Stack Web Development Services in India
            </h2>

            <p className="mt-4 px-0 md:px-10 text-center text-white font-medium leading-relaxed">
              Minitzon web development agency in India undertakes consultancy, for
              businesses regarding website building, understanding your needs.
            </p>
          </div>

          {/* GRID */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-[#141421] rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
              >
                {/* ICON */}
                <div className="w-12 h-12 mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h4 className="text-xl font-semibold">{item.title}</h4>

                {/* DESC */}
                <p className="mt-3 text-gray-600 font-medium max-w-3xl leading-relaxed">
                  {item.desc}
                </p>

                {/* ARROW BUTTON */}
                {/* <div className="mt-5">
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-[#05A1E5] via-[#5346E5] to-[#9005E5] inline-flex items-center justify-center"
                  >
                    <Image
                      src="/right-arrow-whatwedo.svg"
                      alt="arrow"
                      width={8}
                      height={8}
                    />
                  </Link>
                </div> */}
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className="py-16 px-4 md:px-10 bg-gradient-to-br from-[#eef3f8] to-[#f7f4ef]">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Outsource Web App Development Services And Increase ROI
            </h2>
          </div>

          {/* CARDS */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="w-10 h-10 mb-4 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* TITLE */}
                <h4 className="text-md font-semibold text-[#1f2a37] leading-snug">
                  {item.title}
                </h4>

                {/* DESCRIPTION */}
                <p className="mt-3 text-md font-medium text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className="px-4 md:px-10 py-16 bg-white">
        <div className="max-w-6xl mx-auto bg-[#dbe6ee] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Why Does Your Business Need <br />
              a Web App Services?
            </h2>

            <p className="mt-5 text-gray-600 font-medium max-w-3xl leading-relaxed">
              Minitzon have excelled in various fields and have enabled several
              businesses globally to meet impeccable profits. Our experienced
              professionals and advanced IT resources serve adequately to meet
              business demands of any scale quickly and efficiently. See where our
              Minitzon has guided businesses to excellence.
            </p>

            {/* BUTTON */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-6 bg-[#1ea7d7] hover:bg-[#1696c4] text-white px-6 py-3 rounded-lg text-md font-medium transition"
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
                    width={35}
                    height={35}
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-md font-semibold text-[#1f2a37]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm font-medium text-gray-600 leading-relaxed">
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
              TOP DESTINATION
            </h3>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-800">
            {"< "}WEB{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              /
            </span>{" "}
            DEVELOPMENT{" >"}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-900 font-medium md:text-base">
            Web app development company in India can be outsourced to help businesses
            unlock their full potential in the marketplace and stay competitive.
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
            Approach to Web Application <br /> Development
          </h2>

          <p className="max-w-3xl text-left font-medium leading-relaxed text-gray-200">
            We will take your project through a comprehensive app development process that comprises the following phases.
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
                        <Image src={item.icon} alt={item.title} width={25} height={25} className="text-blue-400" />
                      </div>
                      <h3 className="font-medium text-lg leading-tight">{item.title}</h3>
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
                    className={`ml-8 overflow-hidden transition-all duration-300 ${active === index
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
      <section className="bg-white py-12 md:py-20">
        <div className="flex justify-center px-4 sm:px-6">
          <div className="relative w-full max-w-6xl px-6 py-10 sm:px-12 md:py-16 rounded-xl bg-gradient-to-r from-[#ECE1FF] to-[#E6D5FF] shadow-md flex flex-col md:flex-row items-center justify-between overflow-hidden">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                GET IN TOUCH
              </h3>

              <h2 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                Wanna Develop a Mobile Application? Contact us Now!
              </h2>

              <p className="mt-4 text-black font-medium">
                Reach out to us to identify business challenges and get
                efficient digital solutions.
              </p>

              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#FE4F6C] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
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
                src="/getintouchweb.svg"
                alt="Contact illustration"
                width={700}
                height={700}
                className="relative md:absolute md:bottom-0 md:right-0 ml-auto w-[80%] sm:w-[50%] md:w-full h-full object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>
      </section>

      <Client />

      <Contactform />

      <Testimonial />

      <OurBlog />

      <Footer />
    </main>
  );
}