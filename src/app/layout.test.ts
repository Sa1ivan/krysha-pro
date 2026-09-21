import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import RootLayout, { metadata } from "./layout";

describe("site metadata", () => {
  it("publishes the roofing favicon for browser tabs", () => {
    expect(metadata.icons).toEqual({ icon: "/favicon.svg" });
  });

  it("loads the configured Yandex Metrica counter", () => {
    const markup = renderToStaticMarkup(React.createElement(RootLayout, null, "content"));

    expect(markup).toContain("112883390");
    expect(markup).toContain("mc.yandex.ru/watch/112883390");
  });
});
