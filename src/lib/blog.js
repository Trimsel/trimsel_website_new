import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Returns all blog posts sorted by date (newest first).
 * Each entry contains slug + all frontmatter fields.
 */
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      // Normalise tags — trim whitespace, dedupe
      const tags = (data.tags || []).map((t) => t.trim()).filter(Boolean);

      return { slug, ...data, tags };
    });

  return posts
    .filter((post) => post.seo?.indexing !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Returns up to `limit` posts filtered by tags (case-insensitive).
 * Matching posts come first; remaining slots are filled with latest posts.
 */
export function getFilteredPosts(filterTags = [], limit = 3) {
  const posts = getAllPosts();

  if (!filterTags.length) return posts.slice(0, limit);

  const lowerTags = filterTags.map((t) => t.toLowerCase());
  const matching = posts.filter((p) =>
    p.tags?.some((t) => lowerTags.includes(t.toLowerCase()))
  );

  if (matching.length >= limit) return matching.slice(0, limit);

  const matchingSlugs = new Set(matching.map((p) => p.slug));
  const rest = posts.filter((p) => !matchingSlugs.has(p.slug));
  return [...matching, ...rest].slice(0, limit);
}

/**
 * Returns frontmatter + raw MDX body for a single post.
 */
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const tags = (data.tags || []).map((t) => t.trim()).filter(Boolean);

  return { frontmatter: { ...data, tags }, content };
}
