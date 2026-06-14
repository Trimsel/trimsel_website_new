"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Marketing Audit & Competitor Analysis",
    icon: "/icons/web-approach1.svg",
    body: "We start by understanding where you stand — auditing your website's technical SEO, existing ad accounts, social presence, and content. We benchmark against your top 3 competitors to identify gaps and opportunities you can realistically win.",
  },
  {
    title: "Strategy & Channel Planning",
    icon: "/icons/web-approach2.svg",
    body: "Based on the audit, we build a channel-specific strategy — defining which mix of SEO, paid search, social media, and content will deliver the best ROI for your business goals and budget. Every recommendation is tied to measurable outcomes.",
  },
  {
    title: "Campaign Setup & Content Creation",
    icon: "/icons/web-approach3.svg",
    body: "We set up ad campaigns, create landing pages, produce content, and configure tracking — Google Analytics 4, conversion events, UTM parameters, and call tracking — so every rupee spent is attributable to a result. No vanity metrics.",
  },
  {
    title: "Launch & Active Optimisation",
    icon: "/icons/web-approach4.svg",
    body: "Campaigns go live with continuous A/B testing on ads, landing pages, and audience segments. We optimise weekly — reallocating budget from underperforming channels to what's driving qualified leads and conversions.",
  },
  {
    title: "Reporting & Growth Planning",
    icon: "/icons/web-approach5.svg",
    body: "Monthly reports show exactly what's working — traffic, leads, cost per acquisition, and ROAS — in plain language, not marketing jargon. We use the data to plan the next phase: scaling what works, cutting what doesn't, and identifying new growth levers.",
  },
];

export default function DmProcessAccordion() {
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
          How We Run Digital Marketing — From Audit to Measurable Growth
        </h2>
        <p className="max-w-3xl text-left font-medium leading-relaxed text-gray-200">
          Most agencies start running ads on day one without understanding the
          business. Our five-stage process starts with a proper audit so the
          strategy is built on data — not guesswork.
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
