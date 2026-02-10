"use client";

export default function ServiceCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col w-full max-w-[380px] min-h-[360px]">
            <div className="mb-4">
                <img src={icon} alt={title} className="w-12 h-12" />
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
