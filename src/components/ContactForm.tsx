"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { submitForm, type FormStatus } from "@/lib/forms";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    const result = await submitForm({
      subject: `[wikimedia.rw] ${data.get("subject") ?? "New contact"}`,
      from_name: data.get("name"),
      replyto: data.get("email"),
      message: data.get("message"),
      _form: "contact",
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
        <Field label="Your name" id="name" name="name" placeholder="Uwimana Mutesi" />
        <Field label="Email" id="email" name="email" type="email" placeholder="you@example.rw" />
      </div>
      <div className="mt-6">
        <Field label="Subject" id="subject" name="subject" placeholder="Partnership, press, question…" />
      </div>
      <div className="mt-6">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.22em] text-ink-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us what's on your mind…"
          className="mt-2 w-full bg-transparent border border-ink-900/20 p-4 text-[15px] focus:outline-none focus:border-clay-500"
        />
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-600">
          {errored
            ? "Something went wrong. Try again, or email wikimediarwanda@gmail.com."
            : "We typically reply within 3 working days. Murakoze."}
        </p>
        <button
          type="submit"
          disabled={sending || sent}
          className="inline-flex items-center gap-2 bg-ink-900 hover:bg-clay-500 text-paper px-6 py-3 text-sm font-medium shadow-brutal-sm disabled:bg-forest-500 disabled:opacity-95"
        >
          {sent && (
            <>
              <Check size={14} /> Message sent
            </>
          )}
          {sending && <>Sending…</>}
          {errored && (
            <>
              <AlertCircle size={14} /> Try again
            </>
          )}
          {status === "idle" && (
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
