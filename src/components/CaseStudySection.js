"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudySection({
    tag = "OVERVIEW",
    title,
    description1,
    description2,
    bgColor,
    cardBg,
    buttonBg,
    link = "/contact",
    details = [],
    lineColor = "#1C75BC"
}) {
    return (
        <section
            className="w-full py-12 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16"
            style={{ backgroundColor: bgColor }}
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-stretch">

                {/* LEFT */}
                <div className="max-w-xl flex flex-col justify-between">
                    <div>
                        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                            {tag}
                        </h3>

                        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl mt-2">
                            {title}
                        </h2>

                        <div className="text-gray-600 font-medium space-y-4 leading-relaxed mt-4">
                            <p>{description1}</p>
                            <p>{description2}</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center items-center h-full mt-10 md:mt-0">
                    <div
                        className="w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full"
                        style={{ backgroundColor: cardBg }}
                    >
                        <div>
                            <p className="text-xl md:text-3xl text-center text-[#1C75BC] font-semibold mt-4 md:mt-6 uppercase">
                                Start your project
                            </p>

                            <h3 className="text-xl md:text-3xl text-center font-bold mt-4">
                                Interested in building something similar?
                            </h3>

                            <p className="text-sm mt-4 md:mt-6 text-center font-medium">
                                Request a free consultation for your next big idea.
                            </p>

                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full px-4 py-3 rounded-lg mt-8 border"
                            />
                        </div>

                        <Link
                            href={link}
                            className="w-full py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 mt-8"
                            style={{ backgroundColor: buttonBg }}
                        >
                            <span>Book A Free Consultation</span>

                            <Image
                                src="/Home/right-arrow.svg"
                                width={20}
                                height={20}
                                alt="RightArrow"
                            />
                        </Link>
                    </div>
                </div>

            </div>

            {/* 🔥 PROJECT DETAILS ADDED HERE */}
            {details.length > 0 && (
                <div className="mt-14 md:mt-24 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-4 md:gap-6 justify-items-start md:justify-items-center ml-2 sm:ml-8 md:ml-0">
                        {details.map((item, index) => (
                            <div
                                key={index}
                                className="pl-4 border-l-4"
                                style={{ borderColor: lineColor }}
                            >
                                <p className="text-gray-600 font-medium">{item.label}</p>
                                <p className="font-semibold break-words">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </section>
    );
}