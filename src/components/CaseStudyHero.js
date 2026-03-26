import Image from "next/image";

export default function CaseStudyHero({
    tag = "THE CHALLENGE",
    title,
    description,
    image,
    bgColor = "#E6C57E", // 🔥 dynamic per page
}) {
    return (
        <section className="w-full py-16 px-6">
            <div
                className="max-w-7xl mx-auto relative overflow-hidden rounded-[30px] md:rounded-[40px] px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-16"
                style={{ backgroundColor: bgColor }}
            >

                {/* SHAPE CUT (top-right slant) */}
                <div className="absolute top-0 right-0 w-[120px] h-[120px] md:w-[220px] md:h-[220px] bg-white clip-slant" />

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* ===== LEFT CONTENT ===== */}
                    <div className="max-w-xl relative z-10">

                        {/* TAG */}
                        <h3 className="mb-4 text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                            {tag}
                        </h3>

                        {/* TITLE */}
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                            {title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-700 leading-relaxed text-md font-medium md:text-lg">
                            {description}
                        </p>
                    </div>

                    {/* ===== RIGHT IMAGE ===== */}
                    <div className="relative flex justify-center md:justify-end w-full">

                        <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-none md:w-[750px] lg:w-[900px]">

                            <Image
                                src={image}
                                alt="case study"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain mt-2 md:ml-4 md:mt-20 md:scale-110"
                                priority
                            />

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}