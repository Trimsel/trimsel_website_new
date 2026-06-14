"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Infrastructure Assessment",
    icon: "/icons/web-approach1.svg",
    body: "We audit your existing infrastructure — servers, applications, databases, networking, storage, and operational dependencies. This produces a clear migration readiness score and identifies which workloads move first, which need re-architecting, and which should stay on-premise.",
  },
  {
    title: "Cloud Strategy & Architecture Design",
    icon: "/icons/web-approach2.svg",
    body: "Based on the assessment, we design your target cloud architecture — choosing the right platform (AWS, Azure, or GCP), defining networking topology, selecting instance types and storage configurations, and planning for security, compliance, and disaster recovery. You approve the architecture before any migration begins.",
  },
  {
    title: "Migration & Deployment",
    icon: "/icons/web-approach3.svg",
    body: "We execute the migration using a phased approach — moving workloads in priority order with rollback plans for each stage. Each migration is tested in a staging environment before production cutover. We handle data migration, DNS transitions, SSL certificate management, and application reconfiguration.",
  },
  {
    title: "Security Hardening & Compliance",
    icon: "/icons/web-approach4.svg",
    body: "Once deployed, we harden the environment — configuring IAM policies, network security groups, encryption settings, backup schedules, and compliance monitoring. Vulnerability scans and penetration testing before declaring production-ready.",
  },
  {
    title: "Performance Optimisation & Cost Management",
    icon: "/icons/web-approach5.svg",
    body: "We optimise for both performance and cost — right-sizing instances, setting up auto-scaling policies, implementing CDN and caching layers, and reviewing billing to eliminate waste. Most clients see a 30-40% reduction in cloud spend within the first 90 days.",
  },
  {
    title: "Ongoing Monitoring & Managed Support",
    icon: "/icons/web-approach1.svg",
    body: "Cloud infrastructure needs continuous attention. We provide managed operations with 24/7 monitoring, proactive alerting, and dedicated support contacts with agreed SLAs — so your team focuses on building product, not managing servers.",
  },
];

export default function CloudProcessAccordion() {
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
          How We Take Your Infrastructure From Legacy to Production-Grade Cloud
        </h2>
        <p className="max-w-3xl text-left font-medium leading-relaxed text-gray-200">
          Cloud migration done right requires more than lifting servers into AWS.
          We follow a structured six-stage process that reduces risk, prevents
          downtime, and gives you full visibility at every step.
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
