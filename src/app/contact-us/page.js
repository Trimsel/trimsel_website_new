"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contactform from "@/components/Contactform";
import Client from "@/components/Client";
import Testimonial from "@/components/testimonial";
import { useState } from "react";


export default function ContactUs() {

    const [active, setActive] = useState("Mobile App");

    const services = [
        { name: "Mobile App", icon: "/icons/mobile.png" },
        { name: "AI / ML", icon: "/icons/ai.png" },
        { name: "DevOps", icon: "/icons/devops.png" },
        { name: "Web Dev", icon: "/icons/web.png" },
        { name: "Cloud", icon: "/icons/cloud.png" },
        { name: "Consulting", icon: "/icons/consult.png" },
    ];


    return (
        <main>
            <Header />

            <section className="relative w-full h-[500px] overflow-hidden">

                {/* Background */}
                <Image
                    src="/contactusbg.svg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover object-bottom"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-52">

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
                        Get in touch with{" "}
                        <span className="text-blue-600 font-bold">Trimsel</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-3 text-gray-600 text-sm md:text-base">
                        We reply within 24 hours. No spam, no obligation.
                    </p>

                    {/* Pills */}
                    <div className="flex gap-4 mt-5 flex-wrap justify-center">
                        {[
                            "Available Mon-Sat",
                            "Response < 24 hrs",
                            "Chennai, India",
                        ].map((text, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full shadow-sm border border-white/30 text-sm text-gray-700"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                {text}
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-3xl border-t mt-6 border-gray-300/60" />

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-6 mt-6">

                        {[
                            { icon: "/icons/check.png", text: "50+ Projects", bg: "bg-green-100" },
                            { icon: "/icons/star.png", text: "4.9 Rating", bg: "bg-blue-100" },
                            { icon: "/icons/shield.png", text: "NDA Protected", bg: "bg-teal-100" },
                            { icon: "/icons/bolt.png", text: "Fast Delivery", bg: "bg-yellow-100" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-700">

                                <div className={`w-8 h-8 flex items-center justify-center rounded-md ${item.bg}`}>
                                    <Image
                                        src={item.icon}
                                        alt={item.text}
                                        width={16}
                                        height={16}
                                    />
                                </div>

                                {item.text}
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            <section>
                <div className="grid grid-cols-2 gap-6 p-6 bg-[#f4f6f8] min-h-screen">

                    {/* ================= LEFT SIDE ================= */}
                    <div className="space-y-6">

                        {/* QUICK CONTACT */}
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <h3 className="text-sm text-gray-400 mb-4">QUICK CONTACT</h3>

                            <div className="grid grid-cols-2 gap-3">
                                <Link href="#" className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <Image src="/icons/whatsapp.png" width={20} height={20} alt="" />
                                        <div>
                                            <p className="text-sm font-medium">WhatsApp</p>
                                            <p className="text-xs text-gray-400">Chat with us now</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="#" className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <Image src="/icons/phone.png" width={20} height={20} alt="" />
                                        <div>
                                            <p className="text-sm font-medium">Call Us</p>
                                            <p className="text-xs text-gray-400">+91 98765 43210</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="#" className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <Image src="/icons/email.png" width={20} height={20} alt="" />
                                        <div>
                                            <p className="text-sm font-medium">Email</p>
                                            <p className="text-xs text-gray-400">hello@firmsite.com</p>
                                        </div>
                                    </div>
                                </Link>

                                <Link href="#" className="flex items-center justify-between border p-3 rounded-lg hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <Image src="/icons/calendar.png" width={20} height={20} alt="" />
                                        <div>
                                            <p className="text-sm font-medium">Schedule a Call</p>
                                            <p className="text-xs text-gray-400">Book 30 min slot</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* SOCIAL PROOF */}
                        <div className="bg-[#0f172a] text-white p-5 rounded-xl">
                            <p className="text-xs text-gray-400 mb-4">SOCIAL PROOF</p>

                            <div className="flex justify-between text-center mb-4">
                                <div>
                                    <p className="text-lg font-semibold">50+</p>
                                    <p className="text-xs text-gray-400">PROJECTS</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">4.9</p>
                                    <p className="text-xs text-gray-400">RATING</p>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">8yr</p>
                                    <p className="text-xs text-gray-400">EXPERIENCE</p>
                                </div>
                            </div>

                            <div className="bg-[#1e293b] p-4 rounded-lg">
                                <p className="text-sm text-gray-300 mb-3">
                                    “Firmsite delivered our app 2 weeks ahead of schedule.
                                    Communication was excellent throughout the project.”
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs">
                                        RK
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Ravi Kumar</p>
                                        <p className="text-xs text-gray-400">FinTech Startup, Bangalore</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PROMISE */}
                        <div className="bg-white p-5 rounded-xl shadow-sm">
                            <p className="text-sm font-semibold mb-3">⚡ Our response promise</p>

                            <div className="space-y-3 text-sm">
                                <div className="flex gap-3">
                                    <span className="text-blue-600 font-bold">1</span>
                                    <p>Submit your form or WhatsApp us</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-blue-600 font-bold">2</span>
                                    <p>Our team reviews your requirements</p>
                                </div>
                                <div className="flex gap-3">
                                    <span className="text-blue-600 font-bold">3</span>
                                    <p>You receive a detailed quote</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT SIDE ================= */}
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">

                        {/* HEADER */}
                        <div className="bg-[#0f172a] text-white p-5">
                            <h2 className="text-lg font-semibold">Get a Free Quote</h2>
                            <p className="text-xs text-gray-400">
                                Describe your project and we'll respond in 24hrs.
                            </p>
                            <span className="inline-block mt-2 text-xs bg-green-600 px-2 py-1 rounded">
                                ● Replies within 24h
                            </span>
                        </div>

                        {/* FORM */}
                        <div className="p-5 space-y-4">

                            {/* SERVICE SELECT */}
                            <div>
                                <p className="text-sm mb-2">Select service</p>

                                <div className="grid grid-cols-3 gap-3">
                                    {services.map((s) => (
                                        <button
                                            key={s.name}
                                            type="button"
                                            onClick={() => setActive(s.name)}
                                            className={`border rounded-lg p-3 text-sm flex flex-col items-center gap-1 transition-all duration-200
                  ${active === s.name
                                                    ? "border-blue-600 bg-blue-50 text-blue-600 shadow-sm scale-[1.03]"
                                                    : "border-gray-200 hover:bg-gray-50"
                                                }`}
                                        >
                                            <Image src={s.icon} width={20} height={20} alt="" />
                                            {s.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* SELECTED SERVICE (AUTO CHANGE) */}
                            <input
                                value={active}
                                readOnly
                                className="border p-2 rounded-md text-sm w-full bg-gray-50"
                            />

                            {/* INPUTS */}
                            <div className="grid grid-cols-2 gap-3">
                                <input placeholder="Your name" className="border p-2 rounded-md text-md font-medium" />
                                <input placeholder="you@company.com" className="border p-2 rounded-md text-md font-medium" />
                                <input placeholder="+91" className="border p-2 rounded-md text-md font-medium" />
                                <input placeholder="Startup / Corp" className="border p-2 rounded-md text-md font-medium" />
                            </div>

                            <textarea
                                placeholder="Describe your project, goals, timeline..."
                                className="w-full border p-3 rounded-md text-md font-medium h-24"
                            />

                            {/* BUTTON */}
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-md font-medium hover:bg-blue-700">
                                Send My Request →
                            </button>

                            <Link href="#" className="block text-center text-green-600 text-sm">
                                Or message us on WhatsApp
                            </Link>

                        </div>
                    </div>
                </div>
            </section>


            <Contactform />

            <Client />

            <Testimonial />

            <Footer />
        </main>
    )
}