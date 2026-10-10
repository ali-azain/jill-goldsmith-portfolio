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
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#171817]/95 backdrop-blur-md p-3 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery zoom view"
    >
      {/* Touch-Friendly Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 sm:p-3 bg-[#171817]/80 rounded-full text-[#F1EDE4] hover:text-[#995B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer touch-manipulation"
        aria-label="Close image lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Left */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-2 sm:left-4 md:left-8 z-20 p-2 sm:p-3 bg-[#171817]/80 rounded-full text-[#F1EDE4] hover:text-[#995B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer touch-manipulation"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
      )}

      {/* Main Image & Caption Container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-3 sm:space-y-4 px-2">
        <div className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt || "Artwork photograph enlarge view"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
        {currentImage.caption && (
          <p className="text-xs sm:text-sm md:text-base text-[#A7A6A0] font-light text-center max-w-2xl px-3 leading-relaxed">
            {currentImage.caption}
          </p>
        )}
      </div>

      {/* Navigation Right */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-2 sm:right-4 md:right-8 z-20 p-2 sm:p-3 bg-[#171817]/80 rounded-full text-[#F1EDE4] hover:text-[#995B43] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer touch-manipulation"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" />
        </button>
      )}
    </div>
  );
}
