import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Wikimedia Rwanda's programmes — from Kinyarwanda Wikipedia to Wiki Loves Folklore, WikiGap, Wiki Clubs and AfroSports Rwanda.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our programmes"
        title={
          <>
            Thirteen <em className="italic text-clay-500">programmes</em>, one commons.
          </>
        }
        lede="From flagship Kinyarwanda editathons to photography contests, Wiki Clubs in secondary schools and regional collaborations with Burundi and the DRC — here is how the chapter spends its time."
        crumbs={[{ href: "/", label: "Home" }, { label: "Projects" }]}
      />

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 border-t border-ink-900/15 pt-16">
          <div>
            <h2 className="display text-[clamp(32px,4.5vw,56px)] text-ink-900 leading-[1.02] max-w-[16ch]">
              Every project is an invitation.
            </h2>
          </div>
          <div className="lg:pt-3">
            <p className="text-[17px] leading-relaxed text-ink-800">
              Whether you edit Wikipedia on your phone during lunch, photograph monuments on
              weekends, mentor a school Wiki Club or translate articles between Kinyarwanda
              and Swahili — the chapter has a place for the hours you can give.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-ink-900 text-paper px-5 py-3 text-sm font-medium shadow-brutal-sm hover:bg-clay-500 transition-colors"
              >
                Join a project →
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-ink-900/25 px-5 py-3 text-sm font-medium hover:border-ink-900 transition-colors"
              >
                Propose a partnership
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
