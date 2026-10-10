"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { PageContainer } from "./PageContainer";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F1EDE4]/90 backdrop-blur-md border-b border-[#171817]/10 py-4"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <PageContainer>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43]"
          >
            <span className="font-serif text-xl md:text-2xl tracking-wide font-normal text-[#171817] group-hover:text-[#995B43] transition-colors">
              {SITE_CONFIG.ARTIST_NAME}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#686760] font-medium hidden sm:block">
              {SITE_CONFIG.ARTIST_DISCIPLINE}
            </span>
          </Link>

          <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
            {SITE_CONFIG.NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-all relative py-1 ${
                    isActive
                      ? "text-[#171817] font-semibold"
                      : "text-[#686760] hover:text-[#171817]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#995B43]" />
                  )}
                </Link>
              );
            })}

            <span className="h-3 w-[1px] bg-[#171817]/20" aria-hidden="true" />

            <a
              href={SITE_CONFIG.ARTIST_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Portfolio"
              className="text-[#686760] hover:text-[#995B43] transition-colors p-1"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            className="md:hidden p-2 text-[#171817] hover:text-[#995B43] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#995B43] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </PageContainer>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bottom-0 z-50 bg-[#F1EDE4] border-t border-[#171817]/10 px-6 py-8 flex flex-col justify-between animate-fadeIn">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-6">
            {SITE_CONFIG.NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-serif text-2xl tracking-wide transition-colors ${
                    isActive
                      ? "text-[#995B43] font-medium"
                      : "text-[#171817] hover:text-[#995B43]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4 pt-6 border-t border-[#171817]/10">
            <p className="text-xs uppercase tracking-[0.15em] text-[#686760]">
              {SITE_CONFIG.ARTIST_LOCATION}
            </p>
            <a
              href={SITE_CONFIG.ARTIST_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-[#171817] hover:text-[#995B43] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{SITE_CONFIG.ARTIST_INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
