"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurBlog({
  heading = "",
  subheading = "",
  description = "",
  blogs = [],
  mainBlog = {},
}) {
  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="mt-4 text-center text-2xl font-semibold text-[#1C75BC] sm:text-3xl md:text-4xl">
          {heading}
        </h3>

        <h2 className="mt-4 text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
          {subheading}
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center font-medium">
          {description}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left Blogs */}
          <div className="space-y-6">
            {blogs.map((blog) => (
              <article
                key={blog.image}
                className="rounded-xl border border-slate-100 p-4 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={250}
                    height={180}
                    className="h-[180px] w-full rounded-lg object-cover sm:w-[220px]"
                  />

                  <div className="flex flex-col justify-center">
                    <span className="mb-3 inline-block w-fit rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                      {blog.category}
                    </span>

                    <h2 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      {blog.title}
                    </h2>

                    <p className="text-sm text-gray-600">
                      {blog.description}
                      <Link
                        href={blog.link}
                        className="ml-1 text-blue-600 hover:underline"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Main Blog */}
          <article className="rounded-xl border border-slate-100 p-4 shadow-sm">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={mainBlog.image}
                alt={mainBlog.title}
                width={600}
                height={300}
                className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[340px]"
              />
            </div>

            <div className="mt-4 p-2">
              <span className="mb-3 inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                {mainBlog.category}
              </span>

              <h2 className="mb-4 text-xl font-bold text-gray-800">
                {mainBlog.title}
              </h2>

              <p className="text-sm text-gray-600">
                {mainBlog.description}
                <Link
                  href={mainBlog.link}
                  className="ml-1 text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white hover:bg-[#1896cd]"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
