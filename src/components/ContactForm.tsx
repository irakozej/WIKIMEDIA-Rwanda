"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="bg-paper border border-ink-900/15 p-6 lg:p-10 shadow-brutal-sm"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Your name" id="name" placeholder="Uwimana Mutesi" />
        <Field label="Email" id="email" type="email" placeholder="you@example.rw" />
      </div>
      <div className="mt-6">
        <Field label="Subject" id="subject" placeholder="Partnership, press, question…" />
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          required
          placeholder="Tell us what's on your mind…"
          className="mt-2 w-full bg-transparent border border-ink-900/20 p-4 text-[15px] focus:outline-none focus:border-clay-500"
        />
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-600">
          We typically reply within 3 working days. Murakoze.
        </p>
        <button
          type="submit"
          disabled={sent}
          className="inline-flex items-center gap-2 bg-ink-900 hover:bg-clay-500 text-paper px-6 py-3 text-sm font-medium shadow-brutal-sm disabled:bg-forest-500"
        >
          {sent ? (
            <>
              <Check size={14} /> Message sent
            </>
          ) : (
            <>
              Send message <Send size={14} />
            </>
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
