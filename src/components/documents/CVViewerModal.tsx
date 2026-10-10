"use client";

import React, { useState } from "react";
import { Download, FileText, ExternalLink, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function CVDownloadButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={SITE_CONFIG.ARTIST_CV_PATH}
          download="Artist-CV.pdf"
          className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#995B43]" />
          <span>Download Artist CV (PDF)</span>
        </a>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#171817]/20 text-[#171817] hover:border-[#995B43] hover:text-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Preview CV Summary</span>
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171817]/80 backdrop-blur-sm p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Curriculum Vitae Preview"
        >
          <div className="bg-[#F1EDE4] max-w-2xl w-full p-6 md:p-8 border border-[#171817]/20 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#171817] hover:text-[#995B43] transition-colors"
              aria-label="Close CV Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[11px] font-mono text-[#995B43] uppercase tracking-wider">
                Curriculum Vitae Preview
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#171817]">
                {SITE_CONFIG.ARTIST_NAME}
              </h3>
              <p className="text-xs uppercase tracking-[0.18em] text-[#686760]">
                {SITE_CONFIG.ARTIST_DISCIPLINE}
              </p>
            </div>

            <div className="space-y-6 text-sm text-[#171817] border-t border-[#171817]/10 pt-6">

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#686760]">
                  Selected Exhibitions
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#171817]/90">
                  <li>2024 — Emerging Metalsmiths Showcase (Munich)</li>
                  <li>2024 — Material Explorations Exhibition (London)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#686760]">
                  Technical Proficiency
                </h4>
                <p className="text-xs text-[#686760] leading-relaxed">
                  Lost-wax micro casting, repoussé & chasing, tagua nut hand carving, alabaster stonework, chemical verdigris patination, sterling silver alloy preparation, micro wire inlay.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#171817]/10 flex flex-wrap gap-4 items-center justify-between">
              <a
                href={SITE_CONFIG.ARTIST_CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-[#995B43] hover:underline font-medium"
              >
                <span>Open Raw PDF in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={SITE_CONFIG.ARTIST_CV_PATH}
                download="Artist-CV.pdf"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.18em] font-medium"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
