import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col h-full bg-[#FAF8F5] border border-[#171817]/10 overflow-hidden transition-all duration-300 hover:border-[#995B43]/50 hover:shadow-md">
      <Link
        href={`/works/${project.slug}`}
        className="flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43]"
      >
        {/* Image Container */}
        <div
          className={`relative w-full overflow-hidden bg-[#EAE5DC] ${
            featuredLayout
              ? "aspect-[4/3] md:aspect-[16/10]"
              : "aspect-[4/3] sm:aspect-[3/4]"
          }`}
        >
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Index Tag Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#F1EDE4]/90 backdrop-blur-sm text-[10px] sm:text-[11px] font-mono text-[#171817] tracking-wider border border-[#171817]/10">
            {project.indexNumber}
          </div>
        </div>

        {/* Card Metadata & Description */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1 space-y-3 sm:space-y-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#686760]">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>

            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-normal text-[#171817] group-hover:text-[#995B43] transition-colors leading-snug">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#686760] font-light leading-relaxed line-clamp-2">
              {project.summary}
            </p>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-[#171817]/10 flex items-center justify-between text-xs text-[#171817] font-medium group-hover:text-[#995B43] transition-colors">
            <span>View Project Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#995B43]" />
          </div>
        </div>
      </Link>
    </article>
  );
}
