import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { accentMap } from "@/lib/utils";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const accent = accentMap[project.accent];
  return (
    <article
      className={`group relative flex flex-col border border-ink-900/15 bg-paper p-6 lg:p-8 transition-all hover:-translate-y-1 hover:shadow-brutal-sm`}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-600">
          № {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] border ${accent.border} ${accent.text}`}
        >
          {project.tag}
        </span>
      </div>

      <h3 className="mt-8 display text-[28px] lg:text-[34px] text-ink-900 leading-[1.02]">
        {project.title}
      </h3>

      <p className="mt-4 text-[15px] leading-relaxed text-ink-700 flex-1">
        {project.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.languages.map((lang) => (
          <span
            key={lang}
            className="text-[11px] px-2 py-0.5 border border-ink-900/20 text-ink-700"
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-ink-900/10 flex items-center justify-between">
        <span className="text-xs text-ink-600">Open knowledge in action</span>
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${accent.bg} text-paper transition-transform group-hover:rotate-45`}
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}
