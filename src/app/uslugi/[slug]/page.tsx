import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactActions } from "@/components/contact-actions";
import { buildServiceStructuredData, getServiceBySlug, siteContent } from "@/content/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return siteContent.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `/uslugi/${service.slug}/` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const structuredData = buildServiceStructuredData(service);
  const relatedServices = siteContent.services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#171a19] text-[#f8f5f0]">
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />

      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-10">
          <Link className="text-sm font-black tracking-tight text-white sm:text-base" href="/">
            КРОВЕЛЬНЫЕ РАБОТЫ <span className="text-[#ef9a73]">ПОД КЛЮЧ</span>
          </Link>
          <a className="hidden text-sm font-bold text-white transition hover:text-[#ef9a73] sm:inline-flex" data-metrica-goal="phone_click" href={`tel:${siteContent.phone.e164}`}>
            {siteContent.phone.display}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10">
        <Link className="text-sm font-bold text-[#f4aa89] transition hover:text-white" href="/">
          ← Все кровельные услуги
        </Link>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Кровельные работы</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-none font-black tracking-[-0.05em] text-white sm:text-6xl">{service.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d5dad6]">{service.seoDescription}</p>
            <div className="mt-8 max-w-xl">
              <ContactActions />
            </div>
            <p className="mt-4 text-sm text-white/65">На связи {siteContent.master.displayName} · {siteContent.master.hours}</p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#202522] p-6 sm:p-8">
            <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Ориентир по цене</p>
            <p className="mt-4 text-4xl font-black text-white">{service.price}</p>
            <p className="mt-1 text-sm text-[#aeb7b1]">{service.unit}</p>
            <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-6 text-[#b6bdb8]">Итоговая стоимость зависит от площади, конструкции, материалов, состояния объекта и условий работ. До начала работ согласуется смета.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#202522] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Как подготовить расчёт</p>
            <h2 className="mt-4 text-3xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Обсудим задачу до выезда на объект</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {service.scope.map((item, index) => (
              <article className="rounded-2xl border border-white/10 bg-[#171a19] p-5" key={item}>
                <p className="text-sm font-black text-[#ef9a73]">0{index + 1}</p>
                <p className="mt-8 text-sm leading-6 text-[#d5dad6]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">География работ</p>
          <h2 className="mt-4 text-3xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Краснодарский край и объекты по России</h2>
          <p className="mt-6 text-base leading-7 text-[#b6bdb8]">Основная работа — в Выселках и Краснодарском крае. Для крупных объектов возможен выезд в другие регионы после согласования сроков и логистики.</p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-[#202522] p-5">
            <p className="font-bold text-white">Краснодарский край</p>
            <p className="mt-3 text-sm leading-6 text-[#b6bdb8]">{siteContent.serviceAreas.krasnodarKrai.join(" · ")}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#202522] p-5">
            <p className="font-bold text-white">Крупные города России</p>
            <p className="mt-3 text-sm leading-6 text-[#b6bdb8]">{siteContent.serviceAreas.majorRussianCities.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#ece8e1] px-5 py-16 text-[#171a19] sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#ad4d2a] uppercase">Вопрос по услуге</p>
            <h2 className="mt-4 text-3xl leading-none font-black tracking-[-0.045em] sm:text-5xl">{service.faq.question}</h2>
          </div>
          <p className="self-center text-lg leading-8 text-[#514c47]">{service.faq.answer}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#ef9a73] uppercase">Другие услуги</p>
            <h2 className="mt-4 text-3xl leading-none font-black tracking-[-0.045em] sm:text-5xl">Работы для вашей кровли</h2>
          </div>
          <Link className="text-sm font-bold text-[#f4aa89] transition hover:text-white" href="/#services">Все услуги на главной →</Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {relatedServices.map((item) => (
            <Link className="rounded-2xl border border-white/10 bg-[#202522] p-6 transition hover:border-[#ef9a73]/60 hover:bg-[#252a27]" href={`/uslugi/${item.slug}/`} key={item.slug}>
              <p className="text-sm font-bold text-[#ef9a73]">{item.price} <span className="font-medium text-[#aeb7b1]">{item.unit}</span></p>
              <h3 className="mt-8 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#b6bdb8]">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#aeb7b1] sm:flex-row sm:items-center sm:justify-between">
          <p>{siteContent.master.displayName} · {siteContent.master.hours}</p>
          <a className="font-bold text-white transition hover:text-[#ef9a73]" data-metrica-goal="phone_click" href={`tel:${siteContent.phone.e164}`}>{siteContent.phone.display}</a>
        </div>
      </footer>
    </main>
  );
}
