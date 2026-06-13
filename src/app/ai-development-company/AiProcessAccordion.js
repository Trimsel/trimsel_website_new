"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Discovery & Problem Definition",
    icon: "/icons/web-approach1.svg",
    body: "We start by understanding the business problem clearly — what decision needs improving, what process is too slow, what data you have. No code is written until the problem is properly defined. This stage protects your budget from being spent on the wrong solution.",
  },
  {
    title: "Data Assessment & Preparation",
    icon: "/icons/web-approach2.svg",
    body: "We audit your existing data, identify gaps, clean and structure datasets, and assess whether your data volume and quality can support the AI approach you need. If your data isn't ready, we tell you honestly — before development starts.",
  },
  {
    title: "Model Development & Testing",
    icon: "/icons/web-approach3.svg",
    body: "We build, train, and rigorously test models against real-world scenarios — iterating until performance meets the bar your business needs. Evaluated with metrics that matter to your use case, not just benchmark scores.",
  },
  {
    title: "Integration & Deployment",
    icon: "/icons/web-approach4.svg",
    body: "We connect your AI system to the platforms and workflows where it needs to operate — built for reliability, security, and scale. Your team gets training on the system's output so they can use it from day one.",
  },
  {
    title: "Monitoring & Continuous Improvement",
    icon: "/icons/web-approach5.svg",
    body: "AI models drift over time as data changes. We monitor performance, set up alerts for accuracy degradation, and retrain models as needed — so your system stays accurate and useful long after launch.",
  },
];

export default function AiProcessAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative text-white py-16 md:py-20 px-4 sm:px-6"
      style={{
        backgroundImage: "url('/web-approach.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-start">
        <h2 className="text-left text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
          How We Build AI That Actually Gets Used
        </h2>
        <p className="max-w-3xl text-left font-medium leading-relaxed text-gray-200">
          Most AI projects fail not because of the technology — but because of
          poor planning, bad data, or systems that don't fit how people work.
          Our five-phase process is designed to avoid exactly that.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-2 gap-12 items-start">
        <div className="max-w-3xl mt-2">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="border-b border-white/30 pb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setActive(active === index ? null : index)}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className="shrink-0">
                      <Image
                        src={step.icon}
                        alt={step.title}
                        width={25}
                        height={25}
                      />
                    </div>
                    <h3 className="font-medium text-lg leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <div className="shrink-0 ml-2">
                    <Image
                      src="/icons/add-icon.svg"
                      width={20}
                      height={20}
                      alt="Toggle"
                    />
                  </div>
                </div>
                <div
                  className={`ml-8 overflow-hidden transition-all duration-300 ${
                    active === index
                      ? "mt-4 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm font-medium leading-relaxed text-gray-200">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
