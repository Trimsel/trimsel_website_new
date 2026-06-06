"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useState } from "react";
import Testimonial from "@/components/testimonial";

export default function ContactUs() {
  const [active, setActive] = useState("Mobile App");

  const services = [
    { name: "Mobile App", icon: "/contactus8.svg" },
    { name: "AI / ML", icon: "/contactus9.svg" },
    { name: "DevOps", icon: "/contactus10.svg" },
    { name: "Web Dev", icon: "/contactus11.svg" },
    { name: "Cloud", icon: "/contactus12.svg" },
    { name: "Consulting", icon: "/contactus13.svg" },
  ];

  return (
    <main>
      <Header />

      <section className="relative w-full min-h-[500px] overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/contactusbg.svg"
            alt="Background"
            fill
            sizes="100vw"
            priority
            className="object-cover scale-150"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 -z-10" />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px] text-center px-4 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Get in touch with{" "}
            <span className="text-blue-600 font-bold">Trimsel</span>
          </h1>

          <p className="mt-3 text-gray-600 text-md font-medium md:text-lg">
            We reply within 24 hours. No spam, no obligation.
          </p>

          {/* Pills */}
          <div className="flex gap-4 mt-5 flex-wrap justify-center">
            {["Available Mon-Sat", "Response < 24 hrs", "Chennai, India"].map(
              (text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-2xl shadow-sm border border-white/30 text-md font-medium text-gray-700"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {text}
                </div>
              ),
            )}
          </div>

          {/* Divider */}
          <div className="w-full max-w-3xl border-t mt-8 border-gray-300/60" />

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: "/contactus1.svg", text: "50+ Projects" },
              { icon: "/contactus2.svg", text: "4.9 Rating" },
              { icon: "/contactus3.svg", text: "NDA Protected" },
              { icon: "/contactus4.svg", text: "Fast Delivery" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-md font-medium text-gray-700"
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-md ${item.bg}`}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={30}
                    height={30}
                  />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 bg-[#f4f6f8] min-h-screen">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">
            {/* QUICK CONTACT */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-md text-black font-semibold mb-4">
                QUICK CONTACT
              </h3>

              <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4">
                {/* ITEM */}
                <Link
                  href="https://wa.me/917200841581?text=Hi%20Trimsel%20team!%20I'd%20like%20to%20chat%20about%20a%20project."
                  className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/contactus5.svg"
                      width={35}
                      height={35}
                      alt="WhatsApp"
                    />
                    <div>
                      <p className="text-md font-medium">WhatsApp</p>
                      <p className="text-sm text-gray-600 font-medium">
                        Chat with us now
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg">{">"}</span>
                </Link>

                {/* ITEM */}
                <Link
                  href="tel:+917200841581"
                  className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/contactus6.svg"
                      width={35}
                      height={35}
                      alt="Phone"
                    />
                    <div>
                      <p className="text-md font-medium">Call Us</p>
                      <p className="text-sm text-gray-600 font-medium">
                        +91 72008 41581
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg">{">"}</span>
                </Link>

                {/* ITEM */}
                <Link
                  href="mailto:contact@trimsel.com"
                  className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/contactus7.svg"
                      width={35}
                      height={35}
                      alt="Email"
                    />
                    <div>
                      <p className="text-md font-medium">Email</p>
                      <p className="text-sm text-gray-600 font-medium">
                        contact@trimsel.com
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg">{">"}</span>
                </Link>

                {/* ITEM */}
                <Link
                  href="/contact-us#contact-form"
                  className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src="/contactus14.svg"
                      width={35}
                      height={35}
                      alt="Schedule a call"
                    />
                    <div>
                      <p className="text-md font-medium">Schedule a Call</p>
                      <p className="text-sm text-gray-600 font-medium">
                        Book 30 min slot
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-lg">{">"}</span>
                </Link>
              </div>
            </div>

            {/* SOCIAL PROOF */}
            <div className="bg-[#0f172a] text-white p-5 rounded-xl space-y-6">
              <h5 className="text-md text-white font-semibold mb-4">
                SOCIAL PROOF
              </h5>

              <div className="flex justify-center items-center text-center gap-6 sm:gap-14 mb-4">
                <div className="px-4">
                  <p className="text-lg font-semibold">50+</p>
                  <p className="text-md text-white font-medium">PROJECTS</p>
                </div>

                <div className="h-8 w-px bg-gray-500"></div>

                <div className="px-4">
                  <p className="text-lg font-semibold">4.9</p>
                  <p className="text-md text-white font-medium">RATING</p>
                </div>

                <div className="h-8 w-px bg-gray-500"></div>

                <div className="px-4">
                  <p className="text-lg font-semibold">8yr</p>
                  <p className="text-md text-white font-medium">EXPERIENCE</p>
                </div>
              </div>

            </div>

            {/* PROMISE */}
            <div className="bg-white p-5 rounded-xl shadow-sm space-y-6">
              <h5 className="text-lg font-semibold mb-3 flex items-center gap-3">
                <Image
                  src="/contactus-response.svg"
                  alt="bolt"
                  width={20}
                  height={20}
                  className="opacity-80"
                  style={{ width: 'auto', height: 'auto' }}
                />
                Our response promise
              </h5>

              <div className="space-y-6 text-md">
                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-semibold">
                    1
                  </span>

                  <div>
                    <h6 className="font-medium">
                      Submit your form or WhatsApp us
                    </h6>
                    <p className="text-gray-500 text-sm font-medium">
                      We confirm receipt immediately
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-semibold">
                    2
                  </span>

                  <div>
                    <h6 className="font-medium">
                      Our team reviews your requirements
                    </h6>
                    <p className="text-gray-500 text-sm font-medium">
                      We confirm receipt immediately
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-semibold">
                    3
                  </span>

                  <div>
                    <h6 className="font-medium">
                      You receive a detailed quote
                    </h6>
                    <p className="text-gray-500 text-sm font-medium">
                      We confirm receipt immediately
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* HEADER */}
            <div className="bg-[#0f172a] text-white p-5">
              <h2 className="text-lg font-semibold">Get a Free Quote</h2>
              <p className="text-sm text-white font-medium">
                Describe your project and we'll respond in 24hrs.
              </p>
              <span className="inline-block mt-2 text-sm bg-green-600 px-2 py-1 rounded font-medium">
                ● Replies within 24h
              </span>
            </div>

            {/* FORM */}
            <div className="p-5 space-y-4">
              {/* SERVICE SELECT */}
              <div>
                <h5 className="text-lg font-semibold mb-2">Select service</h5>

                <div className="grid grid-cols-3 gap-3">
                  {services.map((s) => (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => setActive(s.name)}
                      className={`border rounded-lg p-3 text-sm font-medium flex flex-col items-center gap-1 transition-all duration-200
                  ${
                    active === s.name
                      ? "border-blue-600 bg-blue-50 text-blue-600 shadow-sm scale-[1.03]"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                    >
                      <Image
                        src={s.icon || "/icons/default.png"}
                        width={15}
                        height={15}
                        alt="Select service"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* SELECTED SERVICE (AUTO CHANGE) */}
              <input
                value={active}
                readOnly
                className="border  border-gray-200 p-2 rounded-md text-md font-medium w-full bg-gray-50"
              />

              {/* INPUTS */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col">
                  <label className="text-md font-semibold text-gray-800 mb-1">
                    Full Name
                  </label>
                  <input
                    placeholder="Enter your name"
                    className="border border-gray-200 p-2 rounded-md text-md font-medium"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-md font-semibold text-gray-800 mb-1">
                    Email
                  </label>
                  <input
                    placeholder="you@company.com"
                    className="border border-gray-200 p-2 rounded-md text-md font-medium"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-md font-semibold text-gray-800 mb-1">
                    Phone
                  </label>
                  <input
                    placeholder="Phone No"
                    className="border border-gray-200 p-2 rounded-md text-md font-medium"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-md font-semibold text-gray-800 mb-1">
                    Company
                  </label>
                  <input
                    placeholder="Startup / Corp"
                    className="border border-gray-200 p-2 rounded-md text-md font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-md font-semibold text-gray-800 mb-1">
                  Project Details
                </label>
                <textarea
                  placeholder="Describe your project, goals, timeline..."
                  className="w-full border border-gray-200 p-3 rounded-md text-md font-medium h-24"
                />
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/contactus-message.svg"
                  width={10}
                  height={10}
                  alt="Lock"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <span className="text-sm text-gray-400 font-medium">
                  Your data is safe. We never share it.
                </span>
              </div>

              {/* BUTTON */}
              <Link
                href="/contact-us#contact-form"
                className="w-full flex items-center justify-center gap-2 bg-[#27AAE1] text-white py-3 rounded-lg text-md font-medium hover:bg-[#27AAE1] transition-all duration-200"
              >
                <span>Send My Request</span>

                <Image
                  src="/Home/right-arrow.svg"
                  width={18}
                  height={18}
                  alt="RightArrow"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://wa.me/917200841581?text=Hi%20Trimsel%20team!%20I'd%20like%20to%20chat%20about%20a%20project."
                className="w-full flex items-center justify-center gap-2 text-[#15803D] text-sm border border-gray-200 rounded-lg py-3 hover:bg-gray-50 transition-all duration-200"
              >
                <Image src="/lock.svg" alt="whatsapp" width={18} height={18} />
                Or message us on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="max-w-8xl mx-auto px-6">
          <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* LEFT SIDE */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-black text-lg font-bold">
                <Image
                  src="/locationcontactus.svg"
                  alt="Location icon"
                  width={16}
                  height={16}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <span>Our Office</span>
              </div>

              <h5 className="font-semibold text-black text-lg">
                Trimsel Software
              </h5>

              <div className="mt-4 text-base font-medium sm:text-lg">
                <a
                  href="https://maps.app.goo.gl/nX3ZD9gEBCxwdTPg7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  No.21-B 5th Cross Street, South Phase Thiru VI <br />
                  KA Industrial Estate, Indira Nagar, Guindy, Chennai, Tamil
                  Nadu - 600032.
                </a>
              </div>

              <p className="mt-4 text-md text-green-600 font-medium">
                Mon–Fri 9:00 AM – 6:00 PM
              </p>
            </div>

            {/* RIGHT SIDE LOGO */}
            <div className="w-full md:w-[600px] h-[350px] rounded-xl overflow-hidden border shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=13.0125615,80.2014525&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />
    </main>
  );
}
