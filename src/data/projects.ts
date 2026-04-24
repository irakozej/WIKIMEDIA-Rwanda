export type Project = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  detail: string;
  languages: string[];
  accent: "clay" | "forest" | "wiki" | "amber" | "ink";
};

export const projects: Project[] = [
  {
    slug: "kinyarwanda-wikipedia",
    title: "Kinyarwanda Wikipedia Promotion",
    tag: "Flagship",
    summary:
      "Growing Kinyarwanda Wikipedia so local knowledge lives online in the language of the people who created it.",
    detail:
      "Editathons, translation sprints and one-on-one mentorship help Rwandans publish everyday knowledge — recipes, history, biographies, civics — in Kinyarwanda.",
    languages: ["Kinyarwanda"],
    accent: "clay",
  },
  {
    slug: "wikigap",
    title: "WikiGap",
    tag: "Gender equity",
    summary:
      "Closing the internet gender gap with articles about notable Rwandan women.",
    detail:
      "Partnering with journalists and historians, WikiGap trains editors to research, write and cite biographies of women who shaped Rwanda.",
    languages: ["Kinyarwanda", "English", "French"],
    accent: "amber",
  },
  {
    slug: "shesaid",
    title: "Wiki Loves Women — SheSaid",
    tag: "Campaign",
    summary:
      "Wikiquote entries celebrating the words of female leaders in English and French.",
    detail:
      "During SheSaid 2023 our community added 576 new Wikiquote articles and edited 826 more, archiving the voices of women across politics, science and the arts.",
    languages: ["English", "French"],
    accent: "clay",
  },
  {
    slug: "wiki-club",
    title: "Wiki Club Initiative",
    tag: "Schools",
    summary:
      "Bringing Wikipedia into secondary school curricula through after-school clubs.",
    detail:
      "Pilot clubs at GS Gishari and GS Ruhunda (Eastern Province), and GS Nyinawimana and Kageyo TSS (Gicumbi District) equip students with editing, research and media literacy skills.",
    languages: ["Kinyarwanda", "English"],
    accent: "forest",
  },
  {
    slug: "digital-accessibility",
    title: "Digital Accessibility & Inclusion",
    tag: "Inclusion",
    summary:
      "Training Rwandans with disabilities to contribute to Wikimedia projects.",
    detail:
      "Led by Alice Mukeshimana, Byiringiro Cedric and Niyigena Jack, this programme adapts tooling and teaching so every contributor can join the movement.",
    languages: ["Kinyarwanda", "English"],
    accent: "wiki",
  },
  {
    slug: "wiki-loves-monuments",
    title: "Wiki Loves Monuments",
    tag: "Photography",
    summary:
      "An annual contest documenting Rwanda's historical sites for the world.",
    detail:
      "Volunteer photographers travel the country capturing monuments, landmarks and architectural heritage — all released under free licences on Wikimedia Commons.",
    languages: ["Commons"],
    accent: "ink",
  },
  {
    slug: "wiki-loves-africa",
    title: "Wiki Loves Africa",
    tag: "Media",
    summary:
      "A continent-wide photo, video and audio contest for Wikimedia Commons.",
    detail:
      "Rwandan contributors submit yearly around rotating themes, bringing African stories, crafts and daily life to a global audience.",
    languages: ["Commons"],
    accent: "amber",
  },
  {
    slug: "wiki-loves-folklore",
    title: "Wiki Loves Folklore",
    tag: "Heritage",
    summary:
      "Documenting oral traditions, crafts and cultural practices before they disappear.",
    detail:
      "Elders and young editors work together to record folktales, dances and ceremonies, preserving intangible heritage on open platforms.",
    languages: ["Kinyarwanda", "English"],
    accent: "clay",
  },
  {
    slug: "afrosports-rwanda",
    title: "AfroSports Rwanda",
    tag: "Sport",
    summary:
      "Reclaiming the narrative of African sport one article at a time.",
    detail:
      "67 participants in the 2026 Rwandan edition researched athletes, teams and pivotal matches, adding depth to Wikipedia's global sports coverage.",
    languages: ["English", "French", "Kinyarwanda"],
    accent: "forest",
  },
  {
    slug: "kiwix4schools",
    title: "Kiwix4Schools",
    tag: "Access",
    summary:
      "Offline Wikipedia for schools with limited or no internet connectivity.",
    detail:
      "We ship Kiwix readers pre-loaded with Wikipedia and learning resources to rural schools so knowledge never depends on a signal.",
    languages: ["Offline"],
    accent: "wiki",
  },
  {
    slug: "women-climate",
    title: "Women & Climate on French Wikipedia",
    tag: "Climate",
    summary:
      "Training women contributors to document environmental topics in French.",
    detail:
      "The project produced 87 new articles, 304 edits and more than 100 photographs on Wikimedia Commons about climate, conservation and women leading the response.",
    languages: ["French"],
    accent: "forest",
  },
  {
    slug: "nyu-abu-dhabi",
    title: "Knowledge Exchange with NYU Abu Dhabi",
    tag: "Partnership",
    summary:
      "A cross-institutional collaboration for open knowledge between Rwanda and the Gulf.",
    detail:
      "Editors, librarians and faculty co-design research sprints that expand Wikipedia's coverage of both regions and train the next generation of open knowledge practitioners.",
    languages: ["English", "French", "Arabic"],
    accent: "ink",
  },
  {
    slug: "great-lakes",
    title: "Great Lakes Initiative",
    tag: "Regional",
    summary:
      "Regional collaboration with Wikimedia chapters in Burundi and the DRC.",
    detail:
      "Shared Kinyarwanda-Kirundi-Swahili editathons and joint campaigns strengthen the Great Lakes open knowledge ecosystem.",
    languages: ["Kinyarwanda", "Kirundi", "Swahili", "French"],
    accent: "clay",
  },
];
