import { describe, expect, it } from "vitest";

import { dynamic } from "./robots";

describe("robots", () => {
  it("is generated during the static export", () => {
    expect(dynamic).toBe("force-static");
  });
});
