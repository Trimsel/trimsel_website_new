import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogFaq from "./BlogFaq";
import BlogSidebar from "./BlogSidebar";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let frontmatter;
  try {
    ({ frontmatter } = getPostBySlug(slug));
  } catch {
    return {};
  }

  const seo = frontmatter.seo || {};
  const canonical =
    seo.canonicalUrl || `https://www.trimsel.com/blog/${slug}`;

  const ogImage = seo.ogImage || frontmatter.coverImage;

  return {
    title: seo.metaTitle || frontmatter.title,
    description: seo.metaDescription || frontmatter.excerpt,
    alternates: { canonical },
    robots: seo.indexing === false ? { index: false } : undefined,
    openGraph: {
      type: "article",
      url: canonical,
      title: seo.metaTitle || frontmatter.title,
      description: seo.metaDescription || frontmatter.excerpt,
      publishedTime: frontmatter.date,
      locale: "en_IN",
      siteName: "Trimsel",
      images: ogImage
        ? [{ url: `https://www.trimsel.com${ogImage}`, width: 1200, height: 630, alt: frontmatter.title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      site: "@TrimselSoftwares",
      creator: "@TrimselSoftwares",
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Converts heading text to a URL-safe anchor id
function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Extracts h2/h3 headings from raw MDX source
function extractHeadings(source) {
  const headings = [];
  for (const line of source.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      headings.push({ level, text, id: slugify(text) });
    }
  }
  return headings;
}

// MDX component overrides — adds id to h2/h3 for anchor linking
const mdxComponents = {
  h2: ({ children, ...props }) => (
    <h2 id={slugify(children)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 id={slugify(children)} {...props}>
      {children}
    </h3>
  ),
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let frontmatter, rawContent;
  try {
    ({ frontmatter, content: rawContent } = getPostBySlug(slug));
  } catch {
    notFound();
  }

  const { content } = await compileMDX({
    source: rawContent,
    options: { parseFrontmatter: false },
    components: mdxComponents,
  });

  const stats = readingTime(rawContent);
  const seo = frontmatter.seo || {};
  const primaryTag = frontmatter.tags?.[0] || "Software Development";
  const headings = extractHeadings(rawContent);
  const postUrl = `https://www.trimsel.com/blog/${slug}`;

  // Support top-level faq (written by CMS) and legacy seo.faq
  const postFaq = frontmatter.faq?.length > 0
    ? frontmatter.faq
    : seo.faq?.length > 0
    ? seo.faq
    : null;

  // Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt || seo.metaDescription,
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    author: {
      "@type": "Organization",
      name: frontmatter.author || "Trimsel",
      url: "https://www.trimsel.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Trimsel",
      logo: { "@type": "ImageObject", url: "https://www.trimsel.com/logo.svg" },
    },
    image: frontmatter.coverImage
      ? `https://www.trimsel.com${frontmatter.coverImage}`
      : "https://www.trimsel.com/images/myherocloud.png",
    url: postUrl,
    mainEntityOfPage: postUrl,
  };

  // FAQ JSON-LD (only if post has FAQ data)
  const faqSchema = postFaq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: postFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  // Mobile share URLs (server-side, no encoding needed for <a href>)
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(frontmatter.title);
  const mobileShareLinks = [
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, bg: "bg-[#0A66C2]" },
    { name: "X", href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, bg: "bg-black" },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, bg: "bg-[#1877F2]" },
    { name: "WhatsApp", href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, bg: "bg-[#25D366]" },
  ];

  return (
    <main className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── ISSUE 1: Banner — full-width, object-contain + dark bg ── */}
      {frontmatter.coverImage && (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden bg-slate-900 pt-16">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
          {/* Dark gradient for breadcrumb readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {/* Breadcrumb overlaid on banner */}
          <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-5">
            <nav className="text-sm font-medium text-white/90">
              <Link href="/" className="hover:underline hover:text-white">
                Home
              </Link>
              {" • "}
              <Link href="/blog" className="hover:underline hover:text-white">
                Blog
              </Link>
              {" • "}
              <span className="text-white/70 line-clamp-1">{frontmatter.title}</span>
            </nav>
          </div>
        </div>
      )}

      {/* ── ISSUE 2: Two-column layout (desktop) ── */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className={frontmatter.coverImage ? "pt-8" : "pt-28"}>

          {/* No-cover breadcrumb */}
          {!frontmatter.coverImage && (
            <nav className="text-sm font-medium text-gray-500 mb-6">
              <Link href="/" className="hover:text-[#1C75BC]">Home</Link>
              {" • "}
              <Link href="/blog" className="hover:text-[#1C75BC]">Blog</Link>
              {" • "}
              <span className="text-gray-700 line-clamp-1">{frontmatter.title}</span>
            </nav>
          )}

          {/* Flex row: content left + sidebar right */}
          <div className="lg:flex lg:gap-8 lg:items-start">

            {/* Left column — main content */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                {/* Tags */}
                {frontmatter.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-[#1C75BC]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  {frontmatter.title}
                </h1>

                {/* Meta row */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium border-b border-gray-100 pb-6">
                  <span>By {frontmatter.author || "Trimsel"}</span>
                  <span>·</span>
                  <span>{formatDate(frontmatter.date)}</span>
                  <span>·</span>
                  <span>{stats.text}</span>
                </div>

                {/* Mobile share buttons — hidden on desktop */}
                <div className="lg:hidden flex items-center gap-2.5 mt-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-400 mr-1">Share</span>
                  {mobileShareLinks.map(({ name, href, bg }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share on ${name}`}
                      className={`text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-opacity hover:opacity-80 ${bg}`}
                    >
                      {name}
                    </a>
                  ))}
                </div>

                {/* MDX content */}
                <article className="prose prose-lg max-w-none mt-8
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
                  prose-strong:text-gray-900
                  prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700
                  prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                  prose-code:text-[#1C75BC] prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:overflow-x-auto
                  prose-img:rounded-lg">
                  {content}
                </article>

                {/* FAQ accordion — top-level faq (CMS) or legacy seo.faq */}
                {postFaq && <BlogFaq faq={postFaq} />}

                {/* Back to blog */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C75BC] hover:underline"
                  >
                    ← Back to Blog
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column — sticky sidebar (desktop only) */}
            <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 self-start">
              <BlogSidebar
                headings={headings}
                postUrl={postUrl}
                title={frontmatter.title}
              />
            </aside>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-10 mb-16 bg-gradient-to-r from-[#1C75BC] to-[#05A898] rounded-2xl p-8 sm:p-10 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Need help with {primaryTag}?
          </h2>
          <p className="text-white/90 font-medium mb-6 max-w-xl mx-auto">
            Trimsel&apos;s engineering team in Chennai has delivered 200+ projects
            across mobile, web, AI, and cloud. Let&apos;s talk about yours.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-[#1C75BC] px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Trimsel →
          </Link>
        </div>
      </div>
    </main>
  );
}
