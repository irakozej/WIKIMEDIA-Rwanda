"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const interests = [
  "Editing Wikipedia",
  "Photography (Commons)",
  "Wiki Club mentoring",
  "Translation",
  "Event organizing",
  "Design & graphics",
  "Outreach & partnerships",
  "Tech & tools",
];

export default function VolunteerForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (v: string) =>
    setSelected((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  return (
    <form
      className="bg-paper border border-ink-900/15 p-6 lg:p-10 shadow-brutal-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" id="v-name" placeholder="Uwimana Mutesi" />
        <Field label="Email" id="v-email" type="email" placeholder="you@example.rw" />
      </div>

      <fieldset className="mt-8">
        <legend className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
          What would you like to help with?
        </legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {interests.map((i) => {
            const on = selected.includes(i);
            return (
              <button
                type="button"
                key={i}
                onClick={() => toggle(i)}
                className={`px-3 py-2 text-sm border transition-all ${
                  on
                    ? "bg-ink-900 text-paper border-ink-900"
                    : "border-ink-900/25 text-ink-800 hover:border-ink-900"
                }`}
              >
                {i}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="v-message" className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
          Tell us about yourself (optional)
        </label>
        <textarea
          id="v-message"
          rows={5}
          placeholder="Your interests, background, availability…"
          className="mt-2 w-full bg-transparent border border-ink-900/20 p-4 text-[15px] focus:outline-none focus:border-clay-500"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-600">
          We will reach out within a week with next steps.
        </p>
        <button
          type="submit"
          disabled={sent}
          className="inline-flex items-center gap-2 bg-clay-500 hover:bg-ink-900 text-paper px-6 py-3 text-sm font-medium shadow-brutal-sm disabled:bg-forest-500"
        >
          {sent ? (
            <>
              <Check size={14} /> Application received
            </>
          ) : (
            <>Join Wikimedia Rwanda</>
          )}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-ink-900/25 py-3 px-1 text-[15px] focus:outline-none focus:border-clay-500"
      />
    </div>
  );
}
