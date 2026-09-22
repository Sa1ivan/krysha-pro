import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) return [];

  const siteRoot = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);

  return [
    {
      url: siteRoot.toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...siteContent.services.map((service) => ({
      url: new URL(`uslugi/${service.slug}/`, siteRoot).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
