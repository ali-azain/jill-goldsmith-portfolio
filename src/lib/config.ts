/**
 * Central Configuration for Contemporary Goldsmith & Jewellery Artist Portfolio
 * 
 * Edit fields in this file to update artist branding, contact info, and site meta.
 */

export const SITE_CONFIG = {
  // Artist Identity
  ARTIST_NAME: "Jill",
  ARTIST_DISCIPLINE: "Goldsmithing Student & Contemporary Jewellery Artist",
  ARTIST_LOCATION: "Germany",
  
  // Contact & Social Links
  ARTIST_EMAIL: "jill@goldsmith-studio.de",
  ARTIST_INSTAGRAM_HANDLE: "@jello.ry",
  ARTIST_INSTAGRAM_URL: "https://instagram.com/jello.ry",
  
  // Documents & Assets
  ARTIST_CV_PATH: "/documents/artist-cv.pdf",
  
  // Site Metadata
  SITE_URL: "https://jill-goldsmith-portfolio.de",
  SITE_DESCRIPTION:
    "Portfolio of Jill (@jello.ry), an emerging goldsmithing student in Germany exploring sculptural forms, tagua nut, alabaster studies, and wearable metal art.",

  // Status Badge
  AVAILABILITY_LABEL: "Goldsmithing Student — Available for Academic Assessments, Curatorial Enquiries & Studio Internships",
  
  // Navigation Links
  NAV_LINKS: [
    { label: "Works", href: "/works" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
