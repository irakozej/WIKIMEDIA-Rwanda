export type EventItem = {
  slug: string;
  title: string;
  category: "Edit-a-thon" | "Workshop" | "Contest" | "Community Retreat" | "Wiki Club";
  date: string;
  location: string;
  status: "upcoming" | "past";
  summary: string;
};

export const events: EventItem[] = [
  {
    slug: "kinyarwanda-editathon-june",
    title: "Kinyarwanda Editathon — Kigali Public Library",
    category: "Edit-a-thon",
    date: "2026-06-14",
    location: "Kigali Public Library, Kacyiru",
    status: "upcoming",
    summary:
      "A full-day editathon focused on Rwandan civic history and local government. Snacks and mentors provided.",
  },
  {
    slug: "wiki-loves-monuments-2026",
    title: "Wiki Loves Monuments Rwanda 2026",
    category: "Contest",
    date: "2026-09-01",
    location: "Nationwide",
    status: "upcoming",
    summary:
      "Submit photographs of Rwanda's monuments and historical sites for a place in this year's international contest.",
  },
  {
    slug: "wiki-club-mentor-training",
    title: "Wiki Club Mentor Training",
    category: "Workshop",
    date: "2026-05-24",
    location: "Town Center Building, Kacyiru",
    status: "upcoming",
    summary:
      "An intensive weekend for teachers mentoring Wiki Clubs in secondary schools across Rwanda.",
  },
  {
    slug: "community-retreat-musanze",
    title: "Annual Community Retreat — Musanze",
    category: "Community Retreat",
    date: "2026-11-08",
    location: "Musanze, Northern Province",
    status: "upcoming",
    summary:
      "Three days of planning, celebration and reflection with the wider Wikimedia Rwanda community.",
  },
  {
    slug: "afrosports-wrap-2026",
    title: "AfroSports Rwanda — Wrap-up Ceremony",
    category: "Edit-a-thon",
    date: "2026-03-22",
    location: "Kigali",
    status: "past",
    summary:
      "67 participants celebrated four weeks of editing, awarding top contributors to African sports articles.",
  },
  {
    slug: "shesaid-2023",
    title: "SheSaid Campaign 2023",
    category: "Contest",
    date: "2023-03-08",
    location: "Online & Kigali",
    status: "past",
    summary:
      "576 new Wikiquote entries and 826 edits celebrating the voices of female leaders in English and French.",
  },
  {
    slug: "women-climate-workshop",
    title: "Women & Climate on French Wikipedia",
    category: "Workshop",
    date: "2023-10-12",
    location: "University of Rwanda, Huye",
    status: "past",
    summary:
      "A month-long workshop producing 87 articles and 304 edits on climate, conservation and women leaders.",
  },
  {
    slug: "gs-gishari-wiki-club",
    title: "Wiki Club Launch — GS Gishari",
    category: "Wiki Club",
    date: "2024-02-15",
    location: "GS Gishari, Eastern Province",
    status: "past",
    summary:
      "The first pilot Wiki Club opens with 40 students learning to edit Wikipedia in Kinyarwanda and English.",
  },
];
