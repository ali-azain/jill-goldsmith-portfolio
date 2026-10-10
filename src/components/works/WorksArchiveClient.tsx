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
    <div className="space-y-8 sm:space-y-12">
      {/* Mobile-Friendly Swipeable Category Filter Bar */}
      <div className="flex items-center gap-2 sm:gap-3 pb-4 sm:pb-6 border-b border-[#171817]/10 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#686760] shrink-0 mr-1 hidden sm:inline-block">
          Filter:
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
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium transition-colors border cursor-pointer shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] ${
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
