import type { MetadataRoute } from "next";

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
  ];
}
