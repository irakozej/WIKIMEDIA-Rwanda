import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Facebook, Twitter } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Wikimedia Rwanda — Town Center Building, Kacyiru, Kigali.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's <em className="italic text-clay-500">talk</em>.
          </>
        }
        lede="Partnerships, press, classroom requests, volunteer questions — this is the fastest way to reach the chapter."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-4">
              Office
            </div>
            <h2 className="display text-3xl text-ink-900">
              Town Center Building,
              <br /> 5th Floor, Kacyiru.
            </h2>
          </div>

          <ul className="space-y-5">
            <InfoRow icon={<MapPin size={16} />} label="Address">
              5th Floor, Town Center Building,
              <br />
              Kacyiru, Kigali, Rwanda
            </InfoRow>
            <InfoRow icon={<Phone size={16} />} label="Phone">
              <a href="tel:+250789162892" className="hover:text-clay-500">
                +250 789 162 892
              </a>
            </InfoRow>
            <InfoRow icon={<Mail size={16} />} label="Email">
              <a
                href="mailto:wikimediarwanda@gmail.com"
                className="hover:text-clay-500 break-all"
              >
                wikimediarwanda@gmail.com
              </a>
            </InfoRow>
            <InfoRow icon={<Clock size={16} />} label="Office hours">
              Monday to Friday
              <br />
              09:00 — 17:00 CAT
            </InfoRow>
          </ul>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-clay-500 mb-4">
              Social
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/WikiRwanda"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center border border-ink-900/25 hover:bg-clay-500 hover:text-paper hover:border-clay-500 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com/WikimediaRwanda"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="inline-flex h-10 w-10 items-center justify-center border border-ink-900/25 hover:bg-clay-500 hover:text-paper hover:border-clay-500 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <ContactForm />

          <div className="relative aspect-[16/10] border border-ink-900/15 overflow-hidden">
            <div className="absolute inset-0 bg-[#1c1913]" />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(250,246,238,0.08) 1px, transparent 1px), linear-gradient(0deg, rgba(250,246,238,0.08) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_45%,rgba(194,65,12,0.5),transparent_60%)]" />
            <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <span className="absolute inset-0 animate-ping rounded-full bg-clay-500/60" />
                <span className="relative block h-4 w-4 rounded-full bg-clay-500 shadow-[0_0_0_6px_rgba(194,65,12,0.3)]" />
              </div>
            </div>
            <div className="absolute bottom-5 left-5 text-paper">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay-300">
                Kigali · Kacyiru
              </div>
              <div className="mt-1 font-display text-2xl">-1.9441° S · 30.0619° E</div>
            </div>
            <div className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">
              Map placeholder
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center bg-clay-500/10 text-clay-500">
        {icon}
      </span>
      <div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-ink-600">{label}</div>
        <div className="mt-1 text-[15px] text-ink-900 leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
