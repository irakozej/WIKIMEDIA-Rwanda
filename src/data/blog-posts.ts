export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  author: string;
  tag: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "wiki-loves-folklore-2026",
    title: "Wiki Loves Folklore 2026: Celebrating Rwandan Cultural Heritage",
    date: "2026-03-10",
    readingTime: "6 min read",
    author: "Nyinawumuntu Jeannette",
    tag: "Heritage",
    excerpt:
      "From Intore dances to ikibyino lullabies, Rwandan folklore is moving from memory into free, open archives — written by the communities who live it.",
    body: [
      "Every March, the global Wikimedia movement turns its attention to the unspoken half of culture: the songs, proverbs, rituals and crafts that no textbook holds. Wiki Loves Folklore is a month-long contest inviting editors and photographers to document intangible heritage on Wikimedia Commons and Wikipedia. In Rwanda, our 2026 edition drew contributors from eight provinces and four languages.",
      "Our focus this year was on the traditions that almost slipped away. A team from Nyamagabe travelled to record the last practitioners of the inanga — a bow harp played to the rhythm of spoken poetry — while editors in Kigali transcribed proverbs shared at a grandmothers' tea hosted in Kimironko. Together, contributors uploaded more than 400 photographs and drafted 70 new articles in Kinyarwanda, French and English.",
      "Folklore is not a static thing. It breathes when it is retold, re-sung, re-danced. By moving these recordings into the commons, we are not freezing them — we are making sure that the next generation can find them, remix them, and add their own verses.",
      "If you want to contribute, submissions remain open until the end of March. Photographs, oral histories, translated proverbs and written articles are all welcome. Every piece of folklore you share becomes part of the world's open library — forever.",
    ],
  },
  {
    slug: "afrosports-rwanda-2026",
    title: "AfroSports Rwanda 2026: Reclaiming Africa's Sporting Narrative",
    date: "2026-02-24",
    readingTime: "5 min read",
    author: "Boris Bahire",
    tag: "Sport",
    excerpt:
      "When 67 editors spent four weeks writing about African athletes, a simple question emerged: why had so many of these stories been missing?",
    body: [
      "The AfroSports campaign asks a stubborn question: why does Wikipedia's coverage of African sport lag so far behind other regions? This year 67 Rwandan contributors — students, journalists, retired athletes, community editors — decided to change that, one article at a time.",
      "Over four weeks we wrote about footballers from the 1980s, women marathoners whose records were never catalogued, and a generation of para-athletes whose careers existed only in scrapbooks. Some articles were drafted in Kinyarwanda first, then translated; others moved from English into French. Crucially, every entry was sourced, citing newspapers, match reports and community interviews conducted during the campaign itself.",
      "The numbers matter — new articles, new images, new edits — but the spirit matters more. Participants described the campaign as the moment they realised their local sporting history was global history, and that writing it down was an act of belonging, not just of documentation.",
      "AfroSports Rwanda returns each year. If you know an athlete, a team, or a tournament whose story should be on Wikipedia, we want to hear from you.",
    ],
  },
  {
    slug: "nyu-abu-dhabi-exchange",
    title: "Knowledge Exchange with NYU Abu Dhabi — Building Bridges Through Open Knowledge",
    date: "2026-01-15",
    readingTime: "7 min read",
    author: "Ndahiro Derrick",
    tag: "Partnership",
    excerpt:
      "A cross-institutional collaboration between Kigali and Abu Dhabi is quietly rewriting what regional knowledge sharing can look like in the open-source era.",
    body: [
      "Open knowledge is, by definition, boundaryless. But in practice, its editors, archives and institutions often cluster in narrow geographies. Our partnership with NYU Abu Dhabi, launched in 2025, is an attempt to challenge that clustering directly — pairing Rwandan editors with Emirati librarians, faculty and students around shared research sprints.",
      "The first cohort focused on a deceptively simple theme: trade routes. Rwandan contributors documented the caravan paths that once linked the Great Lakes to the Indian Ocean, while NYU Abu Dhabi researchers mapped maritime networks across the Gulf. Articles were drafted in English, Arabic, Kinyarwanda and French, with cross-language editors reviewing each draft for accuracy and nuance.",
      "What we learned was that open knowledge partnerships work best when they resist the temptation to be purely technical. Our sessions opened with reading circles, not tooling demos. Our archives were handled with the same care a curator would give a physical manuscript. The code, in the end, wrote itself.",
      "In 2026 we are expanding the cohort and introducing a formal mentorship track for early-career Rwandan researchers. If this kind of work excites you, reach out — our next cohort begins in July.",
    ],
  },
];
