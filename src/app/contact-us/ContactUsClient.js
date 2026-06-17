"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { useState } from "react";
import Testimonial from "@/components/testimonial";
import Faq from "@/components/Faq";
import { trackEvent } from "@/lib/analytics";

export default function ContactUs() {
  const [active, setActive] = useState("Mobile App");

  // Form field state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Submission state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, service: active, message }),
      });
      if (res.ok) {
        setSuccess(true);
        trackEvent("form_submit", { service: active });
        setName(""); setEmail(""); setPhone(""); setCompany(""); setMessage("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  const services = [
    { name: "Mobile App", icon: "/contactus8.svg" },
    { name: "AI / ML", icon: "/contactus9.svg" },
    { name: "DevOps", icon: "/contactus10.svg" },
    { name: "Web Dev", icon: "/contactus11.svg" },
    { name: "Cloud", icon: "/contactus12.svg" },
    { name: "Digital Marketing", icon: "/contactus13.svg" },
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
            Get in Touch with{" "}
            <span className="text-blue-600 font-bold">Trimsel</span>{" "}
            — Let&apos;s Build Something That Works
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
              { icon: "/contactus1.svg", text: "200+ Projects" },
              { icon: "/contactus2.svg", text: "4.8★ Rating" },
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
                  <p className="text-lg font-semibold">200+</p>
                  <p className="text-md text-white font-medium">PROJECTS</p>
                </div>

                <div className="h-8 w-px bg-gray-500"></div>

                <div className="px-4">
                  <p className="text-lg font-semibold">4.8★</p>
                  <p className="text-md text-white font-medium">RATING</p>
                </div>

                <div className="h-8 w-px bg-gray-500"></div>

                <div className="px-4">
                  <p className="text-lg font-semibold">Since 2020</p>
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
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-semibold shrink-0">
                    1
                  </span>

                  <div>
                    <h6 className="font-medium">
                      Submit your form or WhatsApp us
                    </h6>
                    <p className="text-gray-500 text-sm font-medium">
                      We confirm receipt immediately — you&apos;ll know we got your message.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-semibold shrink-0">
                    2
                  </span>

                  <div>
                    <h6 className="font-medium">
                      Our team reviews your requirements
                    </h6>
                    <p className="text-gray-500 text-sm font-medium">
                      A relevant engineer or strategist reviews your brief and prepares questions or a preliminary assessment — typically within a few hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-sm text-white font-semibold shrink-0">
                    3
                  </span>

                  <div>
                    <h6 className="font-medium">
                      You receive a detailed quote
                    </h6>
                    <p className="text-gray-500 text-sm font-medium">
                      Within 24 hours, you get a clear proposal with scope, timeline, team structure, and pricing — no vague &ldquo;it depends&rdquo; estimates.
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
            <form onSubmit={handleSubmit} className="p-5 space-y-4" noValidate>
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
                className="border border-gray-200 p-2 rounded-md text-md font-medium w-full bg-gray-50"
              />

              {/* Success state */}
              {success ? (
                <div className="py-8 text-center space-y-3">
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">Message sent successfully!</p>
                  <p className="text-sm text-gray-500 font-medium">We&apos;ll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="text-sm text-[#27AAE1] underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {/* INPUTS */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <label className="text-md font-semibold text-gray-800 mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-200 p-2 rounded-md text-md font-medium"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-md font-semibold text-gray-800 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-200 p-2 rounded-md text-md font-medium"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-md font-semibold text-gray-800 mb-1">
                        Phone
                      </label>
                      <input
                        placeholder="Phone No"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border border-gray-200 p-2 rounded-md text-md font-medium"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-md font-semibold text-gray-800 mb-1">
                        Company
                      </label>
                      <input
                        placeholder="Startup / Corp"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="border border-gray-200 p-2 rounded-md text-md font-medium"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-md font-semibold text-gray-800 mb-1">
                      Project Details
                    </label>
                    <textarea
                      required
                      placeholder="Describe your project, goals, timeline..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full border border-gray-200 p-3 rounded-md text-md font-medium h-24"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  )}

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

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#27AAE1] text-white py-3 rounded-lg text-md font-medium hover:bg-[#1d96c8] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? "Sending…" : "Send My Request"}</span>
                    {!loading && (
                      <Image
                        src="/Home/right-arrow.svg"
                        width={18}
                        height={18}
                        alt="RightArrow"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    )}
                  </button>
                </>
              )}

              <Link
                href="https://wa.me/917200841581?text=Hi%20Trimsel%20team!%20I'd%20like%20to%20chat%20about%20a%20project."
                className="w-full flex items-center justify-center gap-2 text-[#15803D] text-sm border border-gray-200 rounded-lg py-3 hover:bg-gray-50 transition-all duration-200"
              >
                <Image src="/lock.svg" alt="whatsapp" width={18} height={18} />
                Or message us on WhatsApp
              </Link>
            </form>
          </div>
        </div>
      </section>

      {/* ── OUR OFFICES ── */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-black text-lg font-bold mb-6">
            <Image
              src="/locationcontactus.svg"
              alt="Location icon"
              width={16}
              height={16}
              style={{ width: "auto", height: "auto" }}
            />
            <span>Our Offices</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Chennai */}
            <div className="bg-[#f4f6f8] rounded-xl p-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1C75BC]">
                Headquarters
              </p>
              <h5 className="font-semibold text-black text-lg">
                Chennai Office
              </h5>
              <p className="text-base font-medium text-gray-700 leading-relaxed">
                No.21-B 5th Cross Street, South Phase Thiru VI KA Industrial
                Estate, Indira Nagar, Guindy, Chennai, Tamil Nadu — 600032
              </p>
              <p className="text-sm text-green-600 font-medium">
                Mon–Sat 9:00 AM – 6:00 PM
              </p>
              <a
                href="https://maps.app.goo.gl/nX3ZD9gEBCxwdTPg7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1C9ACF] text-sm font-semibold hover:underline mt-1"
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
            <div className="bg-[#f4f6f8] rounded-xl p-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#27AAE1]">
                Branch Office
              </p>
              <h5 className="font-semibold text-black text-lg">
                Tirunelveli Office
              </h5>
              <p className="text-base font-medium text-gray-700 leading-relaxed">
                1st Floor, Crystal Plaza State Bank, 138/2, NGO B Colony, New
                Colony, Tirunelveli, Tamil Nadu — 627007
              </p>
              <p className="text-sm text-green-600 font-medium">
                Mon–Sat 9:00 AM – 6:00 PM
              </p>
              <a
                href="https://maps.google.com/?q=Crystal+Plaza+Tirunelveli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1C9ACF] text-sm font-semibold hover:underline mt-1"
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

          {/* Map — Chennai */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden border shadow-sm">
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
      </section>

      <Testimonial />

      <Faq />
    </main>
  );
}
