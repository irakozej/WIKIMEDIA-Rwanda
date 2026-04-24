export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  accent: "clay" | "forest" | "wiki" | "amber";
};

export const team: TeamMember[] = [
  {
    name: "Ndahiro Derrick",
    role: "Executive Director & Founder",
    bio: "Leads strategy, partnerships and the long-term vision for open knowledge in Rwanda.",
    initials: "ND",
    accent: "clay",
  },
  {
    name: "Clementine Nyirahabihirwe",
    role: "General Secretary & Finance Director",
    bio: "Stewards the chapter's governance, reporting and resources to the Rwandan community.",
    initials: "CN",
    accent: "forest",
  },
  {
    name: "Boris Bahire",
    role: "Deputy Program Coordinator",
    bio: "Designs editathons, training curricula and community retreats across the country.",
    initials: "BB",
    accent: "wiki",
  },
  {
    name: "Nyinawumuntu Jeannette",
    role: "Community Outreach & Partnerships",
    bio: "Connects schools, cultural institutions and allied organisations to Wikimedia projects.",
    initials: "NJ",
    accent: "amber",
  },
];

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "2022",
    title: "500+ Kinyarwanda articles added",
    description:
      "A community-driven push grows Kinyarwanda Wikipedia with everyday knowledge written by and for Rwandans.",
  },
  {
    year: "2023",
    title: "Registered as an NGO",
    description:
      "Open Source Knowledge Rwanda is formally recognised by the Rwanda Governance Board (Reg. 1180/RGB/NGO/OC/01/2023).",
  },
  {
    year: "2023",
    title: "SheSaid & Women & Climate campaigns",
    description:
      "Hundreds of Wikiquote entries celebrate female leaders; French Wikipedia gains 87 new articles on women and climate.",
  },
  {
    year: "2024",
    title: "Wiki Clubs launched in secondary schools",
    description:
      "Pilot clubs at GS Gishari, GS Ruhunda, GS Nyinawimana and Kageyo TSS integrate Wikipedia into the classroom.",
  },
  {
    year: "2025",
    title: "Knowledge exchange with NYU Abu Dhabi",
    description:
      "A cross-institutional collaboration connects Rwandan editors with global researchers.",
  },
  {
    year: "2026",
    title: "AfroSports Rwanda & Wiki Loves Folklore",
    description:
      "67 contributors document African sports and folklore, reshaping how the continent tells its stories online.",
  },
];
