"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ icon, title, description, href }) {
    return (
        <div className="flex flex-col h-full min-h-[320px] w-full max-w-[380px] rounded-xl bg-white p-6 shadow-xl justify-between">
            <div className="flex flex-col flex-1">
                {/* ICON */}
                <div className="mb-4">
                    <Image src={icon} alt={title} width={40} height={40} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-black mb-3">
                    {title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-black font-medium leading-relaxed">
                    {description}
                </p>
            </div>

            {/* ARROW (ALWAYS BOTTOM LEFT) */}
            <div className="mt-6">
                <Link href={href || "#"}>
                    <Image
                        src="/icons/mobile-stage-arrow.svg"
                        alt="arrow"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        </div>
    );
}