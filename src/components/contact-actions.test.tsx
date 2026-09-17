/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { ContactActions } from "./contact-actions";

const writeText = vi.fn();

beforeEach(() => {
  writeText.mockReset();
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
});

afterEach(cleanup);

describe("ContactActions", () => {
  it("copies the phone number for Telegram and MAX", async () => {
    render(<ContactActions compact />);

    fireEvent.click(screen.getByRole("button", { name: "Скопировать номер для Telegram и MAX" }));

    expect(writeText).toHaveBeenCalledWith("+7 928 089-98-02");
    expect(await screen.findByText("Номер скопирован")).toBeTruthy();
  });

  it("explains when the number cannot be copied", async () => {
    writeText.mockRejectedValueOnce(new Error("Clipboard permission denied"));
    render(<ContactActions compact />);

    fireEvent.click(screen.getByRole("button", { name: "Скопировать номер для Telegram и MAX" }));

    expect(await screen.findByText("Не удалось скопировать номер. Позвоните: +7 928 089-98-02")).toBeTruthy();
  });
});
