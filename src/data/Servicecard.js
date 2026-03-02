"use client";
import Image from "next/image";

export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="flex min-h-[320px] w-full max-w-[380px] flex-col rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-4">
                <Image src={icon} alt={title} width={40} height={40} className="h-10 w-10" />
            </div>

            <h3 className="text-lg font-semibold text-black mb-3">
                {title}
            </h3>

            <p className="text-black font-medium leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            <button
                className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center transition"
                aria-label={`Read more about ${title}`}
            >
                →
            </button>
        </div>
    );
}
