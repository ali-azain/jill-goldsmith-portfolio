import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36">
      <PageContainer>
        <div className="max-w-2xl mx-auto text-center space-y-8 p-8 md:p-16 bg-[#FAF8F5] border border-[#171817]/10">
          <EyebrowLabel align="center">Error 404</EyebrowLabel>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#171817] leading-tight">
            Object Not Found
          </h1>

          <p className="text-sm md:text-base text-[#686760] font-light leading-relaxed">
            The page or artwork entry you are searching for does not exist in this studio archive or may have been relocated.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/works"
              className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#171817]/20 text-[#171817] hover:border-[#995B43] hover:text-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Works Archive</span>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
