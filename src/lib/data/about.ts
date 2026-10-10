export interface MaterialTechniqueCategory {
  category: string;
  items: string[];
}

export const ABOUT_DATA = {
  artisticPractice: {
    heading: "Objects with a Presence",
    statement:
      "Jewellery is an intimate spatial medium. It is sculpture at body scale—an object that carries identity, memory, and tactile weight. The practice centers on the physical dialogue between metal tension, carved organic forms, and patinated surfaces.",
  },
  materialsAndTechniques: [
    {
      category: "Precious & Base Metals",
      items: ["Sterling Silver (925)", "Fine Silver (999)", "Oxidized Bronze Alloys", "Sheet Copper & Brass"],
    },
    {
      category: "Sculptural & Organic Materials",
      items: ["Ecuadorian Tagua Nut (Vegetable Ivory)", "Italian White Alabaster Stone", "Found Mineral Specimens"],
    },
    {
      category: "Goldsmithing & Surface Techniques",
      items: [
        "Lost-Wax Micro Casting",
        "Repoussé & Chasing",
        "Micro-Groove Wire Inlay",
        "Chemical & Heat Patination (Verdigris / Liver of Sulfur)",
        "Precision Hand Filing & Mirror Polishing",
      ],
    },
  ] as MaterialTechniqueCategory[],
  exhibitionsAndProjects: [
    {
      year: "2024",
      title: "Emerging Metalsmiths Showcase",
      location: "Gallery of Contemporary Craft, Munich, Germany",
      details: "Exhibited Split-Face Pendant and Tagua Nut Study.",
    },
    {
      year: "2024",
      title: "Student Material Explorations Showcase",
      location: "Academy Exhibition Hall, Germany",
      details: "Selected for contemporary goldsmithing student publication.",
    },
  ],
};
