import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import PartnerMarquee from "@/components/PartnerMarquee";
import Newsletter from "@/components/Newsletter";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog-posts";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Who we are */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-4">
              Who we are
            </div>
            <h2 className="display text-[clamp(40px,6vw,80px)] text-ink-900 leading-[0.98]">
              A Rwandan chapter,
              <br />
              <em className="italic text-clay-500">globally</em> wired.
            </h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[18px] leading-relaxed text-ink-800">
              Wikimedia Rwanda — officially registered as{" "}
              <strong className="font-semibold">Open Source Knowledge Rwanda</strong> — is an
              independent non-profit based in Kigali. We create and improve articles on
              Wikimedia projects in Kinyarwanda, English, French and Swahili, with an
              unapologetic emphasis on the Kinyarwanda Wikipedia.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-700">
              Every editathon, photo walk, Wiki Club session and community retreat is a small
              act of rebalancing: shifting the centre of gravity of the world's free knowledge
              a little closer to where we live.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-ink-900 pb-1 hover:text-clay-500 hover:border-clay-500 transition-colors"
              >
                Our full story
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border-b border-ink-900/40 pb-1 hover:text-clay-500 hover:border-clay-500 transition-colors"
              >
                Browse programmes
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Featured Programmes */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-3">
              Featured programmes
            </div>
            <h2 className="display text-[clamp(40px,6vw,80px)] text-ink-900 max-w-[16ch] leading-[0.98]">
              Thirteen <em className="italic">ways</em> to build the commons.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-ink-900 text-paper px-5 py-3 text-sm font-medium shadow-brutal-sm hover:bg-clay-500 transition-colors"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <PartnerMarquee />

      {/* Latest journal */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-3">
              The Journal
            </div>
            <h2 className="display text-[clamp(40px,6vw,80px)] text-ink-900 max-w-[14ch] leading-[0.98]">
              Dispatches from the <em className="italic">field</em>.
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-b border-ink-900 pb-1 hover:text-clay-500 hover:border-clay-500 transition-colors"
          >
            All writing <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {recentPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} featured={i === 0 && false} />
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
