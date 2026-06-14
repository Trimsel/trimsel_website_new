"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Infrastructure & Pipeline Audit",
    icon: "/icons/web-approach1.svg",
    body: "We assess your current deployment process end-to-end — how code moves from developer laptop to production, where manual steps create bottlenecks, what breaks most often, and how long recovery takes. You get a clear report with prioritised recommendations.",
  },
  {
    title: "Pipeline Architecture & Tool Selection",
    icon: "/icons/web-approach2.svg",
    body: "Based on the audit, we design your target CI/CD architecture — selecting tools (Jenkins, GitHub Actions, GitLab CI, ArgoCD), defining environment strategy (dev/staging/production), and planning infrastructure as code using Terraform or CloudFormation.",
  },
  {
    title: "Implementation & Automation",
    icon: "/icons/web-approach3.svg",
    body: "We build the pipelines, configure infrastructure, set up container orchestration, implement monitoring and alerting, and deploy security scanning — all in parallel with your ongoing development. No big-bang cutovers.",
  },
  {
    title: "Migration & Validation",
    icon: "/icons/web-approach4.svg",
    body: "We migrate workloads incrementally — using blue/green or canary deployment strategies with rollback plans for each service. Every migration is validated against your SLOs before the old environment is decommissioned.",
  },
  {
    title: "Handover & Ongoing Operations",
    icon: "/icons/web-approach5.svg",
    body: "We train your engineers on the new tooling, hand over runbooks and incident playbooks, and monitor the system until your team is comfortable. For managed operations, we offer 24/7 monitoring, incident response, and infrastructure maintenance on agreed SLAs.",
  },
];

export default function DevOpsProcessAccordion() {
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
          How We Implement DevOps — From Audit to Autonomous Operations
        </h2>
        <p className="max-w-3xl text-left font-medium leading-relaxed text-gray-200">
          DevOps transformations fail when teams jump straight to tool adoption
          without understanding what&apos;s actually broken. Our five-stage
          process starts with an honest audit and ends with a team that can
          operate independently.
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
