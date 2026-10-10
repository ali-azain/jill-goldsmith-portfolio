"use client";

import React, { useState } from "react";
import { Project } from "@/lib/data/projects";
import { ProjectGrid } from "./ProjectGrid";

interface WorksArchiveClientProps {
  initialProjects: Project[];
}

export function WorksArchiveClient({ initialProjects }: WorksArchiveClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Wearable Art",
    "Material Studies",
    "Sculptural Objects",
    "Jewellery & Metal",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Visual Category Filter Bar */}
      <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[#171817]/10">
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#686760] mr-2">
          Filter Category:
        </span>
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? initialProjects.length
              : initialProjects.filter((p) => p.category === cat).length;

          if (count === 0 && cat !== "All") return null;

          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] font-medium transition-colors border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] ${
                isActive
                  ? "bg-[#171817] text-[#F1EDE4] border-[#171817]"
                  : "bg-[#FAF8F5] text-[#686760] border-[#171817]/15 hover:border-[#171817] hover:text-[#171817]"
              }`}
            >
              {cat} <span className="ml-1 opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Project Grid Display */}
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}
