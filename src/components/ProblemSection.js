import Image from "next/image";

export default function ProblemSection({
    tag = "PROBLEM FACED",
    title,
    description1,
    description2,
    bgColor,
    bgImage,
}) {
    const isTailwind = bgColor && (bgColor.includes("from-") || bgColor.includes("bg-"));

    return (
        <section className="w-full px-6 py-16">

            <div
                className={`relative max-w-7xl mx-auto rounded-[30px] px-8 py-14 md:px-16 md:py-16 overflow-hidden ${isTailwind ? `bg-gradient-to-br ${bgColor}` : ""
                    }`}
                style={isTailwind ? undefined : { backgroundColor: bgColor }}
            >

                {/* DROP BACKGROUND IMAGE */}
                {bgImage && (
                    <div className="absolute -left-24 -top-20 z-0 pointer-events-none">
                        <Image
                            src={bgImage}
                            alt="bg shape"
                            width={340}
                            height={340}
                            className="object-contain"
                        />
                    </div>
                )}

                {/* CONTENT */}
                <div className="relative max-w-3xl z-10">

                    {/* TAG */}
                    <h3 className="mb-2 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                        {tag}
                    </h3>

                    {/* TITLE */}
                    <h2 className="mb-8 text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                        {title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-gray-700 text-md md:lg font-medium leading-relaxed space-y-2">
                        {description1}
                        <br /> <br />
                        {description2}
                    </p>

                </div>
            </div>
        </section>
    );
}