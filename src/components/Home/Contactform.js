"use client";

import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { OurPartner1 } from "@/data/OurPartner";
import { OurPartner2 } from "@/data/OurPartner";

export default function Contactform() {
    return (
        <section className="bg-white text-black pt-8 pb-16">
            <div className="container mx-auto px-4">

                {/* TOP HEADING SECTION */}
                <div className="text-center">
                    <h3 className="text-[#1C75BC] text-2xl font-semibold tracking-widest">
                        GET INTO TOUCH
                    </h3>

                    <h2 className="mt-4 text-2xl md:text-4xl font-semibold">
                        Let’s Build Your Dream App — Get a Free Consultation!
                    </h2>

                    <p className="mt-4 max-w-3xl mx-auto text-black font-medium">
                        Have an idea or need expert help with your digital project? At
                        Trimsel, we help businesses of all sizes with end-to-end
                        development services — from websites and mobile apps to cloud,
                        DevOps, and digital marketing.
                    </p>
                </div>

                {/* TWO COLUMN SECTION */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* LEFT COLUMN */}
                    <div>
                        <h4 className="bg-gradient-to-r from-[#1C7DBD] to-[#05A898] bg-clip-text text-transparent text-center text-2xl font-semibold tracking-widest">
                            OUR PARTNERSHIP
                        </h4>

                        <p className="mt-4 text-center text-black font-medium">
                            Have an idea or need expert help with your digital project?
                            At Trimsel, we help businesses of all sizes with end-to-end
                            development services.
                        </p>

                        {/* Row 1 */}
                        <div className="mt-10">
                            <Marquee
                                speed={40}
                                direction="right"
                                pauseOnHover
                                gradient
                                gradientColor={[255, 255, 255]}
                            >
                                {OurPartner1.map((client, index) => (
                                    <div
                                        key={`row1-${index}`}
                                        className="mx-10 flex items-center justify-center"
                                    >
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                        {/* Row 2 */}
                        <div className="mt-6">
                            <Marquee
                                speed={40}
                                direction="left"   // opposite direction looks better
                                pauseOnHover
                                gradient
                                gradientColor={[255, 255, 255]}
                            >
                                {OurPartner2.map((client, index) => (
                                    <div
                                        key={`row2-${index}`}
                                        className="mx-10 flex items-center justify-center"
                                    >
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={60}
                                            height={60}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>


                    {/* RIGHT COLUMN (Example Placeholder) */}
                    <div>
                        <div className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10">
                            <h4 className="text-black text-center text-2xl font-semibold tracking-widest">
                                Start Your Project Discussion
                            </h4>

                            {/* Form */}
                            <form className="space-y-6 mt-6">

                                {/* Row 1 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-transparent border-b border-black text-black font-medium placeholder:text-gray-500 focus:outline-none pb-2"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full bg-transparent border-b border-black text-black font-medium placeholder:text-gray-500 focus:outline-none pb-2"
                                    />
                                </div>

                                {/* Row 2 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent border-b border-black text-black font-medium placeholder:text-gray-500 focus:outline-none pb-2"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company"
                                        className="w-full bg-transparent border-b border-black text-black font-medium placeholder:text-gray-500 focus:outline-none pb-2"
                                    />
                                </div>

                                {/* Row 3 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Where did you find us?*"
                                        className="w-full bg-transparent border-b border-black text-black font-medium placeholder:text-gray-500 focus:outline-none pb-2"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="w-full bg-transparent border-b border-black text-black font-medium placeholder:text-gray-500 focus:outline-none pb-2"
                                    />
                                </div>

                                {/* Textarea */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium">
                                        Tell about your project
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full border border-black rounded-lg p-3 focus:outline-none bg-white"
                                    ></textarea>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                    <div className="space-y-3">
                                        <div className="text-sm text-black">

                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick Icon"
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>
                                                    Your idea is 100% protected by our{" "}
                                                    <span className="font-semibold">
                                                        Non-Disclosure Agreement.
                                                    </span>
                                                </span>
                                            </div>

                                            <p className="mt-1 ml-6">
                                                Response guaranteed within 24 hours
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 text-lg">
                                            <span>5</span>
                                            <span>+</span>
                                            <span>4</span>
                                            <span>=</span>
                                            <input
                                                type="text"
                                                className="w-14 border-b border-black bg-transparent focus:outline-none text-center"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[#1C75BC] hover:bg-[#155d96] text-white px-6 py-2.5 rounded-md transition duration-300"
                                    >
                                        Get a Free Consultation
                                    </button>

                                </div>

                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
