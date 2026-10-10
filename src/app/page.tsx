import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { getFeaturedProjects } from "@/lib/data/projects";
import { PROCESS_DATA } from "@/lib/data/process";
import { ABOUT_DATA } from "@/lib/data/about";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ProjectCard } from "@/components/works/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const heroProject = featuredProjects[0];
  const processItems = PROCESS_DATA.slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-36 pb-12">
      {/* SECTION A: HERO */}
      <section className="relative pt-6 md:pt-12 min-h-[85vh] flex items-center">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Headline & Intro */}
            <div className="lg:col-span-7 space-y-8">
              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#686760] font-medium">
                  <span className="px-2.5 py-1 bg-[#171817]/5 border border-[#171817]/10">
                    {SITE_CONFIG.ARTIST_DISCIPLINE}
                  </span>
                  <span>•</span>
                  <span>{SITE_CONFIG.ARTIST_LOCATION}</span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-[#171817]">
                  Objects, forms & material experiments.
                </h1>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="text-base sm:text-lg md:text-xl text-[#686760] font-light leading-relaxed max-w-xl">
                  Exploring the space between jewellery, sculpture and the human form through lost-wax casting, tagua nut, alabaster stonework, and copper patination.
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="pt-4 flex flex-wrap items-center gap-6">
                  <Link
                    href="/works"
                    className="inline-flex items-center space-x-3 px-8 py-4 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium group"
                  >
                    <span>Explore Works Archive</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/process"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171817] hover:text-[#995B43] transition-colors py-2"
                  >
                    <Compass className="w-4 h-4 text-[#995B43]" />
                    <span>Studio Process</span>
                  </Link>
                </div>
              </Reveal>

              {/* Scroll indicator */}
              <div className="pt-8 hidden md:flex items-center space-x-3 text-[11px] uppercase tracking-[0.2em] text-[#A7A6A0]">
                <span className="w-8 h-[1px] bg-[#A7A6A0]/50" />
                <span>Scroll to discover archive</span>
              </div>
            </div>

            {/* Right Column: Hero Artwork Photograph */}
            <div className="lg:col-span-5">
              <Reveal delay={0.3}>
                <div className="relative aspect-[3/4] w-full bg-[#FAF8F5] border border-[#171817]/10 p-3 shadow-sm group">
                  <div className="relative w-full h-full overflow-hidden bg-[#EAE5DC]">
                    <Image
                      src={heroProject.coverImage.src}
                      alt={heroProject.coverImage.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  {/* Artwork caption badge */}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#686760] font-light">
                    <span>{heroProject.title} ({heroProject.year})</span>
                    <span className="font-mono text-[#995B43]">{heroProject.indexNumber}</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* SECTION B: INTRO STATEMENT */}
      <section className="py-12 bg-[#FAF8F5] border-y border-[#171817]/10">
        <PageContainer>
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <EyebrowLabel align="center">Artistic Practice & Intent</EyebrowLabel>
            <blockquote className="font-serif text-2xl md:text-4xl font-light text-[#171817] leading-snug">
              &ldquo;Jewellery is an intimate spatial medium—a sculpture at body scale that exists between art, identity, and tactile material tension.&rdquo;
            </blockquote>
            <p className="text-sm md:text-base text-[#686760] font-light leading-relaxed max-w-2xl mx-auto">
              Material research combining traditional goldsmithing techniques with organic and sculptural elements.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* SECTION C: SELECTED WORKS */}
      <section>
        <PageContainer>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#171817]/10">
              <SectionHeading
                eyebrow="Curated Selection"
                title="Selected Works"
                subtitle="Wearable sculptures, cast metal face forms, and material studies."
              />
              <Link
                href="/works"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#171817] hover:text-[#995B43] transition-colors shrink-0 group"
              >
                <span>View Complete Index ({featuredProjects.length})</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Asymmetric layout for selected works */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.slug}
                  className={idx === 0 ? "md:col-span-12 lg:col-span-7" : "md:col-span-6 lg:col-span-5"}
                >
                  <Reveal delay={idx * 0.15}>
                    <ProjectCard project={project} featuredLayout={idx === 0} />
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* SECTION D: PROCESS PREVIEW */}
      <section className="py-16 bg-[#171817] text-[#F1EDE4]">
        <PageContainer>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#F1EDE4]/15">
              <SectionHeading
                dark
                eyebrow="Studio Archive"
                title="Making & Material Exploration"
                subtitle="Workshop documentation, lost-wax casting, tagua nut carving, and chemical verdigris oxidation."
              />
              <Link
                href="/process"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F1EDE4] hover:text-[#995B43] transition-colors shrink-0 group"
              >
                <span>Explore Process Journal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processItems.map((item, idx) => (
                <Reveal key={item.id} delay={idx * 0.15}>
                  <div className="space-y-4 group">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#242524] border border-[#F1EDE4]/10">
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                      <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 bg-[#171817]/80 text-[#A7A6A0] border border-[#F1EDE4]/10 font-mono">
                        {item.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] text-[#A7A6A0] font-mono">{item.date}</div>
                      <h3 className="font-serif text-xl text-[#F1EDE4] font-normal group-hover:text-[#995B43] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A7A6A0] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* SECTION E: ARTISTIC PRACTICE */}
      <section>
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF8F5] p-8 md:p-16 border border-[#171817]/10">
            <div className="lg:col-span-7 space-y-6">
              <EyebrowLabel>Research & Technique</EyebrowLabel>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#171817] leading-tight">
                {ABOUT_DATA.artisticPractice.heading}
              </h2>
              <p className="text-sm md:text-base text-[#686760] font-light leading-relaxed">
                {ABOUT_DATA.artisticPractice.statement}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {["Lost-Wax Casting", "Tagua Nut Carving", "Alabaster Sculpture", "Verdigris Patination", "Repoussé"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#F1EDE4] border border-[#171817]/15 text-[#171817] font-medium text-[11px] uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full overflow-hidden border border-[#171817]/10">
                <Image
                  src="/images/process/workbench.jpg"
                  alt="Goldsmith bench peg with jeweler's saw and copper oxide patination"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* SECTION F: ABOUT PREVIEW */}
      <section>
        <PageContainer>
          <div className="bg-[#FAF8F5] p-8 md:p-14 border border-[#171817]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <EyebrowLabel>Studio Practice</EyebrowLabel>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#171817] leading-tight">
                Goldsmithing & Contemporary Jewellery Practice
              </h2>
              <p className="text-sm md:text-base text-[#686760] font-light leading-relaxed">
                Focusing on precious metal techniques, lost-wax micro casting, and experimental material exploration in Germany.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
              >
                <span>View About & CV</span>
                <ArrowUpRight className="w-4 h-4 text-[#995B43]" />
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* SECTION G: CLOSING CONTACT CTA */}
      <section className="py-16 bg-[#FAF8F5] border-y border-[#171817]/10">
        <PageContainer>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Reveal>
              <EyebrowLabel align="center">Get in Touch</EyebrowLabel>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#171817] leading-tight">
                Interested in the work?
              </h2>
              <p className="text-sm md:text-base text-[#686760] font-light leading-relaxed max-w-xl mx-auto">
                Open to discussions regarding university assessments, contemporary gallery exhibitions, goldsmithing studio internships, and artistic collaborations.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
                >
                  <span>Contact Artist</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={SITE_CONFIG.ARTIST_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 border border-[#171817]/20 text-[#171817] hover:border-[#995B43] hover:text-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
