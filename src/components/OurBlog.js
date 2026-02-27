"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurBlog() {
    return (
        <section className="bg-white text-black py-16">
            <div className="container mx-auto">
                {/* Heading */}
                <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                    OUR BLOGS
                </h3>

                <h2 className="mt-4 text-center text-2xl md:text-4xl font-semibold">
                    Read Our Last Blogs And News
                </h2>

                <p className="mt-4 max-w-3xl mx-auto text-center text-black font-medium">
                    At Trimsel, there is continuous learning that happens as we work on
                    various projects. We also love to update and upgrade with the latest
                    innovations in the field of technology and apps.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 h-full mt-12">
                {/* FIRST COLUMN (Split into 2 rows) */}
                <div className="grid grid-rows-2 gap-6">
                    {/* Row 1 */}
                    <div className="max-w-3xl bg-white ml-12">
                        <div className="flex flex-col md:flex-row">
                            {/* LEFT IMAGE */}
                            <Image
                                src="/Home/Blog1.svg"
                                alt="Blog Thumbnail"
                                width={250}
                                height={180}
                                className="w-[250px] h-[180px] object-cover mt-4"
                            />

                            {/* RIGHT CONTENT */}
                            <div className="p-6 flex flex-col justify-center md:w-[60%] mt-4">
                                {/* Category */}
                                <span className="inline-block w-fit px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md mb-4">
                                    Development
                                </span>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-gray-800 mb-5">
                                    Top 10 Mobile App Development Frameworks in 2023
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4">
                                    We’ve entered an age where our lives are becoming increasingly
                                    digital...
                                    <Link
                                        href="#"
                                        className="text-blue-600 font-medium hover:underline ml-1"
                                    >
                                        Read More
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="max-w-3xl bg-white ml-12 mt-4">
                        <div className="flex flex-col md:flex-row">
                            {/* LEFT IMAGE */}
                            <Image
                                src="/Home/Blog2.svg"
                                alt="Blog Thumbnail"
                                width={250}
                                height={180}
                                className="w-[250px] h-[180px] object-cover mt-4"
                            />

                            {/* RIGHT CONTENT */}
                            <div className="p-6 flex flex-col justify-center md:w-[60%] mt-6">
                                {/* Category */}
                                <span className="inline-block w-fit px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md mb-4">
                                    Development
                                </span>

                                {/* Title */}
                                <h2 className="text-xl font-bold text-gray-800 mb-5">
                                    Top 10 Mobile App Development Frameworks in 2023
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4">
                                    We’ve entered an age where our lives are becoming increasingly
                                    digital...
                                    <Link
                                        href="#"
                                        className="text-blue-600 font-medium hover:underline ml-1"
                                    >
                                        Read More
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECOND COLUMN */}
                <div className="max-w-3xl bg-white mr-8">
                    <div className="flex flex-col">
                        {/* TOP IMAGE */}
                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src="/Home/Blog3.svg"
                                alt="Blog Thumbnail"
                                width={600}
                                height={300}
                                className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
                            />
                        </div>

                        {/* BOTTOM CONTENT */}
                        <div className="p-6 flex flex-col mt-4">
                            {/* Category */}
                            <span className="inline-block w-fit px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-md mb-4">
                                Development
                            </span>

                            {/* Title */}
                            <h2 className="text-xl font-bold text-gray-800 mb-5">
                                How hybrid app development can help you build custom apps?
                            </h2>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4">
                                Digitization has taken over every industry and business aspect.
                                The pandemic only fuelled our shift tow...
                                <Link
                                    href="#"
                                    className="text-blue-600 font-medium hover:underline ml-1"
                                >
                                    Read More
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1 bg-[#27AAE1] 
             text-white px-8 py-4 rounded font-medium"
                >
                    View All Blogs
                    <Image
                        src="/Home/right-arrow.svg"
                        width={20}
                        height={20}
                        alt="RightArrow"
                    />
                </Link>
            </div>
        </section>
    );
}
