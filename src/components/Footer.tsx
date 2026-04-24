import Link from "next/link";
import { Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/about", label: "About the chapter" },
      { href: "/projects", label: "Projects" },
      { href: "/events", label: "Events" },
      { href: "/blog", label: "Journal" },
    ],
  },
  {
    title: "Contribute",
    links: [
      { href: "/get-involved", label: "Volunteer" },
      { href: "/get-involved#mentor", label: "Become a Wiki Club mentor" },
      { href: "/get-involved#donate", label: "Donate" },
      { href: "/contact", label: "Partner with us" },
    ],
  },
  {
    title: "Wikimedia",
    links: [
      { href: "https://rw.wikipedia.org", label: "Kinyarwanda Wikipedia" },
      { href: "https://commons.wikimedia.org", label: "Wikimedia Commons" },
      { href: "https://www.wikidata.org", label: "Wikidata" },
      { href: "https://en.wikiquote.org", label: "Wikiquote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-900/15 bg-[#1c1913] text-paper">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-4xl lg:text-5xl leading-[0.95]">
              Knowledge is a <em className="text-clay-300 not-italic">common</em>{" "}
              <em className="italic text-clay-300">ground</em>.
            </div>
            <p className="mt-6 text-paper/70 max-w-md text-[15px] leading-relaxed">
              Open Source Knowledge Rwanda is an independent non-profit registered with the
              Rwanda Governance Board (Reg. 1180/RGB/NGO/OC/01/2023), advancing Wikimedia
              projects in Kinyarwanda, English, French and Swahili.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-paper/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-clay-300" />
                5th Floor, Town Center Building, Kacyiru, Kigali
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-clay-300" />
                +250 789 162 892
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-clay-300" />
                wikimediarwanda@gmail.com
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-4">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-paper/90 hover:text-clay-300 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-sm text-paper/60">
            <span>© {new Date().getFullYear()} Open Source Knowledge Rwanda</span>
            <span className="asterism" />
            <span>Powered by the Wikimedia movement</span>
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href="https://facebook.com/WikiRwanda" label="Facebook">
              <Facebook size={16} />
            </SocialLink>
            <SocialLink href="https://twitter.com/WikimediaRwanda" label="Twitter">
              <Twitter size={16} />
            </SocialLink>
            <SocialLink href="mailto:wikimediarwanda@gmail.com" label="Email">
              <Mail size={16} />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-paper/20 hover:bg-clay-500 hover:border-clay-500 transition-colors"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
