import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPublishedProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/lib/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetailClient } from "@/components/works/ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getPublishedProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Jewellery & Goldsmith Portfolio`,
      description: project.summary,
      images: [{ url: project.coverImage.src }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <div className="py-12 md:py-16">
      <PageContainer>
        <ProjectDetailClient
          project={project}
          prevProject={prev}
          nextProject={next}
        />
      </PageContainer>
    </div>
  );
}
