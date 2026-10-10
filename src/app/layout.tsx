import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SITE_CONFIG } from "@/lib/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.SITE_URL),
  title: {
    default: `${SITE_CONFIG.ARTIST_NAME} | ${SITE_CONFIG.ARTIST_DISCIPLINE}`,
    template: `%s | ${SITE_CONFIG.ARTIST_NAME}`,
  },
  description: SITE_CONFIG.SITE_DESCRIPTION,
  keywords: [
    "goldsmith",
    "contemporary jewellery",
    "wearable art",
    "sculptural objects",
    "tagua nut carving",
    "alabaster sculpture",
    "metal research",
    "material study",
    "goldsmithing portfolio",
  ],
  authors: [{ name: SITE_CONFIG.ARTIST_NAME }],
  openGraph: {
    title: `${SITE_CONFIG.ARTIST_NAME} — Contemporary Goldsmith & Jewellery Artist`,
    description: SITE_CONFIG.SITE_DESCRIPTION,
    url: SITE_CONFIG.SITE_URL,
    siteName: SITE_CONFIG.ARTIST_NAME,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F1EDE4] text-[#171817] selection:bg-[#995B43] selection:text-white">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
