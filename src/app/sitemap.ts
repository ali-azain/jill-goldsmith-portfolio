import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/config";
import { getPublishedProjects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.SITE_URL;
  const publishedProjects = getPublishedProjects();
  const buildDate = new Date().toISOString();

  const projectUrls = publishedProjects.map((project) => ({
    url: `${baseUrl}/works/${project.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const routes = ["", "/works", "/process", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.9,
  }));

  return [...routes, ...projectUrls];
}
