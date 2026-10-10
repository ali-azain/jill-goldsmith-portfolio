"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, ZoomIn } from "lucide-react";
import { ProcessItem } from "@/lib/data/process";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { Reveal } from "@/components/ui/Reveal";

interface ProcessArchiveClientProps {
  items: ProcessItem[];
}

export function ProcessArchiveClient({ items }: ProcessArchiveClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Material Study",
    "Workshop Experiment",
    "Technique Trial",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image.src,
    alt: item.image.alt,
    caption: item.image.caption,
  }));

  return (
    <div className="space-y-12">
      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-[#171817]/10">
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#686760] flex items-center space-x-1 mr-2">
          <Filter className="w-3.5 h-3.5 text-[#995B43]" />
          <span>Filter Journal:</span>
        </span>
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? items.length
              : items.filter((i) => i.category === cat).length;
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

      {/* Masonry / Irregular Editorial Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        {filteredItems.map((item, idx) => {
          // Asymmetric grid layout: alternating 7-span and 5-span
          const colSpan = idx % 3 === 0 ? "lg:col-span-7" : "lg:col-span-5";

          return (
            <Reveal key={item.id} delay={idx * 0.1} className={colSpan}>
              <article className="group bg-[#FAF8F5] border border-[#171817]/10 overflow-hidden p-4 md:p-6 space-y-4">
                {/* Image */}
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-full overflow-hidden bg-[#EAE5DC] cursor-pointer ${
                    item.image.aspect === "landscape"
                      ? "aspect-[16/10]"
                      : "aspect-[3/4]"
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightboxIndex(idx)}
                  aria-label={`Enlarge image: ${item.title}`}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#171817]/80 backdrop-blur-sm text-[10px] uppercase tracking-[0.18em] font-mono text-[#F1EDE4]">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 right-3 p-1.5 bg-[#171817]/80 text-[#F1EDE4] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#995B43]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#686760]">
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-[#171817] font-normal group-hover:text-[#995B43] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#686760] font-light leading-relaxed">
                    {item.description}
                  </p>

                  <p className="text-xs text-[#A7A6A0] italic border-t border-[#171817]/10 pt-2">
                    {item.image.caption}
                  </p>

                  {/* Related project link if present */}
                  {item.relatedProjectSlug && (
                    <div className="pt-2">
                      <Link
                        href={`/works/${item.relatedProjectSlug}`}
                        className="inline-flex items-center space-x-1.5 text-xs text-[#995B43] hover:underline font-medium uppercase tracking-[0.12em]"
                      >
                        <span>View Related Finished Object</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
