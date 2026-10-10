import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Get in touch with goldsmithing student Jill for academic assessments, gallery exhibitions, and studio opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-8 sm:py-12 md:py-16 space-y-10 sm:space-y-16">
      <PageContainer>
        <div className="space-y-4 sm:space-y-6 max-w-3xl pb-4 sm:pb-6 border-b border-[#171817]/10">
          <SectionHeading
            eyebrow="Communication"
            title="Contact & Professional Enquiries"
            subtitle="Inviting conversations regarding academic assessments, gallery exhibitions, goldsmithing studio internships, and artistic collaborations."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 pt-4 sm:pt-6">
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#171817]/10 space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 text-[#995B43]">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.15em] font-medium">Current Status</span>
              </div>
              <p className="text-xs sm:text-sm font-serif text-[#171817] leading-relaxed">
                {SITE_CONFIG.AVAILABILITY_LABEL}
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 text-sm text-[#686760]">
              <div className="space-y-1.5 sm:space-y-2">
                <EyebrowLabel>Direct Studio Email</EyebrowLabel>
                <div>
                  <a
                    href={`mailto:${SITE_CONFIG.ARTIST_EMAIL}`}
                    className="font-serif text-xl sm:text-2xl text-[#171817] hover:text-[#995B43] transition-colors underline underline-offset-4 break-all"
                  >
                    {SITE_CONFIG.ARTIST_EMAIL}
                  </a>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <EyebrowLabel>Social Journal</EyebrowLabel>
                <div>
                  <a
                    href={SITE_CONFIG.ARTIST_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm sm:text-base text-[#171817] hover:text-[#995B43] transition-colors py-1"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#995B43]" />
                    <span>{SITE_CONFIG.ARTIST_INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <EyebrowLabel>Studio Location</EyebrowLabel>
                <div className="flex items-center space-x-2 text-[#171817] text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#995B43] shrink-0" />
                  <span>{SITE_CONFIG.ARTIST_LOCATION}</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#F1EDE4] border-l-2 border-[#171817] space-y-2">
              <h4 className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold text-[#171817]">
                Notice
              </h4>
              <p className="text-xs text-[#686760] font-light leading-relaxed">
                This website serves as an artistic exhibition & portfolio rather than a commercial e-commerce store. For piece availability or custom research queries, please reach out via email.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
