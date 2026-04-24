import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Editathons, workshops, contests, Wiki Clubs and community retreats hosted by Wikimedia Rwanda across the country.",
};

export default function EventsPage() {
  const upcoming = events
    .filter((e) => e.status === "upcoming")
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));
  const past = events
    .filter((e) => e.status === "past")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={
          <>
            The chapter, <em className="italic text-clay-500">in person</em>.
          </>
        }
        lede="Every month we gather: in libraries, in schools, at university campuses, on retreats. Find the next event that fits your calendar, or browse what we have just finished."
        crumbs={[{ href: "/", label: "Home" }, { label: "Events" }]}
      />

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <h2 className="display text-[clamp(36px,5vw,64px)] text-ink-900">
            Upcoming <em className="italic text-clay-500">·</em> {upcoming.length}
          </h2>
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-700">
            {["Edit-a-thons", "Workshops", "Contests", "Retreats", "Wiki Clubs"].map((c) => (
              <span key={c} className="px-3 py-1 border border-ink-900/20">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-ink-900/15 bg-paper">
          {upcoming.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-28 pt-4">
        <h2 className="display text-[clamp(36px,5vw,64px)] text-ink-900 mb-8">
          Previously <em className="italic text-clay-500">·</em> {past.length}
        </h2>
        <div className="border border-ink-900/15 bg-paper">
          {past.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </section>
    </>
  );
}
