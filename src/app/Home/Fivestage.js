"use client";

import Image from "next/image";

const stages = [
    {
        id: "01",
        title: "Ideation and Analysis",
        description:
            "At Trimsel, we treat every idea with care. We evaluate existing solutions and shape future-ready product direction.",
        icon: "/icons/stage1.svg",
        bg: "bg-[#44ABD3]",
    },
    {
        id: "02",
        title: "Design Theory",
        description:
            "We create clear wireframes and strong UI/UX systems to deliver practical and polished digital experiences.",
        icon: "/icons/stage2.svg",
        bg: "bg-[#DFF3E5]",
    },
    {
        id: "03",
        title: "Architecture and DevOps",
        description:
            "Our team plans architecture with scalability and security in mind, then builds reliable deployment foundations.",
        icon: "/icons/stage3.svg",
        bg: "bg-[#E16DB4]",
    },
    {
        id: "04",
        title: "Backend and Frontend Development",
        description:
            "We build robust backend services and performant frontend interfaces with the integrations needed for growth.",
        icon: "/icons/stage5.svg",
        bg: "bg-[#A576C2]",
    },
    {
        id: "05",
        title: "24/7 Maintenance and Support",
        description:
            "Every project includes ongoing monitoring, maintenance, and support to keep systems healthy and responsive.",
        icon: "/icons/stage4.svg",
        bg: "bg-[#F2F7FD]",
    },
];

export default function Fivestage() {
    return (
        <section className="bg-[url('/Home/Fivestagebg.svg')] bg-contain bg-center bg-no-repeat py-16 text-black">
            <div className="container mx-auto px-4 sm:px-6">
                <h3 className="text-center text-2xl font-semibold tracking-widest text-[#1C75BC]">
                    FIVE STAGE
                </h3>

                <h2 className="mt-4 text-center text-2xl font-semibold md:text-4xl">
                    The 5-Stage Model We Work On
                </h2>

                <p className="mx-auto mt-4 max-w-5xl text-center font-medium text-black">
                    We follow a structured five-stage delivery cycle to move from concept to launch with clarity and quality.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {stages.map((stage) => (
                        <article
                            key={stage.id}
                            className={`${stage.bg} relative flex min-h-[280px] flex-col rounded-2xl p-6 shadow-lg sm:min-h-[320px] sm:p-8`}
                        >
                            <span className="absolute right-5 top-4 text-5xl font-bold opacity-20 sm:text-6xl">
                                {stage.id}
                            </span>

                            <Image
                                src={stage.icon}
                                alt={stage.title}
                                width={84}
                                height={84}
                                className="mb-6 h-16 w-16 sm:h-20 sm:w-20"
                            />

                            <h3 className="text-xl font-bold text-black sm:text-2xl">{stage.title}</h3>
                            <p className="mt-4 text-sm font-medium leading-relaxed text-black/90 sm:text-base">
                                {stage.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
