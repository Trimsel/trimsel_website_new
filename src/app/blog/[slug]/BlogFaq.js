"use client";
import { useState } from "react";

export default function BlogFaq({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-10 pt-8 border-t border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faq.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              className="w-full flex items-start justify-between gap-3 p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-gray-900 text-sm leading-snug">
                {item.question}
              </span>
              <svg
                className={`flex-shrink-0 w-5 h-5 text-gray-400 mt-0.5 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
