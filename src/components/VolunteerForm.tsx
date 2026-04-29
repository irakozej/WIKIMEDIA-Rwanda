"use client";

import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { submitForm, type FormStatus } from "@/lib/forms";

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
  const [status, setStatus] = useState<FormStatus>("idle");

  const toggle = (v: string) =>
    setSelected((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const result = await submitForm({
      subject: "[wikimedia.rw] Volunteer application",
      from_name: data.get("name"),
      replyto: data.get("email"),
      message: data.get("message"),
      interests: selected.join(", ") || "—",
      _form: "volunteer",
    });
    setStatus(result);
  }

  const sending = status === "sending";
  const sent = status === "sent";
  const errored = status === "error";

  return (
    <form
      className="bg-paper border border-ink-900/15 p-6 lg:p-10 shadow-brutal-sm"
      onSubmit={onSubmit}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full name" id="v-name" name="name" placeholder="Uwimana Mutesi" />
        <Field label="Email" id="v-email" name="email" type="email" placeholder="you@example.rw" />
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
          name="message"
          rows={5}
          placeholder="Your interests, background, availability…"
          className="mt-2 w-full bg-transparent border border-ink-900/20 p-4 text-[15px] focus:outline-none focus:border-clay-500"
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-600">
          {errored
            ? "Something went wrong. Try again, or email wikimediarwanda@gmail.com."
            : "We will reach out within a week with next steps."}
        </p>
        <button
          type="submit"
          disabled={sending || sent}
          className="inline-flex items-center gap-2 bg-clay-500 hover:bg-ink-900 text-paper px-6 py-3 text-sm font-medium shadow-brutal-sm disabled:bg-forest-500 disabled:opacity-95"
        >
          {sent && (
            <>
              <Check size={14} /> Application received
            </>
          )}
          {sending && <>Sending…</>}
          {errored && (
            <>
              <AlertCircle size={14} /> Try again
            </>
          )}
          {status === "idle" && <>Join Wikimedia Rwanda</>}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  name: string;
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
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-ink-900/25 py-3 px-1 text-[15px] focus:outline-none focus:border-clay-500"
      />
    </div>
  );
}
