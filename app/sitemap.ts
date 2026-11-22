import type { MetadataRoute } from "next";
const routes = ["/", "/free-trial", "/contact", "/privacy-policy", "/terms", "/cookie-policy"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: "https://delvor.lt" + route, lastModified: new Date("2026-11-22"), changeFrequency: route === "/" ? "weekly" : "monthly", priority: route === "/" ? 1 : route === "/free-trial" ? .9 : .7 })); }
