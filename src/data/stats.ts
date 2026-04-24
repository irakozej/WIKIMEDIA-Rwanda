export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  context: string;
};

export const stats: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "Kinyarwanda articles",
    context: "added to Wikipedia in 2022",
  },
  {
    value: 576,
    label: "Wikiquote entries",
    context: "created during the 2023 SheSaid campaign",
  },
  {
    value: 826,
    label: "Wikiquote edits",
    context: "polished and expanded in 2023",
  },
  {
    value: 87,
    label: "French Wikipedia articles",
    context: "from the Women & Climate project",
  },
  {
    value: 304,
    label: "Articles edited",
    context: "Women & Climate contributions",
  },
  {
    value: 100,
    suffix: "+",
    label: "Commons photos",
    context: "uploaded by women contributors",
  },
  {
    value: 67,
    label: "AfroSports participants",
    context: "in the 2026 Rwanda edition",
  },
  {
    value: 50,
    suffix: "+",
    label: "Active contributors",
    context: "building the movement in Rwanda",
  },
];
