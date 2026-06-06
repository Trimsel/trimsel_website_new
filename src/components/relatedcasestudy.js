import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesSection({ tag, heading, studies = [] }) {
    return (
        <section className="w-full px-6 py-16 bg-[#f5f3ee]">
            <div className="max-w-7xl mx-auto">

                {/* TOP TAG */}
                <h3 className="mb-4 text-center text-2xl font-semibold leading-tight text-[#1C75BC] sm:text-3xl md:text-4xl">
                    {tag}
                </h3>

                {/* HEADING */}
                <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-900 leading-snug mt-4">
                    {heading}
                </h2>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-10">
                    {studies.map((item, index) => (
                        <div key={index}>

                            {/* IMAGE CARD */}
                            <div className="rounded-2xl overflow-hidden mt-8">
                                <div className="bg-blue-100 p-6">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={300}
                                        className="object-contain w-full"
                                    />
                                </div>
                            </div>

                            {/* CONTENT */}
                            <h3 className="text-xl font-semibold text-gray-900 mt-4 ml-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 text-lg font-medium mb-3 max-w-md ml-2">
                                {item.description}
                            </p>

                            {/* LINK */}
                            <Link
                                href={item.slug}
                                className="text-blue-500 text-lg font-medium inline-flex items-center gap-1 ml-2"
                            >
                                Read Case Study...
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}