import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wikimedia.rw"),
  title: {
    default: "Wikimedia Rwanda — Advancing Open Knowledge in Rwanda",
    template: "%s — Wikimedia Rwanda",
  },
  description:
    "Wikimedia Rwanda (Open Source Knowledge Rwanda) empowers Rwandans to freely share, access and contribute to the world's knowledge in Kinyarwanda, English, French and Swahili.",
  keywords: [
    "Wikimedia",
    "Rwanda",
    "Kinyarwanda Wikipedia",
    "Open Knowledge",
    "Wikimedia Rwanda",
    "WikiGap",
    "Wiki Loves Folklore",
    "AfroSports Rwanda",
    "Open Source Knowledge Rwanda",
  ],
  openGraph: {
    type: "website",
    locale: "en_RW",
    url: "https://wikimedia.rw",
    siteName: "Wikimedia Rwanda",
    title: "Wikimedia Rwanda — Advancing Open Knowledge in Rwanda",
    description:
      "Kinyarwanda, English, French and Swahili — Wikimedia Rwanda builds a culture of open knowledge for the Great Lakes and beyond.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@WikimediaRwanda",
    creator: "@WikimediaRwanda",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="paper min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink-900 focus:text-paper focus:px-4 focus:py-2 focus:rounded-sm"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
