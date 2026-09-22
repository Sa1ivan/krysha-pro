import { afterEach, describe, expect, it } from "vitest";

import sitemap, { dynamic } from "./sitemap";

const originalSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (originalSiteUrl) process.env.NEXT_PUBLIC_SITE_URL = originalSiteUrl;
  else delete process.env.NEXT_PUBLIC_SITE_URL;
});

describe("sitemap", () => {
  it("is generated during the static export", () => {
    expect(dynamic).toBe("force-static");
  });

  it("does not claim a fresh update when content has not changed", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://krovlya.example.ru";

    expect(sitemap()[0]).not.toHaveProperty("lastModified");
  });

  it("lists the home page and every service page", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://krovlya.example.ru";

    expect(sitemap().map((entry) => entry.url)).toEqual([
      "https://krovlya.example.ru/",
      "https://krovlya.example.ru/uslugi/montazh-krovli/",
      "https://krovlya.example.ru/uslugi/myagkaya-krovlya/",
      "https://krovlya.example.ru/uslugi/vodostochnye-sistemy/",
      "https://krovlya.example.ru/uslugi/snegozaderzhateli/",
      "https://krovlya.example.ru/uslugi/mansardnye-okna/",
      "https://krovlya.example.ru/uslugi/montazh-karniza/",
      "https://krovlya.example.ru/uslugi/remont-krovli/",
    ]);
  });
});
