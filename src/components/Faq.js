"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
    {
        question: "What services does trimsel provide?",
        answer: "Trimsel offers custom software development, mobile app development in Chennai, web design, cloud consulting, DevOps automation, digital marketing and quality engineering services."
    },
    {
        question: "What industries does trimsel serve?",
        answer: "The cost of custom application development varies based on project complexity, tech stack, timeline, and features. We offer flexible engagement models for startups, SMEs, and enterprises."
    },
    {
        question: "How much does custom application development cost?",
        answer: "Yes. Our DevOps consulting services include CI/CD pipeline setup, Kubernetes deployment, infrastructure automation using terraform, and cloud-native implementation across AWS, GCP, and Azure."
    },
    {
        question: "Do you offer devops and CI/CD automation?",
        answer: "Yes! Whether you need a dedication developer, a UI/UX designer , a cloud engineer, or a DevOps specialist. Hire full-time or on a project basis, and get a skilled  of your own team-without the overhead."
    },
    {
        question: "What makes trimsel different from other it service providers?",
        answer: "Our client-first approach, commitment to innovation, and cross-functional expertise make us a reliable digital transformation partner. We deliver scalable, and future-ready tech solution, not just code."
    },

    {
        question: "What services does trimsel provide?",
        answer: "Trimsel offers custom software development, mobile app development in Chennai, web design, cloud consulting, DevOps automation, digital marketing and quality engineering services."
    },
    {
        question: "What industries does trimsel serve?",
        answer: "The cost of custom application development varies based on project complexity, tech stack, timeline, and features. We offer flexible engagement models for startups, SMEs, and enterprises."
    },
    {
        question: "How much does custom application development cost?",
        answer: "Yes. Our DevOps consulting services include CI/CD pipeline setup, Kubernetes deployment, infrastructure automation using terraform, and cloud-native implementation across AWS, GCP, and Azure."
    },
    {
        question: "Do you offer devops and CI/CD automation?",
        answer: "Yes! Whether you need a dedication developer, a UI/UX designer , a cloud engineer, or a DevOps specialist. Hire full-time or on a project basis, and get a skilled  of your own team-without the overhead."
    },
    {
        question: "What makes trimsel different from other it service providers?",
        answer: "Our client-first approach, commitment to innovation, and cross-functional expertise make us a reliable digital transformation partner. We deliver scalable, and future-ready tech solution, not just code."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const leftFaqs = faqData.slice(0, 5);
    const rightFaqs = faqData.slice(5, 10);

    const renderFaq = (faq, index) => (
        <div
            key={index}
            className={`border rounded-lg overflow-hidden transition-colors duration-300 
                ${openIndex === index
                    ? "border-b-2 border-b-[#1C7DBD] shadow-lg"
                    : "shadow-md"
                }`}
        >
            <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-start p-5 text-left font-medium 
    transition-all duration-300 rounded-lg
    ${openIndex === index
                        ? "bg-blue-50"
                        : "hover:bg-blue-50"
                    }`}
            >


                <span className="text-black transition-colors duration-300">
                    {openIndex === index ? faq.answer : faq.question}
                </span>

                <Image
                    src={openIndex === index ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"}
                    alt="toggle arrow"
                    width={22}
                    height={22}
                    className="flex-shrink-0 self-center"
                />


            </button>
        </div>
    );

    return (
        <section className="bg-white py-4">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">

                <h2 className="mb-12 mt-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                    FREQUENTLY ASKED QUESTIONS
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {leftFaqs.map((faq, index) => renderFaq(faq, index))}
                    </div>

                    <div className="space-y-4">
                        {rightFaqs.map((faq, index) => renderFaq(faq, index + 5))}
                    </div>
                </div>

            </div>
        </section>
    );
}
