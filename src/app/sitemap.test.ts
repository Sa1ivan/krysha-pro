import { afterEach, describe, expect, it } from "vitest";

import sitemap from "./sitemap";

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalSiteUrl) process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  else delete process.env.NEXT_PUBLIC_SITE_URL;
});

describe("sitemap", () => {
  it("does not claim a fresh update when content has not changed", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://krovlya.example.ru";

    expect(sitemap()[0]).not.toHaveProperty("lastModified");
  });
});
