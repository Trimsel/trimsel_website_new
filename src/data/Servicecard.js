"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ icon, title, description, href }) {
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

            {/* Bottom: Arrow Button */}
            <div className="mt-6">
                <Link
                    href={href || "#"}
                    className="inline-flex items-center justify-center"
                >
                    <Image
                        src="/icons/mobile-stage-arrow.svg"
                        alt="arrow"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </Link>
            </div>
        </div>
    );
}
