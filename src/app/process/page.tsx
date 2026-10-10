import React from "react";
import type { Metadata } from "next";
import { PROCESS_DATA } from "@/lib/data/process";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessArchiveClient } from "@/components/process/ProcessArchiveClient";

export const metadata: Metadata = {
  title: "Studio Process & Research Archive",
  description:
    "Visual research archive of goldsmithing experiments, lost-wax casting, tagua nut carving, and material studies.",
};

export default function ProcessPage() {
  return (
    <div className="py-12 md:py-16 space-y-12">
      <PageContainer>
        <div className="space-y-6 max-w-3xl pb-8">
          <SectionHeading
            eyebrow="Sketchbook & Atelier"
            title="Studio Process & Research"
            subtitle="An unconventional sketchbook documenting raw metal experiments, workshop trials, tagua nut carving, and lost-wax iterations."
          />
        </div>

        <ProcessArchiveClient items={PROCESS_DATA} />
      </PageContainer>
    </div>
  );
}
