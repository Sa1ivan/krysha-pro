import { describe, expect, it } from "vitest";

import { buildStructuredData, siteContent } from "./site";

describe("site content", () => {
  it("publishes the verified contacts and service prices", () => {
    expect(siteContent.phone.e164).toBe("+79280899802");
    expect(siteContent.services).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "Монтаж кровли", price: "от 2 500 ₽", unit: "за м²" }),
        expect.objectContaining({ title: "Монтаж мягкой кровли", price: "от 3 000 ₽", unit: "за м²" }),
      ]),
    );
  });

  it("describes services and FAQs without fabricated review markup", () => {
    const schemas = buildStructuredData();
    const schemaTypes = schemas.map((schema) => schema["@type"]);

    expect(schemaTypes).toEqual(expect.arrayContaining(["Service", "FAQPage"]));
    expect(schemaTypes).not.toContain("Review");
    expect(JSON.stringify(schemas)).not.toContain("aggregateRating");
  });
});
