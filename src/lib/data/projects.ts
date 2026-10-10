export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  aspect?: "portrait" | "landscape" | "square";
  credit?: string;
}

export interface Project {
  slug: string;
  indexNumber: string;
  title: string;
  year: number | string;
  category: "Wearable Art" | "Material Studies" | "Sculptural Objects" | "Jewellery & Metal";
  summary: string;
  description: string;
  concept: string;
  coverImage: ProjectImage;
  gallery: ProjectImage[];
  materials: string[];
  techniques: string[];
  dimensions?: string;
  featured: boolean;
  draft: boolean;
  processNotes?: string;
  processImages?: ProjectImage[];
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "split-face-pendant",
    indexNumber: "01",
    title: "Split-Face Pendant",
    year: 2024,
    category: "Wearable Art",
    summary:
      "A dual-surface metal pendant exploring human expression, divided between raw oxidized bronze and high-polish sterling silver.",
    description:
      "This project investigates duality and identity through wearable metal form. One face exhibits heavily textured, dark oxidized bronze evoking ancient relic surfaces, while the opposing half seamlessly transitions into smooth, mirror-polished sterling silver.",
    concept:
      "The piece reflects upon the tension between hidden internal states and polished external personas. By dividing the sculptural mask down the sagittal plane, the pendant shifts dynamically under gallery and natural lighting.",
    coverImage: {
      src: "/images/projects/split-face-pendant/hero.jpg",
      alt: "Split-face pendant made from oxidized bronze and polished silver resting on raw linen",
      caption: "Split-Face Pendant (2024). Oxidized bronze, sterling silver, silver chain.",
      aspect: "portrait",
    },
    gallery: [
      {
        src: "/images/projects/split-face-pendant/hero.jpg",
        alt: "Front view of split-face pendant showing bronze and silver halves",
        caption: "Frontal view detailing the tactile junction between raw bronze oxidation and polished silver.",
        aspect: "portrait",
      },
      {
        src: "/images/process/workbench.jpg",
        alt: "Goldsmith workbench peg with saw frame and silver wire",
        caption: "Bench setup during hand-carving and soldering of the silver mounting loop.",
        aspect: "landscape",
      },
    ],
    materials: ["Oxidized Bronze", "Sterling Silver (925)", "Silver Trace Chain"],
    techniques: ["Lost-Wax Casting", "Surface Patination", "Hand Filing & Mirror Polishing", "Solder Assembly"],
    dimensions: "52 × 34 × 18 mm",
    featured: true,
    draft: false,
    processNotes:
      "Initial wax model sculpted by hand with dental carving tools, followed by lost-wax casting in two distinct metal alloys and precision micro-soldering.",
  },
  {
    slug: "tagua-study",
    indexNumber: "02",
    title: "Tagua Nut Face Study",
    year: 2024,
    category: "Material Studies",
    summary:
      "Sculptural exploration of vegetable ivory (tagua nut) combined with delicate sterling silver wire inlay.",
    description:
      "An investigation into alternative organic materials in contemporary goldsmithing. Derived from the seed of the Phytelephas palm, tagua nut shares the density and luster of traditional ivory. This study carves a fluid facial profile accented with inlaid silver wire trace.",
    concept:
      "Exploring organic density, tactile hand-carving, and sustainable material alternatives in contemporary studio jewellery.",
    coverImage: {
      src: "/images/projects/tagua-study/hero.jpg",
      alt: "Carved pale tagua nut facial profile sculpture with inlaid sterling silver wire",
      caption: "Tagua Nut Study (2024). Carved tagua seed, inlaid sterling silver wire, granite base.",
      aspect: "portrait",
    },
    gallery: [
      {
        src: "/images/projects/tagua-study/hero.jpg",
        alt: "Tagua nut sculpture profile view",
        caption: "Profile detail showing delicate silver wire inlaid along carved contours.",
        aspect: "portrait",
      },
    ],
    materials: ["Ecuadorian Tagua Nut (Vegetable Ivory)", "Fine Sterling Silver Wire"],
    techniques: ["Hand Carving & Rasping", "Micro-Channel Wire Inlay", "Beeswax Polishing"],
    dimensions: "85 × 40 × 30 mm",
    featured: true,
    draft: false,
    processNotes:
      "The tagua seed was dried over three months, shaped using fine needle rasps, and inlaid with cold-fitted silver wire.",
  },
  {
    slug: "alabaster-study",
    indexNumber: "03",
    title: "Alabaster & Copper Study",
    year: 2024,
    category: "Sculptural Objects",
    summary:
      "Sculptural mask form carved from translucent white alabaster stone, bound with hand-drawn copper wire coil.",
    description:
      "A dialogue between stone softness and metal tension. Natural white alabaster is hollowed and carved to reveal subtle translucency, while raw copper wire binds the sculpture in rhythmic restraint.",
    concept:
      "The piece explores themes of containment, weight, and light transmission in non-traditional jewellery objects.",
    coverImage: {
      src: "/images/projects/alabaster-study/hero.jpg",
      alt: "Carved translucent alabaster stone head bound with copper wire",
      caption: "Alabaster & Copper Study (2024). Carved alabaster, raw copper wire.",
      aspect: "landscape",
    },
    gallery: [
      {
        src: "/images/projects/alabaster-study/hero.jpg",
        alt: "Alabaster head bound with copper wire on stone slab",
        caption: "Studio installation lighting illustrating light diffusion through carved stone translucency.",
        aspect: "landscape",
      },
    ],
    materials: ["Italian White Alabaster", "Raw Copper Wire"],
    techniques: ["Chisel & Rasp Carving", "Wire Tension Wrapping", "Matte Sanding"],
    dimensions: "120 × 90 × 85 mm",
    featured: true,
    draft: false,
    processNotes:
      "Carved at the university sculpture workshop using tungsten-tipped chisels and wet-sanded up to 1200 grit.",
  },
  {
    slug: "sculptural-mask",
    indexNumber: "04",
    title: "Mini Mask Brooch",
    year: 2024,
    category: "Jewellery & Metal",
    summary:
      "Wearable mini face mask brooch handcrafted from patinated green copper and forged silver.",
    description:
      "A wearable brooch bridging miniature sculpture and body adornment. Hammered sterling silver forms the base structural frame, supporting a repoussé copper mask treated with chemical verdigris oxidation.",
    concept:
      "Examining the historical tradition of protective amulets and mask motifs in contemporary wearable art.",
    coverImage: {
      src: "/images/projects/sculptural-mask/hero.jpg",
      alt: "Patinated green copper and forged silver mask brooch on dark slate",
      caption: "Mini Mask Brooch (2024). Patinated copper, forged sterling silver, steel pin mechanism.",
      aspect: "portrait",
    },
    gallery: [
      {
        src: "/images/projects/sculptural-mask/hero.jpg",
        alt: "Close-up of patinated mask brooch",
        caption: "Detail of verdigris patination and hand-hammered silver rim.",
        aspect: "portrait",
      },
    ],
    materials: ["Copper Sheet", "Forged Sterling Silver", "Stainless Steel Brooch Pin"],
    techniques: ["Repoussé & Chasing", "Chemical Verdigris Patination", "Cold Connections"],
    dimensions: "45 × 30 × 12 mm",
    featured: true,
    draft: false,
    processNotes:
      "Formed using pitch-block chasing technique followed by controlled ammonium chloride chemical patination.",
  },
];

export function getPublishedProjects(): Project[] {
  return PROJECTS_DATA.filter((p) => !p.draft);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug && !p.draft);
}

export function getAdjacentProjects(currentSlug: string) {
  const published = getPublishedProjects();
  const currentIndex = published.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = published[(currentIndex - 1 + published.length) % published.length];
  const next = published[(currentIndex + 1) % published.length];
  return { prev, next };
}
