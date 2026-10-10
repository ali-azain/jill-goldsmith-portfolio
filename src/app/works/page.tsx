import React from "react";
import type { Metadata } from "next";
import { getPublishedProjects } from "@/lib/data/projects";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorksArchiveClient } from "@/components/works/WorksArchiveClient";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "Complete selected-works archive of contemporary goldsmithing, wearable sculptures, tagua nut studies, and metal experiments.",
};

export default function WorksPage() {
  const projects = getPublishedProjects();

  return (
    <div className="py-12 md:py-16 space-y-12">
      <PageContainer>
        <div className="space-y-6 max-w-3xl pb-8">
          <SectionHeading
            eyebrow="Portfolio Archive"
            title="Selected Works & Objects"
            subtitle={`A curated collection of ${projects.length} completed projects, material studies, and wearable sculptures created between 2024 and present.`}
          />
        </div>

        <WorksArchiveClient initialProjects={projects} />
      </PageContainer>
    </div>
  );
}
