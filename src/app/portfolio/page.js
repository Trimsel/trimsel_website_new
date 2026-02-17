"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function PortfolioPage() {
    const [active, setActive] = useState("All");

    const projects = [
        { id: 1, title: "Corporate Website", category: "Websites" },
        { id: 2, title: "E-Commerce Platform", category: "Websites" },
        { id: 3, title: "Food Delivery App", category: "Mobile Apps" },
        { id: 4, title: "Fitness Tracker", category: "Mobile Apps" },
        { id: 5, title: "Inventory Software", category: "DevOps & Cloud" },
        { id: 6, title: "Billing System", category: "DevOps & Cloud" },
    ];

    const filteredProjects =
        active === "All"
            ? projects
            : projects.filter((project) => project.category === active);

    const buttonStyle = (category) =>
        `px-6 py-2 rounded-lg border font-medium transition-all duration-300
        ${active === category
            ? "bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white"
            : "border-gray-300 text-black hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:text-white"
        }`;

    return (
        <div>
            <Header transparent />

            {/* Hero Section */}
            <section className="h-screen bg-[url('/portfolio.svg')] bg-cover bg-center flex items-center pt-20">
                <div className="w-full pl-16">
                    <h1 className="text-black text-5xl font-bold leading-tight">
                        We Create Successful Digital<br />
                        Experiences, Turning Your Ideas Into<br />
                        Great Applications.
                    </h1>

                    <p className="max-w-xl mt-6 text-lg text-black">
                        From innovative mobile apps to robust web platforms, we help businesses turn ideas into exceptional digital products. Our portfolio spans a range of solutions including Websites, Desktop and Mobile Applications for clients in diverse industries.
                    </p>
                </div>
            </section>

            {/* Next Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-4 mb-12">
                        <button onClick={() => setActive("All")} className={buttonStyle("All")}>
                            All
                        </button>
                        <button onClick={() => setActive("Mobile Apps")} className={buttonStyle("Mobile Apps")}>
                            Mobile Apps
                        </button>
                        <button onClick={() => setActive("Websites")} className={buttonStyle("Websites")}>
                            Websites
                        </button>
                        <button onClick={() => setActive("DevOps & Cloud")} className={buttonStyle("Desktop Apps")}>
                            DevOps & Cloud
                        </button>
                    </div>
                    {/* Portfolio Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500">
                                    {project.category}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
