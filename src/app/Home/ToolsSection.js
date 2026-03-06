"use client";

import { useState } from "react";
import Image from "next/image";
import orbitData from "@/data/orbitData";

export function ToolsSection() {
  const categories = [
    { name: "AI/ML", icon: "/icons/Tools/ai.svg" },
    { name: "Frontend Programming Languages", icon: "/icons/Tools/frontend.svg" },
    { name: "Backend Programming Languages", icon: "/icons/Tools/backend.svg" },
    { name: "Database", icon: "/icons/Tools/database.svg" },
    { name: "Digital Marketing", icon: "/icons/digital.svg" },
    { name: "Cloud", icon: "/icons/Tools/cloud.svg" },
    { name: "DevOps", icon: "/icons/Tools/devops.svg" },
  ];

  const [activeCategory, setActiveCategory] = useState("AI/ML");
  const data = orbitData[activeCategory] ?? { outer: [], inner: [] };

  const CENTER = 300;
  const OUTER_RADIUS = 260; // slightly larger orbit circle
  const INNER_RADIUS = 185; // slightly larger inner circle

  return (
    <section className="bg-[#f4f5f7] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADING */}
        <div className="text-center mb-14">
        <h3 className="text-4xl font-bold text-[#1C75BC]">
          TOOLS AND TECHNOLOGIES
         </h3>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Core technologies that power Trimsel&apos;s solutions.
          </p>
        </div>

        <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row md:items-stretch">

          {/* LEFT PANEL */}
          <div className="space-y-6 bg-gradient-to-b from-[#2d6ea3] to-[#1f5f8b] p-6 text-white md:w-[45%] md:p-10">
            {categories.map((item) => (
              <div
                key={item.name}
                onClick={() => setActiveCategory(item.name)}
                className={`cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 sm:px-6 sm:py-4 flex items-center justify-between
  ${activeCategory === item.name
                    ? "bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/30"
                    : "bg-white/5 hover:bg-white/10 hover:translate-x-2"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-sm font-medium sm:text-base">{item.name}</span>
                </div>

                <span>→</span>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="flex items-center justify-center bg-white p-4 sm:p-8 md:p-10 md:w-[45%]">
            <div className="relative aspect-square w-full max-w-[580px] mx-auto">

              <svg viewBox="0 0 600 600" className="w-full h-full">

                {/* OUTER DASHED */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={OUTER_RADIUS}
                  stroke="#1f2937"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                />

                {/* INNER DASHED */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={INNER_RADIUS}
                  stroke="#1f2937"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                />

                {/* CENTER HUB */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r="60"
                  fill="white"
                  stroke="#1C75BC"
                  strokeWidth="3"
                />
                <text
                  x={CENTER}
                  y={CENTER + 5}
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="600"
                  fill="#1C75BC"
                >
                  TECH
                </text>

                {/* OUTER ORBIT */}
                <g
                  className="animate-spin-slow"
                  style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                >
                  {(data?.outer || []).map((logo, index) => {
                    const total = data.outer.length;
                    if (!total) return null;

                    // angle offset added for visual balance
                    const angle =
                      (index / total) * 2 * Math.PI -
                      Math.PI / 2 +
                      Math.PI / total;

                    const x =
                      CENTER + OUTER_RADIUS * Math.cos(angle);
                    const y =
                      CENTER + OUTER_RADIUS * Math.sin(angle);

                    return (
                      <image
                        key={index}
                        href={logo}
                        width="72"
                        height="72"
                        transform={`translate(${x} ${y}) translate(-36 -36)`}
                      />
                    );
                  })}

                  {/* Decorative Small Circles (Outer - Corrected) */}
                  {data?.outer?.length > 1 && (() => {
                    const total = data.outer.length;
                    const gap = (2 * Math.PI) / total;

                    // SAME base offset used in logo placement
                    const baseOffset = -Math.PI / 2 + Math.PI / total;

                    const angle1 = baseOffset + gap / 2;
                    const angle2 = angle1 + Math.PI;

                    const x1 = CENTER + OUTER_RADIUS * Math.cos(angle1);
                    const y1 = CENTER + OUTER_RADIUS * Math.sin(angle1);

                    const x2 = CENTER + OUTER_RADIUS * Math.cos(angle2);
                    const y2 = CENTER + OUTER_RADIUS * Math.sin(angle2);

                    return (
                      <>
                        <circle cx={x1} cy={y1} r="18" fill="#1C7EBD" />
                        <circle cx={x2} cy={y2} r="18" fill="#02A89B" />
                      </>
                    );
                  })()}
                </g>

                {/* INNER ORBIT */}
                {/* ================= INNER ORBIT (Clock Based Layout) ================= */}
                <g
                  className="animate-spin-reverse"
                  style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
                >
                  {data?.inner?.slice(0, 3).map((logo, index) => {
                    // Fixed clock positions: 12, 3, 9
                    const clockAngles = [
                      -Math.PI / 2, // 12 o'clock
                      0,            // 3 o'clock
                      Math.PI,      // 9 o'clock
                    ];

                    const angle = clockAngles[index];

                    const x = CENTER + INNER_RADIUS * Math.cos(angle);
                    const y = CENTER + INNER_RADIUS * Math.sin(angle);

                    return (
                      <image
                        key={index}
                        href={logo}
                        width="72"
                        height="72"
                        transform={`translate(${x} ${y}) translate(-36 -36)`}
                      />
                    );
                  })}

                  {/* 6 o'clock Small Decorative Circle */}
                  {data?.inner?.length > 0 && (() => {
                    const angle = Math.PI / 2; // 6 o'clock

                    const x = CENTER + INNER_RADIUS * Math.cos(angle);
                    const y = CENTER + INNER_RADIUS * Math.sin(angle);

                    return (
                      <circle
                        cx={x}
                        cy={y}
                        r="20"
                        fill="#02A89B"
                      />
                    );
                  })()}
                </g>

              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}