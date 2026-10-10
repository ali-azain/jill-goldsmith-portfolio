"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectImage } from "@/lib/data/projects";

interface ImageLightboxProps {
  images: ProjectImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentImage = isOpen ? images[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      }
    },
    [isOpen, currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171817]/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery zoom view"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-3 text-[#F1EDE4] hover:text-[#995B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 md:left-8 z-10 p-3 text-[#F1EDE4] hover:text-[#995B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}

      {/* Main Image & Caption Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center space-y-4">
        <div className="relative w-full h-[65vh] md:h-[75vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt || "Artwork photograph enlarge view"}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
        {currentImage.caption && (
          <p className="text-sm md:text-base text-[#A7A6A0] font-light text-center max-w-2xl px-4">
            {currentImage.caption}
          </p>
        )}
      </div>

      {/* Navigation Right */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 md:right-8 z-10 p-3 text-[#F1EDE4] hover:text-[#995B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}
