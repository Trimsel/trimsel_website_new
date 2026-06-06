import Image from "next/image";
import Link from "next/link";

/**
 * LatestInsights — server-safe presentational component.
 * Receives pre-fetched `posts` from the server page wrapper.
 *
 * Props:
 *   eyebrow     {string}
 *   heading     {string}
 *   description {string}
 *   posts       {Array}  — from getFilteredPosts() in blog.js
 *                          Each post: { slug, title, excerpt, tags[], coverImage }
 */
export default function LatestInsights({
  eyebrow = "LATEST INSIGHTS",
  heading = "Practical Guides From the Engineers and Strategists Who Build This Stuff",
  description = "Real-world experience from live projects — on mobile app development, AI engineering, cloud architecture, DevOps automation, and digital marketing. No filler, no recycled takes.",
  posts = [],
}) {
  if (!posts.length) return null;

  const [mainPost, ...sidePosts] = posts;

  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-4 sm:px-6">
        {eyebrow && (
          <h3 className="mt-4 text-center text-2xl font-semibold text-[#1C75BC] sm:text-3xl md:text-4xl">
            {eyebrow}
          </h3>
        )}

        <h2 className="mt-4 text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
          {heading}
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center font-medium">
          {description}
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left column — smaller cards */}
          <div className="space-y-6">
            {sidePosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-xl border border-slate-100 p-4 shadow-sm"
              >
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="relative h-[180px] w-full flex-shrink-0 overflow-hidden rounded-lg sm:w-[220px]">
                    <Image
                      src={post.coverImage || "/images/blog/default.webp"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    {post.tags?.[0] && (
                      <span className="mb-3 inline-block w-fit rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        {post.tags[0]}
                      </span>
                    )}

                    <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {post.excerpt?.slice(0, 120)}
                      {(post.excerpt?.length ?? 0) > 120 ? "… " : " "}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-600 hover:underline"
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right column — featured card */}
          <article className="rounded-xl border border-slate-100 p-4 shadow-sm">
            <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[280px] lg:h-[340px]">
              <Image
                src={mainPost.coverImage || "/images/blog/default.webp"}
                alt={mainPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="mt-4 p-2">
              {mainPost.tags?.[0] && (
                <span className="mb-3 inline-block rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                  {mainPost.tags[0]}
                </span>
              )}

              <h3 className="mb-4 text-xl font-bold text-gray-800">
                {mainPost.title}
              </h3>

              <p className="text-sm text-gray-600">
                {mainPost.excerpt?.slice(0, 160)}
                {(mainPost.excerpt?.length ?? 0) > 160 ? "… " : " "}
                <Link
                  href={`/blog/${mainPost.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 rounded-lg bg-[#27AAE1] px-6 py-3 font-semibold text-white hover:bg-[#1896cd]"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
