import { describe, expect, it } from "vitest";

import { metadata } from "./layout";

describe("site metadata", () => {
  it("publishes the roofing favicon for browser tabs", () => {
    expect(metadata.icons).toEqual({ icon: "/favicon.svg" });
  });
});
