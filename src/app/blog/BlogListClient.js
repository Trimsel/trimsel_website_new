"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogListClient({ posts }) {
  const [activeTag, setActiveTag] = useState("All");

  // Collect all unique tags across posts
  const allTags = useMemo(() => {
    const tags = posts.flatMap((p) => p.tags || []);
    return ["All", ...Array.from(new Set(tags))];
  }, [posts]);

  const filtered =
    activeTag === "All"
      ? posts
      : posts.filter((p) => (p.tags || []).includes(activeTag));

  return (
    <div>
      {/* Tag filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeTag === tag
                ? "bg-[#1C75BC] text-white border-[#1C75BC]"
                : "bg-white text-gray-700 border-gray-300 hover:border-[#1C75BC] hover:text-[#1C75BC]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-16">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Cover image */}
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <div className="relative h-48 w-full bg-gray-100">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <span className="text-[#1C75BC] text-4xl font-bold opacity-30">T</span>
                    </div>
                  )}
                </div>
              </Link>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Tags */}
                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-[#1C75BC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-2 hover:text-[#1C75BC] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                )}

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-medium">
                    {formatDate(post.date)}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-[#1C75BC] hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
