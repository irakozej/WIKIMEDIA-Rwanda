import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://wikimedia.rw/sitemap.xml",
    host: "https://wikimedia.rw",
  };
}
