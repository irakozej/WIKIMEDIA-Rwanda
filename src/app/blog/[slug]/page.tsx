import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-ink-900/15 bg-parchment">
        <div className="max-w-[900px] mx-auto px-5 lg:px-10 pt-10 pb-16">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Journal" },
              { label: post.tag },
            ]}
          />
          <div className="mt-8 text-[11px] uppercase tracking-[0.28em] text-clay-500">
            {post.tag} · {formatDate(post.date)} · {post.readingTime}
          </div>
          <h1 className="mt-5 display text-[clamp(40px,7vw,92px)] text-ink-900 leading-[1.02]">
            {post.title}
          </h1>
          <p className="mt-6 text-[19px] leading-relaxed text-ink-800 max-w-[62ch]">
            {post.excerpt}
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-ink-700">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-clay-500 text-paper font-display text-lg">
              {post.author
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>
            <div>
              <div className="font-medium text-ink-900">{post.author}</div>
              <div className="text-xs text-ink-600">Wikimedia Rwanda contributor</div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-[720px] mx-auto px-5 lg:px-0 py-20">
        <div className="prose-content space-y-6 text-[17px] leading-[1.75] text-ink-800">
          {post.body.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-[20px] leading-[1.65] first-letter:float-left first-letter:font-display first-letter:text-[84px] first-letter:leading-[0.8] first-letter:pr-3 first-letter:pt-2 first-letter:text-clay-500"
                  : ""
              }
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-ink-900/15 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm hover:text-clay-500 transition-colors"
          >
            <ArrowLeft size={14} /> All writing
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 text-sm hover:text-clay-500 transition-colors"
          >
            Join the chapter <ArrowRight size={14} />
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-ink-900/15 bg-parchment">
          <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
            <h2 className="display text-[clamp(28px,4vw,48px)] text-ink-900 mb-10">
              Keep reading
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {others.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
