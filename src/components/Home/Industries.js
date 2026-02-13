"use client";

import Image from "next/image";
import Link from "next/link";


export default function Clients() {
  return (
    <section className="bg-[#F5F6FF]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 text-center">

          <h2 className="mt-4 text-[#1C75BC] text-center text-2xl md:text-4xl font-semibold">
            INDUSTRIES WE SERVE
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
            Android App Solutions for Various Industries help businesses
            streamline operations, enhance customer engagement, and boost
            efficiency. From healthcare and education to retail and
            logistics, our tailored Android apps meet specific industry
            needs.
          </p>
        </div>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">

          {[
            { name: "Healthcare", bg: "#CBE6FC", icon: "/icons/healthcare.svg" },
            { name: "On-Demand", bg: "#ACFFCE", icon: "/icons/on-demand.svg" },
            { name: "Entertainment", bg: "#EDAFF7", icon: "/icons/entertainment.svg" },
            { name: "Logistics", bg: "#FAD4B6", icon: "/icons/logistics.svg" },
            { name: "E-Commerce", bg: "#FDA8A6", icon: "/icons/ecommerce.svg" },
            { name: "Real Estate", bg: "#F9DF89", icon: "/icons/real-estate.svg" },
            { name: "Food Delivery", bg: "#FFCACE", icon: "/icons/food-delivery.svg" },
            { name: "Grocery", bg: "#DCCFCB", icon: "/icons/grocery.svg" },
            { name: "Travel", bg: "#A3D5FD", icon: "/icons/travel.svg" },
            { name: "Restaurant", bg: "#D4F7AA", icon: "/icons/restaurant.svg" },
            { name: "Media", bg: "#E080F9", icon: "/icons/media.svg" },
            { name: "EduTech", bg: "#7AEE7F", icon: "/icons/edutech.svg" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex h-[100px] w-[120px] sm:h-[110px] sm:w-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-white/60 shadow-md transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="object-contain sm:w-[48px] sm:h-[48px]"
              />

              <span className="text-center text-xs sm:text-sm font-semibold text-black">
                {item.name}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}