"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurBlog() {
    const sideBlogs = [
        {
            image: "/Home/Blog1.svg",
            title: "Top 10 Mobile App Development Frameworks in 2023",
        },
        {
            image: "/Home/Blog2.svg",
            title: "Top 10 Mobile App Development Frameworks in 2023",
        },
    ];

    return (
        <section className="bg-white py-16 text-black">
            <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-[#1C75BC] text-center text-2xl font-semibold tracking-widest">
                    OUR BLOGS
                </h3>

                <h2 className="mt-4 text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                    Read Our Last Blogs And News
                </h2>

                <p className="mx-auto mt-4 max-w-3xl text-center font-medium text-black">
                    At Trimsel, there is continuous learning that happens as we work on
                    various projects. We also love to update and upgrade with the latest
                    innovations in the field of technology and apps.
                </p>

                <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
                    <div className="space-y-6">
                        {sideBlogs.map((blog) => (
                            <article
                                key={blog.image}
                                className="rounded-xl border border-slate-100 p-4 shadow-sm"
                            >
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <Image
                                        src={blog.image}
                                        alt="Blog Thumbnail"
                                        width={250}
                                        height={180}
                                        className="h-[180px] w-full rounded-lg object-cover sm:w-[220px]"
                                    />

                                    <div className="flex flex-col justify-center">
                                        <span className="mb-3 inline-block w-fit rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                            Development
                                        </span>

                                        <h2 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                                            {blog.title}
                                        </h2>

                                        <p className="text-sm text-gray-600">
                                            We’ve entered an age where our lives are becoming increasingly digital...
                                            <Link href="#" className="ml-1 font-medium text-blue-600 hover:underline">
                                                Read More
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <article className="rounded-xl border border-slate-100 p-4 shadow-sm">
                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src="/Home/Blog3.svg"
                                alt="Blog Thumbnail"
                                width={600}
                                height={300}
                                className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[340px]"
                            />
                        </div>

                        <div className="mt-4 p-2">
                            <span className="mb-3 inline-block w-fit rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                                Development
                            </span>

                            <h2 className="mb-4 text-xl font-bold text-gray-800">
                                How hybrid app development can help you build custom apps?
                            </h2>

                            <p className="text-sm text-gray-600">
                                Digitization has taken over every industry and business aspect. The pandemic only fuelled our shift tow...
                                <Link href="#" className="ml-1 font-medium text-blue-600 hover:underline">
                                    Read More
                                </Link>
                            </p>
                        </div>
                    </article>
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-1 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1896cd] hover:shadow-lg"
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
            </div>
        </section>
    );
}