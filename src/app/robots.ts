import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteRoot = siteUrl ? new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`) : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteRoot ? new URL("sitemap.xml", siteRoot).toString() : undefined,
    host: siteRoot?.toString(),
  };
}
