"use client";

import ServiceCard from "../data/Servicecard";

export default function Whatwedo() {
  const services = [
    {
      title: "Mobile App Development",
      description:
        "Custom Android, iOS, and cross-platform apps built with Flutter and React Native — designed for real-world performance, intuitive UX, and long-term scalability.",
      icon: "/icons/Mobileapp.svg",
      href: "/mobile-app-development-chennai",
    },
    {
      title: "Web Development",
      description:
        "From fast-loading business websites to complex enterprise web platforms — built with React, Next.js, and Node.js with performance, security, and SEO baked in from day one.",
      icon: "/icons/Website.svg",
      href: "/web-development-company-chennai",
    },
    {
      title: "Cloud Computing",
      description:
        "Cloud migration, architecture design, and cost optimisation across AWS, Azure, and GCP — our certified cloud consultants have delivered 40% average cost savings for clients.",
      icon: "/icons/Cloudcomputing.svg",
      href: "/cloud-consulting-services",
    },
    {
      title: "DevOps Consulting Services",
      description:
        "We help development teams move faster without breaking things — CI/CD pipelines, Kubernetes orchestration, Infrastructure as Code, and DevSecOps automation that keeps your platform running at 99.9%+ uptime.",
      icon: "/icons/devops.svg",
      href: "/devops-consulting-services",
    },
    {
      title: "Digital Marketing",
      description:
        "Our performance-focused team handles SEO, paid ads, social campaigns, and content strategies that bring the right people to your business and turn them into real customers.",
      icon: "/icons/digitalmarketing.svg",
      href: "/digital-marketing-company-chennai",
    },
    {
      title: "AI Development",
      description:
        "AI works best when it solves a real problem. We help businesses bring intelligence into their operations — from chatbots, copilots, and intelligent search to computer vision and workflow automation that integrates with your existing systems.",
      icon: "/icons/AIML.svg",
      href: "/ai-development-company",
    },
  ];

  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
          WHAT WE DO
        </h3>
        <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
          Everything Your Product Needs, Engineered Under One Roof.
        </h2>

        <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
          We stay involved from planning through to post-launch, focused on
          building things that scale and last, not quick fixes that need
          rebuilding in a year.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ml-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
