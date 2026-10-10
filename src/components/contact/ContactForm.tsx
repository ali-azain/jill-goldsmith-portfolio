"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Curatorial / Exhibition Enquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields before sending.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    const mailtoSubject = encodeURIComponent(`[Website Enquiry] ${formData.subject} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${SITE_CONFIG.ARTIST_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
      setStatus("success");
    }, 600);
  };

  return (
    <div className="bg-[#FAF8F5] p-5 sm:p-8 md:p-10 border border-[#171817]/10 space-y-5 sm:space-y-6">
      <div>
        <h3 className="font-serif text-xl sm:text-2xl text-[#171817] font-normal">
          Send a Direct Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#686760] font-light mt-1">
          Submitting prepares your default email client with details directly addressed to Jill.
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="p-5 sm:p-6 bg-[#995B43]/10 border border-[#995B43]/30 text-[#171817] space-y-3"
        >
          <div className="flex items-center space-x-2.5 text-[#995B43]">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <h4 className="font-medium text-sm sm:text-base">Enquiry Form Prepared</h4>
          </div>
          <p className="text-xs sm:text-sm text-[#686760] font-light leading-relaxed">
            Your email client has been launched with your enquiry details. If it did not open automatically, please send your message directly to{" "}
            <a href={`mailto:${SITE_CONFIG.ARTIST_EMAIL}`} className="underline font-medium text-[#171817]">
              {SITE_CONFIG.ARTIST_EMAIL}
            </a>.
          </p>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({ name: "", email: "", subject: "Curatorial / Exhibition Enquiry", message: "" });
            }}
            className="text-xs uppercase tracking-[0.15em] font-medium text-[#995B43] hover:underline pt-2 cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
          {status === "error" && (
            <div
              role="alert"
              className="p-3.5 sm:p-4 bg-red-50 border border-red-200 text-red-800 text-xs flex items-center space-x-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#686760] font-medium">
                Your Name <span className="text-[#995B43]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Gallery Curator"
                className="w-full px-3.5 py-3 bg-[#F1EDE4] border border-[#171817]/15 text-sm sm:text-sm text-[#171817] placeholder-[#A7A6A0] focus:outline-none focus:border-[#995B43]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#686760] font-medium">
                Email Address <span className="text-[#995B43]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="curator@gallery-art.de"
                className="w-full px-3.5 py-3 bg-[#F1EDE4] border border-[#171817]/15 text-sm sm:text-sm text-[#171817] placeholder-[#A7A6A0] focus:outline-none focus:border-[#995B43]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#686760] font-medium">
              Enquiry Nature
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3.5 py-3 bg-[#F1EDE4] border border-[#171817]/15 text-sm sm:text-sm text-[#171817] focus:outline-none focus:border-[#995B43]"
            >
              <option value="Curatorial / Exhibition Enquiry">Curatorial / Exhibition Enquiry</option>
              <option value="Studio Internship / Goldsmithing Opportunity">Studio Internship / Goldsmithing Opportunity</option>
              <option value="Tutor / Academic Assessment">Tutor / Academic Assessment</option>
              <option value="Press / Editorial Feature">Press / Editorial Feature</option>
              <option value="Other Professional Collaboration">Other Professional Collaboration</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-[11px] sm:text-xs uppercase tracking-[0.15em] text-[#686760] font-medium">
              Message <span className="text-[#995B43]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide details about your project, exhibition, or question..."
              className="w-full px-3.5 py-3 bg-[#F1EDE4] border border-[#171817]/15 text-sm sm:text-sm text-[#171817] placeholder-[#A7A6A0] focus:outline-none focus:border-[#995B43] resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#171817] text-[#F1EDE4] hover:bg-[#995B43] transition-colors text-xs uppercase tracking-[0.2em] font-medium cursor-pointer w-full sm:w-auto disabled:opacity-50 text-center"
          >
            {status === "submitting" ? (
              <span>Preparing Mail...</span>
            ) : (
              <>
                <span>Send Professional Enquiry</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
