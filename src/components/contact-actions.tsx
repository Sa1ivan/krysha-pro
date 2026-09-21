"use client";

import { Check, Copy, MessageCircle, Phone } from "lucide-react";
import React, { useState } from "react";

import { siteContent } from "@/content/site";

type ContactActionsProps = {
  compact?: boolean;
};

export function ContactActions({ compact = false }: ContactActionsProps) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");

  async function copyPhoneNumber() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API is unavailable");

      await navigator.clipboard.writeText(siteContent.phone.display);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }

    window.setTimeout(() => setCopyStatus("idle"), 2200);
  }

  return (
    <>
      <div className={compact ? "grid grid-cols-3 gap-2" : "flex flex-wrap gap-3"}>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#c85d35] px-5 text-sm font-bold text-white transition hover:bg-[#df7047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1b388]"
          data-metrica-goal="phone_click"
          href={`tel:${siteContent.phone.e164}`}
        >
          <Phone aria-hidden="true" size={18} />
          <span className={compact ? "sr-only" : ""}>Позвонить</span>
        </a>
        <a
          aria-label="Рассчитать по фото в WhatsApp"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1b388]"
          data-metrica-goal="whatsapp_click"
          href={siteContent.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden="true" size={18} />
          <span className={compact ? "sr-only" : ""}>Рассчитать по фото</span>
        </a>
        <div className="relative">
          <button
            aria-label="Скопировать номер для Telegram и MAX"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1b388]"
            onClick={copyPhoneNumber}
            type="button"
          >
            {copyStatus === "success" ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
            <span className={compact ? "sr-only" : ""}>Telegram / MAX</span>
          </button>
        </div>
      </div>
      {copyStatus !== "idle" && (
        <p aria-live="polite" className={copyStatus === "error" ? "mt-2 text-sm font-semibold text-[#ffe0d3]" : "sr-only"}>
          {copyStatus === "success" ? "Номер скопирован" : `Не удалось скопировать номер. Позвоните: ${siteContent.phone.display}`}
        </p>
      )}
    </>
  );
}
