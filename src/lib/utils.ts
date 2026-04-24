export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(iso: string) {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const accentMap = {
  clay: {
    bg: "bg-clay-500",
    bgSoft: "bg-clay-100",
    text: "text-clay-500",
    border: "border-clay-500",
    ring: "ring-clay-500",
  },
  forest: {
    bg: "bg-forest-500",
    bgSoft: "bg-forest-500/10",
    text: "text-forest-500",
    border: "border-forest-500",
    ring: "ring-forest-500",
  },
  wiki: {
    bg: "bg-wiki-500",
    bgSoft: "bg-wiki-50",
    text: "text-wiki-500",
    border: "border-wiki-500",
    ring: "ring-wiki-500",
  },
  amber: {
    bg: "bg-amber-500",
    bgSoft: "bg-amber-500/10",
    text: "text-amber-500",
    border: "border-amber-500",
    ring: "ring-amber-500",
  },
  ink: {
    bg: "bg-ink-800",
    bgSoft: "bg-ink-100",
    text: "text-ink-800",
    border: "border-ink-800",
    ring: "ring-ink-800",
  },
} as const;

export type AccentKey = keyof typeof accentMap;
