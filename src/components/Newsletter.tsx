"use client";

import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";
import { submitForm, type FormStatus } from "@/lib/forms";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    const result = await submitForm({
      subject: "[wikimedia.rw] Newsletter signup",
      replyto: email,
      message: `New newsletter signup: ${email}`,
      _form: "newsletter",
    });
    setStatus(result);
  }

  const sending = status === "sending";
  const sent = status === "sent";
  const errored = status === "error";

  return (
    <section className="relative border-y border-ink-900/15">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-24 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-3">
            The Commons Dispatch
          </div>
          <h2 className="display text-[clamp(40px,6vw,72px)] text-ink-900 max-w-[18ch]">
            A quarterly letter from the chapter, to your inbox.
          </h2>
          <p className="mt-5 text-[15px] text-ink-700 max-w-xl leading-relaxed">
            Editathon invites, campaign briefings, Wiki Club stories and the occasional
            essay. No spam — just the movement, in your language.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative bg-[#1c1913] text-paper p-6 lg:p-8 shadow-brutal-clay"
        >
          <label htmlFor="newsletter" className="text-[11px] uppercase tracking-[0.22em] text-paper/60">
            Your email
          </label>
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <input
              id="newsletter"
              type="email"
              required
              placeholder="you@example.rw"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-paper/30 py-3 px-1 text-paper placeholder:text-paper/40 focus:outline-none focus:border-clay-300"
            />
            <button
              type="submit"
              disabled={sending || sent}
              className="inline-flex items-center justify-center gap-2 bg-clay-500 text-paper px-5 py-3 text-sm font-medium disabled:bg-forest-500 disabled:opacity-95"
            >
              {sent && (
                <>
                  <Check size={14} /> Subscribed
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
                  <Send size={14} /> Subscribe
                </>
              )}
            </button>
          </div>
          <p className="mt-4 text-xs text-paper/50">
            {errored
              ? "Submission failed. Please try again."
              : "We will never share your address. Unsubscribe any time."}
          </p>
        </form>
      </div>
    </section>
  );
}
