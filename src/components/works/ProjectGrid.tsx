import React from "react";
import { Project } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="py-16 text-center text-[#686760] font-light">
        No projects found matching the selected category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
      {projects.map((project, idx) => {
        // Asymmetric grid layout: Item 0 gets span 7, Item 1 gets span 5, Item 2 gets span 5, Item 3 gets span 7
        const colSpanClass =
          idx % 4 === 0
            ? "lg:col-span-7"
            : idx % 4 === 1
            ? "lg:col-span-5"
            : idx % 4 === 2
            ? "lg:col-span-5"
            : "lg:col-span-7";

        const isFeatured = idx % 4 === 0;

        return (
          <Reveal key={project.slug} delay={idx * 0.1} className={colSpanClass}>
            <ProjectCard project={project} featuredLayout={isFeatured} />
          </Reveal>
        );
      })}
    </div>
  );
}
