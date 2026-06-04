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

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
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
