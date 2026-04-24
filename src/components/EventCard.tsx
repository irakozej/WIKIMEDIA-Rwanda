import type { EventItem } from "@/data/events";
import { formatDate } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";

export default function EventCard({ event }: { event: EventItem }) {
  const d = new Date(event.date);
  const month = d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase();
  const day = d.getDate();
  const isUpcoming = event.status === "upcoming";

  return (
    <article className="group grid grid-cols-[auto_1fr] gap-5 lg:gap-8 p-6 lg:p-8 border-b border-ink-900/15 hover:bg-clay-50 transition-colors">
      <div className="flex flex-col items-center justify-center border border-ink-900/20 px-4 py-3 min-w-[72px]">
        <span className="font-mono text-[10px] tracking-[0.22em] text-ink-600">{month}</span>
        <span className="big-num text-3xl lg:text-4xl text-ink-900">{day}</span>
        <span className="font-mono text-[10px] text-ink-600">{d.getFullYear()}</span>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em]">
          <span
            className={`px-2 py-0.5 border ${
              isUpcoming ? "border-clay-500 text-clay-500" : "border-ink-900/30 text-ink-600"
            }`}
          >
            {isUpcoming ? "Upcoming" : "Past"}
          </span>
          <span className="text-ink-700">{event.category}</span>
        </div>
        <h3 className="mt-3 display text-[24px] lg:text-[30px] text-ink-900 leading-[1.1]">
          {event.title}
        </h3>
        <p className="mt-2 text-[15px] text-ink-700 max-w-[72ch]">{event.summary}</p>
        <div className="mt-4 flex flex-wrap gap-5 text-sm text-ink-700">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={14} className="text-clay-500" />
            {formatDate(event.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-clay-500" />
            {event.location}
          </span>
        </div>
      </div>
    </article>
  );
}
