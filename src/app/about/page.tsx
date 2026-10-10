import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { ABOUT_DATA } from "@/lib/data/about";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { CVDownloadButton } from "@/components/documents/CVViewerModal";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About the Artist",
  description:
    "Education, craftsmanship, materials research, and curriculum vitae of goldsmithing student Jill.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16 space-y-20">
      <PageContainer>
        {/* Top Header & Practice Overview */}
        <div className="max-w-4xl space-y-8">
          <Reveal>
            <div className="space-y-4">
              <EyebrowLabel>Artist Practice & Profile</EyebrowLabel>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#171817] leading-tight">
                {SITE_CONFIG.ARTIST_NAME}
              </h1>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#995B43]">
                {SITE_CONFIG.ARTIST_DISCIPLINE} — {SITE_CONFIG.ARTIST_LOCATION}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-8 bg-[#FAF8F5] border-l-2 border-[#995B43] space-y-3">
              <h2 className="font-serif text-2xl md:text-3xl font-light text-[#171817]">
                {ABOUT_DATA.artisticPractice.heading}
              </h2>
              <p className="text-sm md:text-base text-[#686760] font-light leading-relaxed">
                {ABOUT_DATA.artisticPractice.statement}
              </p>
            </div>
          </Reveal>

          {/* CV Action */}
          <Reveal delay={0.2}>
            <div className="pt-2">
              <CVDownloadButton />
            </div>
          </Reveal>
        </div>
      </PageContainer>


      {/* Materials & Technical Specializations */}
      <section>
        <PageContainer>
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Craftsmanship"
              title="Materials & Technical Specializations"
              subtitle="A breakdown of precious alloys, sculptural organic minerals, and specialized goldsmithing techniques."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ABOUT_DATA.materialsAndTechniques.map((mat, idx) => (
                <Reveal key={mat.category} delay={idx * 0.15}>
                  <div className="p-6 bg-[#FAF8F5] border border-[#171817]/10 space-y-4 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-8 h-8 rounded-full bg-[#171817] text-[#F1EDE4] flex items-center justify-center font-mono text-xs font-medium">
                        0{idx + 1}
                      </div>
                      <h3 className="font-serif text-2xl text-[#171817] font-normal">
                        {mat.category}
                      </h3>
                    </div>

                    <ul className="space-y-2 border-t border-[#171817]/10 pt-4 text-xs md:text-sm text-[#686760] font-light">
                      {mat.items.map((item) => (
                        <li key={item} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#995B43]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Selected Exhibitions */}
      <section className="py-16 bg-[#171817] text-[#F1EDE4]">
        <PageContainer>
          <div className="max-w-4xl mx-auto space-y-10">
            <SectionHeading
              dark
              eyebrow="Exhibition Record"
              title="Selected Group Exhibitions"
              subtitle="Recent gallery presentations and student showcases."
            />

            <div className="space-y-4 divide-y divide-[#F1EDE4]/10">
              {ABOUT_DATA.exhibitionsAndProjects.map((ex, idx) => (
                <div key={idx} className="pt-4 first:pt-0 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-[#995B43]">{ex.year}</span>
                    <h4 className="font-serif text-xl text-[#F1EDE4]">{ex.title}</h4>
                    <p className="text-xs text-[#A7A6A0]">{ex.location}</p>
                  </div>
                  <p className="text-xs text-[#A7A6A0] font-light sm:max-w-xs text-left sm:text-right">
                    {ex.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Contact Invitation */}
      <section>
        <PageContainer>
          <div className="p-8 md:p-12 bg-[#FAF8F5] border border-[#171817]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <EyebrowLabel>Connect</EyebrowLabel>
              <h3 className="font-serif text-2xl md:text-3xl text-[#171817]">
                Would you like to discuss a project or exhibition?
              </h3>
              <p className="text-xs md:text-sm text-[#686760] font-light">
                Send a message directly or connect via social platforms.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
