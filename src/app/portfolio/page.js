"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
    const [active, setActive] = useState("ALL");

    const getCategories = (project) => {
        if (!project.category) return [];
        return Array.isArray(project.category)
            ? project.category
            : project.category.split(" | ");
    };

    const categories = [
        "ALL",
        ...new Set(projects.flatMap((project) => project.category)),
    ];


    const filteredProjects =
        active === "ALL"
            ? projects
            : projects.filter((project) =>
                project.category.includes(active)
            );

    const buttonStyle = (category) =>
        `px-6 py-2 rounded-lg border font-medium transition-all duration-300
    ${active === category
            ? "bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white border-none"
            : "border-gray-300 text-black hover:bg-gradient-to-r hover:from-[#1C76BD] hover:to-[#02A89B] hover:text-white"
        }`;

    return (
        <div>
            <Header transparent />

            {/* Hero Section */}
            <section className="h-screen bg-[url('/portfolio.svg')] bg-cover bg-center flex items-center pt-20">
                <div className="w-full pl-16 pb-4">
                    <h1 className="text-black text-5xl font-bold leading-tight">
                        We Create Successful Digital
                        <br />
                        Experiences, Turning Your Ideas Into
                        <br />
                        Great Applications.
                    </h1>

                    <p className="max-w-xl mt-6 text-lg text-black">
                        From innovative mobile apps to robust web platforms, we help businesses turn ideas into exceptional digital products. Our portfolio spans a range of solutions including Websites, Desktop and Mobile Applications for clients in diverse industries.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-wrap gap-4 mb-16 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActive(category)}
                                className={buttonStyle(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects */}
                    <div className="space-y-16">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 md:p-12"
                            >
                                <div
                                    className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Content Section */}
                                    <div className="flex-1">

                                        {/* Categories */}
                                        <div className="mb-4 text-lg font-semibold text-[#02A89B]">
                                            {project.category.map((cat, i) => (
                                                <span key={i}>
                                                    {cat}
                                                    {i !== project.category.length - 1 && (
                                                        <span className="mx-2 text-gray-400">|</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>

                                        <h2 className="mb-4 text-2xl md:text-4xl font-semibold">
                                            {project.title}
                                        </h2>

                                        <h3 className="mb-6 text-2xl font-semibold">
                                            {project.subtitle}
                                        </h3>

                                        <p className="mb-8 max-w-3xl mx-auto text-black font-medium">
                                            {project.description}
                                        </p>

                                        <Link
                                            href={`/portfolio/${project.id}`}
                                            className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#1C76BD] to-[#02A89B] text-white font-medium hover:opacity-90 transition duration-300"
                                        >
                                            View Case Study
                                        </Link>

                                    </div>

                                    {/* Image Section */}
                                    <div className="flex-1">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={600}
                                            height={400}
                                            className="rounded-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}
