"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, ZoomIn } from "lucide-react";
import { Project } from "@/lib/data/projects";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Reveal } from "@/components/ui/Reveal";

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
}: ProjectDetailClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = [project.coverImage, ...(project.gallery || [])];

  return (
    <article className="space-y-16 md:space-y-24">
      {/* Lightbox Modal */}
      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Top Header & Breadcrumb */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#171817]/10 pb-4">
          <Link
            href="/works"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#686760] hover:text-[#995B43] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Works</span>
          </Link>
          <span className="font-mono text-xs text-[#995B43] font-medium">
            Project {project.indexNumber}
          </span>
        </div>

        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#686760]">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#171817] leading-[1.05]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#686760] font-light leading-relaxed">
            {project.summary}
          </p>
        </div>
      </div>

      {/* Hero Artwork Image with Click-to-Zoom */}
      <Reveal>
        <div
          onClick={() => setLightboxIndex(0)}
          className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-[#EAE5DC] border border-[#171817]/10 overflow-hidden group cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(0)}
          aria-label="Click to enlarge hero photograph"
        >
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-[#171817]/80 backdrop-blur-sm text-[#F1EDE4] text-xs font-medium flex items-center space-x-2 opacity-90 group-hover:opacity-100 transition-opacity">
            <ZoomIn className="w-3.5 h-3.5 text-[#995B43]" />
            <span>Click to enlarge</span>
          </div>
        </div>
        <p className="text-xs text-[#686760] font-light mt-3">
          {project.coverImage.caption}
        </p>
      </Reveal>

      {/* Two-Column Concept & Specifications Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
        {/* Left Column: Concept & Description */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <EyebrowLabel>Artistic Intent & Context</EyebrowLabel>
            <h2 className="font-serif text-2xl md:text-3xl text-[#171817] font-normal">
              Concept & Exploration
            </h2>
            <div className="space-y-4 text-sm md:text-base text-[#686760] font-light leading-relaxed">
              <p>{project.description}</p>
              <p>{project.concept}</p>
            </div>
          </div>

          {project.processNotes && (
            <div className="p-6 bg-[#FAF8F5] border-l-2 border-[#995B43] space-y-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#171817] font-medium">
                Making & Studio Notes
              </h3>
              <p className="text-xs md:text-sm text-[#686760] font-light leading-relaxed">
                {project.processNotes}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Technical Metadata Table */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 md:p-8 bg-[#FAF8F5] border border-[#171817]/10 space-y-6">
            <h3 className="font-serif text-xl text-[#171817] font-normal border-b border-[#171817]/10 pb-3">
              Object Specification
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <span className="block text-[#686760] uppercase tracking-[0.15em] font-medium mb-1.5">
                  Materials
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.materials.map((mat) => (
                    <span
                      key={mat}
                      className="px-2.5 py-1 bg-[#F1EDE4] border border-[#171817]/10 text-[#171817]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="block text-[#686760] uppercase tracking-[0.15em] font-medium mb-1.5">
                  Techniques
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techniques.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#F1EDE4] border border-[#171817]/10 text-[#171817]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.dimensions && (
                <div className="pt-2 border-t border-[#171817]/10">
                  <span className="block text-[#686760] uppercase tracking-[0.15em] font-medium mb-1">
                    Dimensions
                  </span>
                  <span className="font-mono text-[#171817] text-xs">{project.dimensions}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="space-y-8 pt-12 border-t border-[#171817]/10">
          <EyebrowLabel>Gallery & Detail Documentation</EyebrowLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, gIdx) => {
              const globalIdx = gIdx + 1;
              return (
                <Reveal key={img.src} delay={gIdx * 0.1}>
                  <div
                    onClick={() => setLightboxIndex(globalIdx)}
                    className="relative aspect-[4/3] w-full bg-[#EAE5DC] border border-[#171817]/10 overflow-hidden group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(globalIdx)}
                    aria-label={`Enlarge image ${gIdx + 1}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 z-10 p-2 bg-[#171817]/80 text-[#F1EDE4]">
                      <ZoomIn className="w-4 h-4 text-[#995B43]" />
                    </div>
                  </div>
                  <p className="text-xs text-[#686760] font-light mt-2">{img.caption}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      )}

      {/* Next/Prev Navigation Footer */}
      <div className="pt-16 border-t border-[#171817]/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {prevProject ? (
          <Link
            href={`/works/${prevProject.slug}`}
            className="p-6 bg-[#FAF8F5] border border-[#171817]/10 hover:border-[#995B43] transition-colors group space-y-1"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#686760] font-medium flex items-center space-x-1">
              <ArrowLeft className="w-3 h-3 text-[#995B43]" />
              <span>Previous Object</span>
            </span>
            <h4 className="font-serif text-xl text-[#171817] group-hover:text-[#995B43] transition-colors">
              {prevProject.title}
            </h4>
          </Link>
        ) : <div />}

        {nextProject ? (
          <Link
            href={`/works/${nextProject.slug}`}
            className="p-6 bg-[#FAF8F5] border border-[#171817]/10 hover:border-[#995B43] transition-colors group space-y-1 text-right sm:text-right"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#686760] font-medium flex items-center justify-end space-x-1">
              <span>Next Object</span>
              <ArrowRight className="w-3 h-3 text-[#995B43]" />
            </span>
            <h4 className="font-serif text-xl text-[#171817] group-hover:text-[#995B43] transition-colors">
              {nextProject.title}
            </h4>
          </Link>
        ) : <div />}
      </div>
    </article>
  );
}
