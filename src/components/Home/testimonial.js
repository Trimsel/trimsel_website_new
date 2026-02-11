"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import testimonialData from "@/data/testimonialdata";

export default function Testimonial() {
    return (
        <section className="bg-white py-16 overflow-hidden">
            <div className="w-full">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                        TESTIMONIALS
                    </h3>
                    <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                        What Clients are Saying About Our Collaboration
                    </h2>
                </div>

                {/* Marquee */}
                <Marquee
                    speed={40}
                    pauseOnHover
                    gradient={false}
                    autoFill={true}   // 🔥 makes it continuous smoothly
                >
                    {testimonialData?.map((item) => (
                        <div
                            key={item.id}
                            className="relative mx-6 w-[350px] md:w-[450px] 
                            min-h-[270px] bg-gray-100 px-6 py-8 rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* LinkedIn Icon */}
                            <Image
                                src="/icons/linkedintestimonial.svg"
                                alt="LinkedIn"
                                width={25}
                                height={25}
                                className="absolute top-14 right-12 cursor-pointer hover:scale-110 transition"
                            />

                            {/* User Info */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-20 h-20">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="80px"
                                        className="rounded-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-lg">
                                        {item.name}
                                    </h4>
                                    <h5 className="text-md font-semibold text-[#01AAEC]">
                                        {item.role}
                                    </h5>
                                </div>
                            </div>

                            {/* 🔥 Background Quote - ADD THIS HERE */}
                            <span className="absolute left-8 top-26 text-[200px] font-serif text-[#01AAEC] opacity-10 leading-none select-none pointer-events-none">
                                “
                            </span>

                            {/* Message */}
                            <div className="mt-12 left-2 relative z-10">
                                <p className="text-black font-medium">
                                    {item.message}
                                </p>
                            </div>
                        </div>
                    ))}
                </Marquee>

            </div>
        </section>
    );
}
