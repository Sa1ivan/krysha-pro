import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("home page", () => {
  it("renders one local SEO heading and working primary contacts", () => {
    const markup = renderToStaticMarkup(<Home />);

    expect((markup.match(/<h1/g) ?? [])).toHaveLength(1);
    expect(markup).toContain("Монтаж и ремонт кровли под ключ в Выселках и Краснодарском крае");
    expect(markup).toContain('href="tel:+79280899802"');
    expect(markup).toContain("wa.me/79280899802");
    expect(markup).toContain("Рассчитать по фото");
    expect(markup).toContain("images.unsplash.com%2Fphoto-1778164920913-dbcf62cca52f");
    expect(markup).not.toContain("Кровля коттеджа с водостоками");
    expect(markup).toContain("pb-20");
    expect(markup).toContain("lg:pb-0");
    expect(markup).toContain('data-metrica-goal="phone_click"');
    expect(markup).toContain('data-metrica-goal="whatsapp_click"');
    expect(markup).toContain('data-metrica-goal="avito_click"');
    expect(markup).toContain("Мастер Ильяс");
    expect(markup).toContain("Ежедневно, 9:00–20:00");
    expect(markup).toContain("Краснодар");
    expect(markup).toContain("Москва");
  });
});
