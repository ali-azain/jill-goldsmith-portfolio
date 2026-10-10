"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { PageContainer } from "./PageContainer";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#171817] text-[#F1EDE4] pt-12 sm:pt-16 pb-8 sm:pb-12 mt-16 sm:mt-24 border-t border-[#F1EDE4]/10">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 pb-8 sm:pb-12 border-b border-[#F1EDE4]/15">
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F1EDE4]">
              {SITE_CONFIG.ARTIST_NAME}
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A6A0] font-light max-w-sm leading-relaxed">
              {SITE_CONFIG.ARTIST_DISCIPLINE}. Exploring tactile presence, wearable sculpture, and material dialogues in contemporary goldsmithing.
            </p>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[#995B43] font-medium pt-1">
              {SITE_CONFIG.ARTIST_LOCATION}
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#A7A6A0] font-medium">
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              {SITE_CONFIG.NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F1EDE4]/80 hover:text-[#995B43] transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#A7A6A0] font-medium">
              Professional Enquiries
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#A7A6A0] font-light">
              <p>For gallery exhibitions, commissions, studio internships, or tutor assessments:</p>
              <a
                href={`mailto:${SITE_CONFIG.ARTIST_EMAIL}`}
                className="inline-flex items-center space-x-2 text-[#F1EDE4] hover:text-[#995B43] transition-colors pt-1 break-all"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#995B43] shrink-0" />
                <span className="underline underline-offset-4">{SITE_CONFIG.ARTIST_EMAIL}</span>
              </a>
              <div className="pt-1.5">
                <a
                  href={SITE_CONFIG.ARTIST_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#F1EDE4] hover:text-[#995B43] transition-colors py-1"
                >
                  <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#995B43]" />
                  <span>{SITE_CONFIG.ARTIST_INSTAGRAM_HANDLE}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#A7A6A0] font-light space-y-3 sm:space-y-0">
          <p>© {currentYear} {SITE_CONFIG.ARTIST_NAME}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hidden sm:inline">Contemporary Goldsmith Portfolio</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#F1EDE4] hover:text-[#995B43] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#995B43] py-1"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
