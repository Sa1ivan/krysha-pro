export type Service = {
  title: string;
  price: string;
  priceValue: string;
  unit: string;
  description: string;
};

export type PortfolioItem = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const services: Service[] = [
  {
    title: "Монтаж кровли",
    price: "от 2 500 ₽",
    priceValue: "2500",
    unit: "за м²",
    description: "Устройство новой крыши под ключ — от конструкции до финишного покрытия.",
  },
  {
    title: "Монтаж мягкой кровли",
    price: "от 3 000 ₽",
    priceValue: "3000",
    unit: "за м²",
    description: "Монтаж мягкой и битумной черепицы для сложных скатных кровель.",
  },
  {
    title: "Монтаж водосточных систем",
    price: "от 1 500 ₽",
    priceValue: "1500",
    unit: "за погонный метр",
    description: "Монтаж водостоков и ремонт отдельных элементов системы отвода воды.",
  },
  {
    title: "Монтаж снегозадержателей",
    price: "от 1 800 ₽",
    priceValue: "1800",
    unit: "за работу",
    description: "Установка систем снегозадержания с учётом конструкции и покрытия крыши.",
  },
  {
    title: "Монтаж мансардных окон",
    price: "от 15 000 ₽",
    priceValue: "15000",
    unit: "за окно",
    description: "Монтаж мансардных и чердачных окон с герметизацией примыканий.",
  },
  {
    title: "Монтаж карниза",
    price: "от 1 800 ₽",
    priceValue: "1800",
    unit: "за погонный метр",
    description: "Оформление и подшивка карнизных свесов крыши.",
  },
  {
    title: "Ремонтные работы",
    price: "от 1 500 ₽",
    priceValue: "1500",
    unit: "за м²",
    description: "Устранение протечек, замена покрытия, ремонт гидроизоляции, стропил и обрешётки.",
  },
];

const portfolio: PortfolioItem[] = [
  {
    image: "/images/portfolio/krovlya-01.jpg",
    alt: "Частный дом со сложной скатной кровлей",
    title: "Сложная скатная кровля",
    description: "Фото с объекта частного дома со сложной геометрией крыши.",
  },
  {
    image: "/images/portfolio/krovlya-02.jpg",
    alt: "Дом с красной кровлей и оформленным фронтоном",
    title: "Кровля и оформление фронтона",
    description: "Фото с объекта после устройства кровли и доборных элементов.",
  },
  {
    image: "/images/portfolio/krovlya-03.jpg",
    alt: "Кровля дома с мансардным окном",
    title: "Мягкая кровля с мансардным окном",
    description: "Фото с объекта со сложными примыканиями и мансардным окном.",
  },
  {
    image: "/images/portfolio/krovlya-04.jpg",
    alt: "Многоскатная крыша частного дома с водостоками",
    title: "Многоскатная крыша и водостоки",
    description: "Фото с объекта с системой водоотведения и несколькими скатами.",
  },
  {
    image: "/images/portfolio/krovlya-05.jpg",
    alt: "Большой частный дом с тёмной кровлей",
    title: "Кровля большой площади",
    description: "Фото с объекта частного дома со сложной формой крыши.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Как получить предварительный расчёт?",
    answer:
      "Пришлите в WhatsApp фотографии объекта, город или район, примерную площадь крыши и перечень нужных работ. После этого можно сориентировать по стоимости и условиям выезда.",
  },
  {
    question: "От чего зависит итоговая стоимость кровельных работ?",
    answer:
      "Итог зависит от площади, конструкции крыши, материала покрытия, состояния существующей кровли, высоты объекта и сложности работ. Перед началом согласуется смета.",
  },
  {
    question: "С какими крышами и материалами вы работаете?",
    answer:
      "Выполняются работы с односкатными, двускатными, вальмовыми, многоскатными и комбинированными крышами; используются мягкая кровля, металлочерепица, профнастил, фальцевые панели, шифер и другие покрытия.",
  },
  {
    question: "Можно ли заказать только ремонт кровли?",
    answer:
      "Да. Выполняется частичный и капитальный ремонт: устранение протечек, замена покрытия, ремонт гидроизоляции, водостоков, стропильной системы и обрешётки.",
  },
  {
    question: "Где выполняются работы?",
    answer:
      "Основная география — Выселки и Краснодарский край. Для объектов другого масштаба возможен выезд бригады в другие регионы России по предварительному согласованию.",
  },
  {
    question: "Работаете по договору и даёте гарантию?",
    answer:
      "Да. Условия, состав работ, сроки, этапы оплаты и гарантия фиксируются до начала работ.",
  },
];

export const siteContent = {
  brand: "Кровельные работы под ключ",
  phone: {
    e164: "+79280899802",
    display: "+7 928 089-98-02",
  },
  whatsappUrl:
    "https://wa.me/79280899802?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9D%D1%83%D0%B6%D0%B5%D0%BD%20%D1%80%D0%B0%D1%81%D1%87%D1%91%D1%82%20%D0%BA%D1%80%D0%BE%D0%B2%D0%BB%D0%B8.%20%D0%93%D0%BE%D1%80%D0%BE%D0%B4%2F%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%3A%20%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C%20%D0%BA%D1%80%D1%8B%D1%88%D0%B8%3A%20%D0%9A%D0%B0%D0%BA%D0%B8%D0%B5%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D0%BD%D1%83%D0%B6%D0%BD%D1%8B%3A",
  avitoUrl:
    "https://www.avito.ru/vyselki/predlozheniya_uslug/krovelnye_raboty_pod_klyuch_montazh_i_remont_krysh_8305531884",
  services,
  portfolio,
  faqs,
  roofTypes: ["Односкатные", "Двускатные", "Вальмовые", "Многоскатные", "Комбинированные"],
  materials: ["Мягкая кровля", "Металлочерепица", "Профнастил", "Фальцевые панели", "Шифер"],
} as const;

export function buildStructuredData() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Кровельные работы под ключ",
      description:
        "Монтаж, ремонт и реконструкция кровли в Выселках и Краснодарском крае. Возможен выезд на объекты в регионы России.",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Краснодарский край" },
        { "@type": "Place", name: "Выселки" },
      ],
      offers: {
        "@type": "OfferCatalog",
        name: "Кровельные работы и цены",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          price: service.priceValue,
          priceCurrency: "RUB",
          description: `${service.price} ${service.unit}`,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
