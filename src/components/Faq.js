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

  const renderFaq = (faq, index) => {
    const isOpen = openIndex === index;
    return (
      <div
        key={index}
        className={`border rounded-lg overflow-hidden transition-all duration-300 ${
          isOpen
            ? "border-b-2 border-b-[#1C7DBD] shadow-lg"
            : "shadow-md"
        }`}
      >
        <button
          onClick={() => toggleFaq(index)}
          className={`w-full flex min-h-[60px] justify-between items-center outline-none px-4 py-3 text-left font-medium transition-all duration-300 ${
            isOpen ? "bg-[#F3FBFF]" : "hover:bg-gray-50"
          }`}
        >
          <span className="text-black text-[15px] sm:text-base pr-6 leading-relaxed">
            {faq.question}
          </span>

          <div className="shrink-0">
            <Image
              src={
                isOpen
                  ? "/icons/chevron-up.svg"
                  : "/icons/chevron-down.svg"
              }
              alt="toggle"
              width={28}
              height={28}
            />
          </div>
        </button>

        {/* Answer — always in DOM, CSS-hidden when collapsed */}
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="px-4 py-3 text-black text-[15px] sm:text-base leading-relaxed bg-[#F3FBFF]">
            {faq.answer}
          </p>
        </div>
      </div>
    );
  };

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
