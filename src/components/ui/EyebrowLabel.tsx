import React from "react";

interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  align?: "left" | "center" | "right";
}

export function EyebrowLabel({
  children,
  className = "",
  dark = false,
  align = "left",
}: EyebrowLabelProps) {
  const alignmentClass =
    align === "center"
      ? "text-center mx-auto block"
      : align === "right"
      ? "text-right ml-auto block"
      : "text-left inline-block";

  return (
    <span
      className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
        dark ? "text-[#A7A6A0]" : "text-[#686760]"
      } ${alignmentClass} ${className}`}
    >
      {children}
    </span>
  );
}
