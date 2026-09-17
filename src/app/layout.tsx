import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#171a19",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Кровельные работы под ключ в Краснодарском крае — монтаж и ремонт крыш",
  description:
    "Монтаж, ремонт и реконструкция кровли в Выселках и Краснодарском крае. Более 20 лет опыта, договор, гарантия, расчёт по фото.",
  icons: { icon: "/favicon.svg" },
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Кровельные работы под ключ — монтаж и ремонт крыш",
    description: "Новые крыши, ремонт и реконструкция объектов любой сложности. Расчёт по фото в WhatsApp.",
    images: siteUrl
      ? [
          {
            url: "/images/portfolio/krovlya-05.jpg",
            width: 1280,
            height: 960,
            alt: "Кровельные работы под ключ",
          },
        ]
      : undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
