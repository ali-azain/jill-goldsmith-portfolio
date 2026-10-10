import React from "react";
import { EyebrowLabel } from "./EyebrowLabel";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  return (
    <div className={`space-y-3 ${alignmentClass} ${className}`}>
      {eyebrow && <EyebrowLabel dark={dark}>{eyebrow}</EyebrowLabel>}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] ${
          dark ? "text-[#F1EDE4]" : "text-[#171817]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm md:text-base max-w-2xl leading-relaxed font-light ${
            dark ? "text-[#A7A6A0]" : "text-[#686760]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
