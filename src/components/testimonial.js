"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import testimonialData from "@/data/testimonialdata";

const Marquee = dynamic(() => import("react-fast-marquee"));

export default function Testimonial() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            TESTIMONIALS
          </h3>
          <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
            Straight From the People We've Built For.
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            Every testimonial here comes from businesses we've worked closely
            with teams who trusted us with their ideas, their deadlines, and
            their goals. We'll let their words speak for themselves.
          </p>
        </div>

        {/* Marquee */}
        <Marquee speed={40} pauseOnHover gradient={false}>
          {testimonialData?.map((item) => (
            <div
              key={item.id}
              className="relative mx-3 w-[280px] h-[540px] flex flex-col rounded-lg bg-gray-100 px-5 pt-7 pb-8 shadow-lg sm:mx-6 sm:w-[340px] md:w-[420px]"
            >
              {/* LinkedIn Icon */}
              <Image
                src="/icons/linkedintestimonial.svg"
                alt="LinkedIn"
                width={25}
                height={25}
                className="absolute right-6 top-8 cursor-pointer transition hover:scale-110 sm:right-8 sm:top-10"
              />

              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1C75BC] text-white text-lg font-bold">
                  {item.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm font-semibold text-[#01AAEC]">
                    {item.role}
                  </p>
                  <p className="text-sm font-medium text-gray-500">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Background quote */}
              <span className="pointer-events-none absolute left-6 top-14 select-none font-serif text-[140px] leading-none text-[#01AAEC] opacity-10 sm:left-8 sm:text-[170px]">
                “
              </span>

              {/* Message */}
              <div className="mt-12 left-2 relative z-10">
                <p className="text-black font-medium">{item.message}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
