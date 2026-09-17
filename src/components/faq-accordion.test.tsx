/** @vitest-environment jsdom */

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

import { FaqAccordion } from "./faq-accordion";

describe("FaqAccordion", () => {
  it("opens the selected answer", () => {
    render(
      <FaqAccordion
        items={[{ question: "Как получить расчёт?", answer: "Отправьте фото объекта." }]}
      />,
    );

    const trigger = screen.getByRole("button", { name: "Как получить расчёт?" });
    fireEvent.click(trigger);

    expect(trigger).toHaveProperty("ariaExpanded", "true");
    expect(screen.getByText("Отправьте фото объекта.")).toBeTruthy();
  });
});
