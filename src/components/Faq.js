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
    pathname.toLowerCase().includes(key),
  );

  const currentFaqs = faqData[routeMap[matchedKey]] || faqData.default;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaq = (faq, index) => (
    <div
      key={index}
      className={`border rounded-lg overflow-hidden transition-all duration-300 ${
        openIndex === index
          ? "border-b-2 border-b-[#1C7DBD] shadow-lg"
          : "shadow-md"
      }`}
    >
      <button
        onClick={() => toggleFaq(index)}
        className={`w-full flex min-h-[90px] justify-between items-center outline-none p-6 text-left font-medium transition-all duration-300 ${
          openIndex === index ? "bg-[#F3FBFF]" : "hover:bg-gray-50"
        }`}
      >
        <span className="text-black text-[15px] sm:text-base pr-6 leading-relaxed">
          {openIndex === index ? faq.answer : faq.question}
        </span>

        <div className="shrink-0">
          <Image
            src={
              openIndex === index
                ? "/icons/chevron-up.svg"
                : "/icons/chevron-down.svg"
            }
            alt="toggle"
            width={28}
            height={28}
          />
        </div>
      </button>
    </div>
  );

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 mt-4 text-center text-2xl font-semibold text-[#1C75BC] sm:text-3xl md:text-4xl">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-8">
            {currentFaqs.map((faq, index) =>
              index % 2 === 0 ? renderFaq(faq, index) : null,
            )}
          </div>
          <div className="flex flex-col gap-8">
            {currentFaqs.map((faq, index) =>
              index % 2 !== 0 ? renderFaq(faq, index) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
