"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { faqData } from "@/data/faqData";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const pathname = usePathname();


    const routeMap = {
        devops: "devops",
        mobile: "mobile",
        web: "web",
        cloud: "cloud",
        digital: "digital",
        ai: "ai",
    };


    const matchedKey = Object.keys(routeMap).find((key) =>
        pathname.toLowerCase().includes(key)
    );


    const currentFaqs =
        faqData[routeMap[matchedKey]] ||
        faqData.default;

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const renderFaq = (faq, index) => (
        <div
            key={index}
            className={`border rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index
                ? "border-b-2 border-b-[#1C7DBD] shadow-lg"
                : "shadow-md"
                }`}
        >
            <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-start p-5 text-left font-medium transition-all duration-300 ${openIndex === index ? "bg-blue-50" : "hover:bg-blue-50"
                    }`}
            >
                <span className="text-black">
                    {openIndex === index ? faq.answer : faq.question}
                </span>

                <Image
                    src={
                        openIndex === index
                            ? "/icons/chevron-up.svg"
                            : "/icons/chevron-down.svg"
                    }
                    alt="toggle"
                    width={22}
                    height={22}
                />
            </button>
        </div>
    );

    return (
        <section className="bg-white py-4">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">

                <h2 className="mb-12 mt-4 text-center text-2xl font-semibold text-[#1C75BC] sm:text-3xl md:text-4xl">
                    FREQUENTLY ASKED QUESTIONS
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {currentFaqs.map((faq, index) => renderFaq(faq, index))}
                </div>

            </div>
        </section>
    );
}