import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays, dispatches and campaign briefings from the Wikimedia Rwanda community.",
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <PageHeader
        eyebrow="The Journal"
        title={
          <>
            Field notes from <em className="italic text-clay-500">the commons</em>.
          </>
        }
        lede="Essays, campaign reports and conversations with contributors. Written slowly, in every language that our community thinks in."
        crumbs={[{ href: "/", label: "Home" }, { label: "Journal" }]}
      />

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        {featured && (
          <div className="mb-12">
            <BlogCard post={featured} featured />
          </div>
        )}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
