const isProd = process.env.NODE_ENV === "production";
const repo = "WIKIMEDIA-Rwanda";

// Allow overriding the base path so we can flip from
//   https://irakozej.github.io/WIKIMEDIA-Rwanda/  (project page)
// to a custom domain like https://wikimedia.rw/ by setting
// NEXT_PUBLIC_BASE_PATH="" at build time.
const fallbackBasePath = isProd ? `/${repo}` : "";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : fallbackBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only emit static export during production builds — keeps `next dev`
  // happy with metadata routes (sitemap.xml, opengraph-image, etc.).
  output: isProd ? "export" : undefined,
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
