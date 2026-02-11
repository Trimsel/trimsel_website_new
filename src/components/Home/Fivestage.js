"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Fivestage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <section className="bg-[url('/Home/Fivestagebg.svg')] bg-contain bg-center bg-no-repeat text-black py-16">
            <div className="container mx-auto px-6 relative">
                <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                    FIVE STAGE
                </h3>

                <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                    The 5-Stage Model We Work On
                </h2>

                <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                </p>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 mt-12 left-8">
                    {/* Stage 01 */}
                    <div
                        className="relative bg-[#44ABD3] text-white p-10
  rounded-2xl rounded-br-none
  min-h-[380px] w-[320px]
  flex flex-col justify-between"
                    >
                        {/* Top Image */}
                        <div className="absolute -top-8 left-10 flex items-center justify-center">
                            <img
                                src="/icons/stage1.svg" // replace with your image
                                alt="Ideation"
                                width={120}
                                height={120}
                                className="relative -top-6 -left-6"
                            />
                        </div>

                        {/* Number */}
                        <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                            01
                        </span>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mt-24">Ideation and Analysis.</h3>

                        <p className="text-black font-medium leading-relaxed opacity-90">
                            At Trimsel, we work on every idea like it’s our first. We not only
                            analyze existing solutions for the ones we work with but also
                            create futuristic solutions.
                        </p>
                    </div>

                    {/* Stage 02 */}
                    <div className="relative flex flex-col justify-center p-4 max-w-xs top-24">
                        {/* Top-right partial border */}
                        <div className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl">
                            {/* Top gradient stroke (rounded ends) */}
                            <span
                                className="absolute top-0 right-0 h-[4px] w-full
               bg-gradient-to-r from-white via-[#5AC56B] to-[#5AC56B]
               rounded-full"
                            ></span>

                            {/* Right gradient stroke (rounded ends) */}
                            <span
                                className="absolute top-0 right-0 w-[4px] h-full
               bg-gradient-to-b from-[#5AC56B] via-[#5AC56B] to-white
               rounded-full"
                            ></span>
                        </div>

                        {/* Top Image */}
                        <div className="absolute -top-8 left-10 flex items-center justify-center">
                            <img
                                src="/icons/stage2.svg"
                                alt="Ideation"
                                width={120}
                                height={120}
                                className="relative -top-6 -left-6"
                            />
                        </div>

                        <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                            02
                        </span>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Design Theory.
                        </h3>

                        <p className="text-black font-medium leading-relaxed opacity-90">
                            We have an excellent expertise of wireframing and design having
                            delivered the best UI/UX experience to different businesses.
                        </p>
                    </div>

                    {/* Stage 03 */}
                    <div
                        className="relative bg-[#E16DB4] text-white p-10
  rounded-2xl rounded-bl-none
  min-h-[380px] w-[320px]
  flex flex-col justify-between"
                    >
                        {/* Top Image */}
                        <div className="absolute -top-8 left-10 flex items-center justify-center">
                            <img
                                src="/icons/stage3.svg" // replace with your image
                                alt="Ideation"
                                width={120}
                                height={120}
                                className="relative -top-6 -left-6"
                            />
                        </div>
                        <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                            03
                        </span>

                        {/* Content */}
                        <h3 className="text-2xl font-bold mt-24">
                            Architecture and DevOps.
                        </h3>
                        <p className="text-black font-medium leading-relaxed opacity-90">
                            Trimsel experts look at every project from a scalability and
                            security point of view. Based on analysis, we set up the best
                            architecture necessary.
                        </p>
                    </div>
                </div>

                {/* ================= ROW 2 ================= */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mt-32 ml-14">
                    {/* Stage 05 */}
                    <div className="relative flex flex-col justify-center p-4 max-w-xs top-20 left-12">
                        {/* Top-right partial border */}
                        <div className="pointer-events-none absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl">
                            {/* Top gradient stroke (rounded ends) */}
                            <span
                                className="absolute top-0 right-0 h-[4px] w-full
               bg-gradient-to-r from-white via-[#5AC56B] to-[#5AC56B]
               rounded-full"
                            ></span>

                            {/* Right gradient stroke (rounded ends) */}
                            <span
                                className="absolute top-0 right-0 w-[4px] h-full
               bg-gradient-to-b from-[#5AC56B] via-[#5AC56B] to-white
               rounded-full"
                            ></span>
                        </div>

                        {/* Top Image */}
                        <div className="absolute -top-8 left-10 flex items-center justify-center">
                            <img
                                src="/icons/stage4.svg"
                                alt="Ideation"
                                width={120}
                                height={120}
                                className="relative -top-6 -left-6"
                            />
                        </div>
                        <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                            05
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mt-16">
                            24/7 Maintenance and Support
                        </h3>
                        <p className="text-black font-medium leading-relaxed opacity-90 mt-2">
                            Every project comes with 24/7 maintenance and dedicated support
                            teams.
                        </p>
                    </div>

                    {/* Stage 04 */}
                    <div
                        className="relative bg-[#A576C2] text-white p-10
  rounded-2xl rounded-bl-none
  min-h-[380px] w-[420px]
  flex flex-col justify-between left-12"
                    >
                        {/* Top Image */}
                        <div className="absolute -top-8 left-10 flex items-center justify-center">
                            <img
                                src="/icons/stage5.svg" // replace with your image
                                alt="Ideation"
                                width={120}
                                height={120}
                                className="relative -top-6 -left-6"
                            />
                        </div>
                        <span className="absolute top-4 right-8 text-7xl font-bold opacity-30">
                            04
                        </span>
                        <h3 className="text-2xl font-bold mt-24">
                            Backend & Frontend Development
                        </h3>
                        <p className="text-black font-medium leading-relaxed opacity-90">
                            We understand that for a successful web app development both backend and frontend processes are integral. We have an expert backend team that looks at integrating third-party servers, cloud servers based on the nature of the project. For existing businesses.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
