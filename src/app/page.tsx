import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  MapPinned,
  Ruler,
  Wrench,
} from "lucide-react";
import React from "react";

import { ContactActions } from "@/components/contact-actions";
import { FaqAccordion } from "@/components/faq-accordion";
import { buildStructuredData, siteContent } from "@/content/site";

const navigation = [
  { href: "#services", label: "Услуги и цены" },
  { href: "#objects", label: "Объекты" },
  { href: "#process", label: "Как работаем" },
  { href: "#contacts", label: "Контакты" },
];

const steps = [
  {
    icon: Wrench,
    title: "Отправьте фото",
    text: "Пришлите фотографии крыши, город, площадь и задачу в WhatsApp.",
  },
  {
    icon: Ruler,
    title: "Получите ориентир",
    text: "Сориентируем по работам, материалам и условиям выезда на объект.",
  },
  {
    icon: FileText,
    title: "Согласуем смету",
    text: "Фиксируем состав работ, сроки и поэтапную оплату в договоре.",
  },
  {
    icon: ClipboardCheck,
    title: "Сдадим работу",
    text: "Выполняем монтаж или ремонт и передаём готовый результат с гарантией.",
  },
];

export default function Home() {
  const structuredData = buildStructuredData();

  return (
    <main className="overflow-hidden bg-[#171a19] pb-20 text-[#f8f5f0] lg:pb-0">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      <a className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-black" href="#content">
        К содержанию
      </a>

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a className="text-sm font-black tracking-tight text-white sm:text-base" href="#top">
            КРОВЕЛЬНЫЕ РАБОТЫ <span className="text-[#ef9a73]">ПОД КЛЮЧ</span>
          </a>
          <nav aria-label="Основная навигация" className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <a className="text-sm font-semibold text-white/75 transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-[#171a19] sm:inline-flex" href={`tel:${siteContent.phone.e164}`}>
            {siteContent.phone.display}
          </a>
        </div>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden" id="top">
        <Image
          alt="Современный дом с серой кровлей"
          className="-z-20 object-cover object-center"
          fill
          priority
          quality={75}
          sizes="100vw"
          src="https://images.unsplash.com/photo-1778164920913-dbcf62cca52f?auto=format&fit=crop&fm=jpg&q=80&w=2400"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(16,19,18,0.96)_5%,rgba(16,19,18,0.84)_43%,rgba(16,19,18,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#171a19] to-transparent" />

        <div className="mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-28 pt-36 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ef9a73]/45 bg-[#171a19]/70 px-4 py-2 text-xs font-bold tracking-[0.13em] text-[#ffd4c3] uppercase">
              Выселки · Краснодарский край · Выезд по России
            </p>
            <h1 className="max-w-3xl text-4xl leading-[0.98] font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Монтаж и ремонт кровли под ключ в Выселках и Краснодарском крае
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d5dad6] sm:text-xl">
              Новые крыши, капитальный ремонт и реконструкция объектов любой сложности. Рассчитаем ориентировочную стоимость по фотографиям объекта.
            </p>
            <div className="mt-9 max-w-xl">
              <ContactActions />
            </div>
            <p className="mt-4 text-sm text-white/65">Отправьте фото, город или район, площадь крыши и список нужных работ.</p>
          </div>
        </div>
      </section>

      <div id="content">
        <section className="border-y border-white/10 bg-[#1d211f]">
          <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["20+", "лет опыта в кровельных работах"],
              ["6–20", "мастеров для объектов разного масштаба"],
              ["Договор", "с согласованием сроков и этапов работ"],
              ["Гарантия", "на выполненные кровельные работы"],
            ].map(([number, text]) => (
              <div className="bg-[#1d211f] px-5 py-8 sm:px-8" key={number}>
                <p className="text-3xl font-black tracking-[-0.04em] text-[#ef9a73]">{number}</p>
                <p className="mt-2 max-w-44 text-sm leading-5 text-[#cbd1cd]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10" id="services">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Услуги и цены</p>
              <h2 className="mt-4 text-4xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Кровля — от конструкции до последнего доборного элемента</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#b6bdb8]">
                Выполняем как полный комплекс работ, так и ремонт отдельных участков: от протечки до замены покрытия, стропил и обрешётки.
              </p>
              <a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f4aa89] transition hover:text-white" href={siteContent.whatsappUrl} rel="noreferrer" target="_blank">
                Получить расчёт по фото <ChevronRight aria-hidden="true" size={18} />
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#202522]">
              {siteContent.services.map((service, index) => (
                <article className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center sm:px-7" key={service.title}>
                  <div>
                    <p className="text-xs font-bold text-[#ef9a73]">0{index + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[#aeb7b1]">{service.description}</p>
                  </div>
                  <p className="shrink-0 text-left text-lg font-black text-white sm:text-right">
                    {service.price}
                    <span className="ml-2 text-xs font-semibold text-[#aeb7b1]">{service.unit}</span>
                  </p>
                </article>
              ))}
              <p className="bg-[#191d1b] px-5 py-4 text-xs leading-5 text-[#aeb7b1] sm:px-7">Цены ориентировочные. Итог зависит от площади, конструкции, материала, высоты и состояния объекта и подтверждается сметой.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#ece8e1] px-5 py-24 text-[#171a19] sm:px-8 sm:py-32 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-[#ad4d2a] uppercase">Любая сложность</p>
              <h2 className="mt-4 text-4xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Работаем с крышами и покрытиями, которые требуют точности</h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold text-[#786f67]">Типы крыш</p>
                <ul className="mt-4 space-y-3">
                  {siteContent.roofTypes.map((item) => <li className="flex gap-3 font-bold" key={item}><CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[#c85d35]" size={18} />{item}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-sm font-bold text-[#786f67]">Материалы покрытия</p>
                <ul className="mt-4 space-y-3">
                  {siteContent.materials.map((item) => <li className="flex gap-3 font-bold" key={item}><CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0 text-[#c85d35]" size={18} />{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-10" id="objects">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Реальные объекты</p>
              <h2 className="mt-4 text-4xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Фотографии с выполненных работ</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#aeb7b1]">Компактные кадры без постановочных фотографий — реальные объекты с разной геометрией и покрытием.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteContent.portfolio.map((item, index) => (
              <article className={`group relative min-h-72 overflow-hidden rounded-2xl bg-[#252a27] ${index === 2 ? "sm:row-span-2 sm:min-h-[592px]" : ""}`} key={item.image}>
                <Image alt={item.alt} className="object-cover transition duration-500 group-hover:scale-105" fill quality={75} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" src={item.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111311] via-[#111311]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-bold tracking-[0.13em] text-[#ffc5ac] uppercase">Фото с объекта</p>
                  <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-5 text-white/75">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#202522] px-5 py-24 sm:px-8 sm:py-32 lg:px-10" id="process">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Как работаем</p>
              <h2 className="mt-4 text-4xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Без лишних согласований и непонятной цены</h2>
            </div>
            <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return <li className="rounded-2xl border border-white/10 bg-[#171a19] p-6" key={step.title}>
                  <div className="flex items-center justify-between"><Icon aria-hidden="true" className="text-[#ef9a73]" size={25} /><span className="text-sm font-black text-white/35">0{index + 1}</span></div>
                  <h3 className="mt-10 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#aeb7b1]">{step.text}</p>
                </li>;
              })}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">География работ</p>
            <h2 className="mt-4 text-4xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Основная работа — в Краснодарском крае</h2>
            <p className="mt-6 text-base leading-7 text-[#b6bdb8]">Базируемся в Выселках. Работаем с частными домами, гаражами, банями, складами, офисными и коммерческими объектами. Выезд в другие регионы России согласуется по объёму и задаче.</p>
            <div className="mt-8 flex gap-3 rounded-2xl border border-[#ef9a73]/25 bg-[#c85d35]/10 p-5 text-sm leading-6 text-[#f6c6b3]"><MapPinned aria-hidden="true" className="mt-0.5 shrink-0" size={20} />Для расчёта отправьте город или район вместе с фотографиями крыши.</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#202522] px-6 py-3 sm:px-8"><FaqAccordion items={siteContent.faqs} /></div>
        </section>

        <section className="relative overflow-hidden bg-[#c85d35] px-5 py-20 sm:px-8 sm:py-28 lg:px-10" id="contacts">
          <div className="absolute right-[-8rem] bottom-[-14rem] size-[32rem] rounded-full border-[45px] border-white/10" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold tracking-[0.14em] text-[#2e1810] uppercase">Начните с расчёта</p>
              <h2 className="mt-4 text-4xl leading-none font-black tracking-[-0.05em] text-white sm:text-6xl">Покажите крышу — сориентируем по работам</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ffe0d3]">Позвоните или отправьте фото объекта. Telegram и MAX: скопируйте номер и найдите контакт в мессенджере.</p>
              <div className="mt-8 max-w-xl"><ContactActions /></div>
            </div>
            <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#171a19] px-5 py-4 text-sm font-black text-white transition hover:bg-black" href={siteContent.avitoUrl} rel="noreferrer" target="_blank">
              Посмотреть объявление на Avito <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#aeb7b1] sm:flex-row sm:items-center sm:justify-between">
          <p>Кровельные работы под ключ · Выселки, Краснодарский край</p>
          <a className="font-bold text-white transition hover:text-[#ef9a73]" href={`tel:${siteContent.phone.e164}`}>{siteContent.phone.display}</a>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/15 bg-[#171a19]/95 p-3 backdrop-blur lg:hidden">
        <ContactActions compact />
      </div>
    </main>
  );
}
