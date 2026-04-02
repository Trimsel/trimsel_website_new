"use client";

import ServiceCard from "../data/Servicecard";

export default function Whatwedo() {
    const services = [{ title: "Mobile App Development", description: "As a top mobile app development company in Chennai, we deliver custom Android, iOS & cross-platform solutions with exceptional UX, performance, and scalability.", icon: "/icons/Mobileapp.svg", href: "/mobile-app-development-chennai", },
    { title: "Web Application Development", description: "We’re a leading website development company in Chennai building fast, SEO-friendly websites and enterprise-grade web applications that scale with your business.", icon: "/icons/Website.svg", href: "/web-development-company-chennai", },
    { title: "AI Development", description: "Bring AI to the heart of your business with solutions like chatbots, copilots, intelligent search, computer vision, and workflow automation.", icon: "/icons/AIML.svg", href: "/ai-development-company" },
    { title: "DevOps Consulting Services", description: "Our DevOps services in India bring automation, CI/CD, and container orchestration (Kubernetes, Docker) to boost development speed and infrastructure reliability.", icon: "/icons/devops.svg", href: "/devops-consulting-services", },
    { title: "Cloud Computing ", description: "Our cloud consulting experts help you migrate, modernize, and optimize with AWS, Azure, and GCP for scalable and cost-effective cloud infrastructure.", icon: "/icons/Cloudcomputing.svg", href: "/cloud-consulting-services", },
    { title: "Digital Marketing", description: "As a performance-driven digital marketing agency in Chennai, we offer SEO, PPC, social ads & content strategies to help you grow visibility and leads.", icon: "/icons/digitalmarketing.svg", href: "/digital-marketing-company-chennai", },
    ];

    return (
        <section className="bg-white text-black py-16">
            <div className="container mx-auto px-6">
                <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                    WHAT WE DO
                </h3>
                <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                    We pride ourselves on being the one stop shop for all your needs
                </h2>

                <p className="mt-4 max-w-5xl mx-auto text-center text-black font-medium">
                    We envision, design, build and support solutions that transform and elevate your digital presence. Our expertise extends to clients worldwide enabling them to achieve global recognition and standard.
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
