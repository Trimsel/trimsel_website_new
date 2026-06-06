"use client";
import { useState } from "react";
import Image from "next/image";

const tabActiveClass =
  "pb-2 text-md md:text-xl font-medium transition-all duration-300 border-b-2 border-[#1C76BD] bg-gradient-to-r from-[#1C76BD] to-[#02A89B] bg-clip-text text-transparent font-semibold";
const tabInactiveClass =
  "pb-2 text-md md:text-xl font-medium transition-all duration-300 border-b-2 border-transparent text-black hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:bg-clip-text hover:text-transparent";

/**
 * TechStackTabs
 *
 * Props:
 *   eyebrow   {string}  — blue subtitle above the heading
 *   heading   {string}  — main h2
 *   description {string} — body paragraph
 *   tabs      {Array}   — [{ name: string, tools: [{ name, icon }] }]
 *   bgColor   {string}  — Tailwind bg class (default "bg-[#f3f3f3]")
 */
export default function TechStackTabs({
  eyebrow = "Tools and Technology",
  heading,
  description,
  tabs = [],
  bgColor = "bg-[#f3f3f3]",
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name ?? "");

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-6xl mx-auto text-center">
        {eyebrow && (
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
            {eyebrow}
          </h3>
        )}

        {heading && (
          <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
            {heading}
          </h2>
        )}

        {description && (
          <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
            {description}
          </p>
        )}

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-36 mt-10">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={activeTab === tab.name ? tabActiveClass : tabInactiveClass}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tool icons — all tabs always in DOM, active one shown via CSS */}
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 lg:gap-48 mt-12 ml-0 sm:ml-4 lg:ml-20 ${
              activeTab === tab.name ? "" : "hidden"
            }`}
          >
            {tab.tools?.map((tool, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 relative">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <p className="text-md font-medium text-black">{tool.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
