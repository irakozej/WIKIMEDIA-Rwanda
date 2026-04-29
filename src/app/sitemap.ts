import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const BASE = "https://wikimedia.rw";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/projects",
    "/events",
    "/blog",
    "/get-involved",
    "/contact",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...routes, ...posts];
}
