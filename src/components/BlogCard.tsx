import Link from "next/link";
import type { BlogPost } from "@/data/blog-posts";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col border border-ink-900/15 bg-paper overflow-hidden ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div
          className={`relative aspect-[16/9] ${
            featured ? "lg:aspect-[21/9]" : ""
          } bg-gradient-to-br from-clay-200 via-clay-300 to-clay-500 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[120px] italic text-paper/30 leading-none">
              {post.tag.charAt(0)}
            </span>
          </div>
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-paper/90 px-3 py-1 text-[11px] uppercase tracking-[0.22em]">
            {post.tag}
          </div>
        </div>

        <div className="p-6 lg:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-ink-600 uppercase tracking-[0.2em]">
            <time>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h3
            className={`mt-4 display text-ink-900 leading-[1.05] ${
              featured ? "text-[34px] lg:text-[42px]" : "text-[24px] lg:text-[28px]"
            }`}
          >
            {post.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-700 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-ink-700">{post.author}</span>
            <span className="inline-flex items-center gap-2 text-sm text-clay-500 group-hover:gap-3 transition-all">
              Read <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
