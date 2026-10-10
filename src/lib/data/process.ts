export interface ProcessItem {
  id: string;
  title: string;
  category: "Material Study" | "Workshop Experiment" | "Sketches & Models" | "Technique Trial";
  image: {
    src: string;
    alt: string;
    caption: string;
    aspect?: "portrait" | "landscape" | "square";
  };
  date: string;
  description: string;
  relatedProjectSlug?: string;
  materials?: string[];
}

export const PROCESS_DATA: ProcessItem[] = [
  {
    id: "process-01",
    title: "Goldsmith Workbench Overview",
    category: "Workshop Experiment",
    image: {
      src: "/images/process/workbench.jpg",
      alt: "Top-down view of goldsmith workbench with saw, bench peg, and silver wire coils",
      caption: "Daily workspace peg setup, jeweler's saw frame, tagua nut fragments, copper oxide patination bottle, and miniature steel anvil.",
      aspect: "landscape",
    },
    date: "October 2024",
    description:
      "A view into daily studio practice: combining delicate hand sawing, precise wire drawing, and controlled chemical patination on raw metals.",
  },
  {
    id: "process-02",
    title: "Split-Face Bronze Casting & Oxidation Trial",
    category: "Technique Trial",
    image: {
      src: "/images/projects/split-face-pendant/hero.jpg",
      alt: "Split face pendant cast bronze half next to silver half",
      caption: "Testing heat patination on lost-wax cast bronze versus high-grade 925 silver polishing.",
      aspect: "portrait",
    },
    date: "September 2024",
    description:
      "Experimenting with sulfur oxidation on bronze surfaces to contrast against high-reflectivity mirror silver.",
    relatedProjectSlug: "split-face-pendant",
    materials: ["Bronze Alloy", "Liver of Sulfur", "Sterling Silver"],
  },
  {
    id: "process-03",
    title: "Tagua Nut Carving & Wire Channel Fitting",
    category: "Material Study",
    image: {
      src: "/images/projects/tagua-study/hero.jpg",
      alt: "Close-up of tagua nut carving process",
      caption: "Micro-groove carving into dried tagua seed using diamond-coated burrs before cold-setting silver wire.",
      aspect: "portrait",
    },
    date: "August 2024",
    description:
      "Tagua nut presents unique carving characteristics similar to elephant ivory but derived from palm seeds. It requires dry sanding and delicate oil finish.",
    relatedProjectSlug: "tagua-study",
    materials: ["Tagua Nut", "Diamond Burrs", "Silver Wire"],
  },
  {
    id: "process-04",
    title: "Alabaster Stone Translucency & Wire Binding",
    category: "Material Study",
    image: {
      src: "/images/projects/alabaster-study/hero.jpg",
      alt: "Translucent alabaster stone carving in natural light",
      caption: "Evaluating natural light transmission through hollowed alabaster core.",
      aspect: "landscape",
    },
    date: "July 2024",
    description:
      "Testing different wall thicknesses in alabaster to achieve optimal light translucency when exposed to gallery spotlights.",
    relatedProjectSlug: "alabaster-study",
    materials: ["Italian Alabaster", "Annealed Copper Wire"],
  },
  {
    id: "process-05",
    title: "Verdigris Copper Patination Experiments",
    category: "Technique Trial",
    image: {
      src: "/images/projects/sculptural-mask/hero.jpg",
      alt: "Patinated copper mask detail",
      caption: "48-hour chemical verdigris development on hand-chased copper sheet.",
      aspect: "portrait",
    },
    date: "June 2024",
    description:
      "Developing durable natural patina recipes using copper carbonate, vinegar vapor, and beeswax sealing.",
    relatedProjectSlug: "sculptural-mask",
    materials: ["Copper Sheet", "Wax Sealant"],
  },
];
