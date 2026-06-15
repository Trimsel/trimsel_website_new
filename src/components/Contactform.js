"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { OurPartner1 } from "@/data/OurPartner";
import { OurPartner2 } from "@/data/OurPartner";
import { trackEvent } from "@/lib/analytics";

const Marquee = dynamic(() => import("react-fast-marquee"));

const SERVICES = [
  "Mobile App",
  "Web Dev",
  "Cloud",
  "DevOps",
  "AI / ML",
  "Digital Marketing",
];

const COUNTRIES = [
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "Germany", code: "DE", flag: "🇩🇪" },
  { name: "Singapore", code: "SG", flag: "🇸🇬" },
];

// Simple math captcha — numbers are fixed so server can validate the answer
const CAPTCHA_A = 5;
const CAPTCHA_B = 4;
const CAPTCHA_ANSWER = String(CAPTCHA_A + CAPTCHA_B);

export default function Contactform({
  eyebrow = "GET INTO TOUCH",
  heading = "Got an Idea? Let's Make It Real.",
  subheading = "Whether you're starting from scratch or scaling an existing product, tell us what you're working on and our software development team in Chennai will figure out the best way to build it together.",
  formTitle = "Start Your Project Discussion",
  defaultService = "",
}) {
  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(defaultService);
  const [referralSource, setReferralSource] = useState("");
  const [message, setMessage] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Country dropdown
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Submission state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Close country dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side math captcha check
    if (captchaInput.trim() !== CAPTCHA_ANSWER) {
      setError("Captcha answer is incorrect. Please try again.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          service,
          message,
          referralSource,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        trackEvent("form_submit", { service: service || "General" });
        // Reset form
        setName(""); setPhone(""); setEmail(""); setCompany("");
        setService(defaultService); setReferralSource(""); setMessage("");
        setCaptchaInput("");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-[#F3FBFF] text-black pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* TOP HEADING SECTION */}
        <div className="text-center">
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            {eyebrow}
          </h3>

          <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            {heading}
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-black font-medium">
            {subheading}
          </p>
        </div>

        {/* TWO COLUMN SECTION */}
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
          {/* LEFT COLUMN */}
          <div className="mt-4 md:mt-12">
            <h4 className="bg-gradient-to-r from-[#1C7DBD] to-[#05A898] bg-clip-text text-center text-xl font-bold tracking-[0.12em] text-transparent sm:text-2xl">
              OUR TECHNOLOGY PARTNERS
            </h4>

            <h5 className="text-center text-xl font-semibold text-black sm:text-2xl">
              Backed by the World&apos;s Most Trusted Technology Platforms
            </h5>

            <p className="mt-4 text-center text-black font-medium">
              We team up with the platforms that the world&apos;s best businesses run
              on. Our technology partnerships mean every solution we build for
              you is powered by tools that are proven, trusted, and built to
              perform.
            </p>

            {/* Row 1 */}
            <div className="mt-12">
              <div suppressHydrationWarning>
                <Marquee speed={40} direction="right" pauseOnHover gradient gradientColor={[255, 255, 255]}>
                  {OurPartner1.map((client, index) => (
                    <div key={`row1-${index}`} className="mx-10 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={80}
                        height={80}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Row 2 */}
            <div className="mt-12">
              <div suppressHydrationWarning>
                <Marquee speed={40} direction="left" pauseOnHover gradient gradientColor={[255, 255, 255]}>
                  {OurPartner2.map((client, index) => (
                    <div key={`row2-${index}`} className="mx-10 flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={80}
                        height={80}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — Form */}
          <div>
            <div className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h4 className="text-center text-xl font-semibold tracking-[0.12em] text-black sm:text-2xl">
                {formTitle}
              </h4>

              {/* Success state */}
              {success ? (
                <div className="mt-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">Message sent successfully!</p>
                  <p className="text-gray-600 text-sm">
                    We&apos;ll review your message and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-sm text-[#1C75BC] underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 mt-6" noValidate>
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-black bg-transparent pb-2 font-medium text-black placeholder:text-gray-500 focus:border-[#1C75BC] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-b border-black bg-transparent pb-2 font-medium text-black placeholder:text-gray-500 focus:border-[#1C75BC] focus:outline-none"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-black bg-transparent pb-2 font-medium text-black placeholder:text-gray-500 focus:border-[#1C75BC] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border-b border-black bg-transparent pb-2 font-medium text-black placeholder:text-gray-500 focus:border-[#1C75BC] focus:outline-none"
                    />
                  </div>

                  {/* Service select */}
                  <div>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full border-b border-black bg-transparent pb-2 font-medium text-black focus:border-[#1C75BC] focus:outline-none"
                    >
                      <option value="" disabled>Service you&apos;re interested in</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Where did you find us?*"
                      value={referralSource}
                      onChange={(e) => setReferralSource(e.target.value)}
                      className="w-full border-b border-black bg-transparent pb-2 font-medium text-black placeholder:text-gray-500 focus:border-[#1C75BC] focus:outline-none"
                    />

                    <div className="relative" ref={dropdownRef}>
                      <div
                        onClick={() => setOpen(!open)}
                        className="flex cursor-pointer items-center justify-between border-b border-black pb-2"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{selectedCountry.flag}</span>
                          <span className="font-medium text-black">{selectedCountry.name}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {open && (
                        <div className="absolute z-50 w-full bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-y-auto border">
                          {COUNTRIES.map((country) => (
                            <div
                              key={country.code}
                              onClick={() => { setSelectedCountry(country); setOpen(false); }}
                              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              <span className="text-lg">{country.flag}</span>
                              <span>{country.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Tell about your project
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-black bg-white p-3 focus:border-[#1C75BC] focus:outline-none"
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  )}

                  {/* Bottom Section */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-4">
                      {/* NDA */}
                      <div className="text-sm text-black">
                        <div className="flex items-center gap-2">
                          <Image src="/icons/tick.svg" alt="Tick Icon" width={16} height={16} className="shrink-0" />
                          <p>
                            Your idea is 100% protected by our{" "}
                            <span className="font-semibold">Non-Disclosure Agreement.</span>
                          </p>
                        </div>
                        <p className="mt-1 ml-6">Response guaranteed within 24 hours</p>
                      </div>

                      {/* Captcha + Button */}
                      <div className="flex flex-wrap items-center gap-6 md:justify-between">
                        <div className="flex items-center gap-3 text-lg font-medium">
                          <span>{CAPTCHA_A}</span>
                          <span>+</span>
                          <span>{CAPTCHA_B}</span>
                          <span>=</span>
                          <input
                            type="text"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            className="w-16 border-b border-black bg-transparent focus:outline-none text-center"
                            aria-label="Captcha answer"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="whitespace-nowrap rounded-lg bg-[#1C75BC] px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#155d96] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                          {loading ? "Sending…" : "Get a Free Consultation"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* AWARDS & RECOGNITIONS */}
        <div className="mt-16">
          <h4 className="bg-gradient-to-r from-[#1C7DBD] to-[#05A898] bg-clip-text text-center text-xl font-semibold tracking-[0.12em] text-transparent sm:text-2xl">
            AWARDS & RECOGNITIONS
          </h4>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            <Image src="/partner/award1.svg" alt="Award 1" width={150} height={80} className="object-contain" style={{ width: "auto", height: "auto" }} />
            <Image src="/partner/award2.svg" alt="Award 2" width={150} height={80} className="object-contain" style={{ width: "auto", height: "auto" }} />
            <Image src="/partner/award3.svg" alt="Award 3" width={150} height={80} className="object-contain" style={{ width: "auto", height: "auto" }} />
            <Image src="/partner/award4.svg" alt="Award 4" width={150} height={80} className="object-contain" style={{ width: "auto", height: "auto" }} />
            <Image src="/partner/award5.svg" alt="Award 5" width={140} height={80} className="object-contain" style={{ width: "auto", height: "auto" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
