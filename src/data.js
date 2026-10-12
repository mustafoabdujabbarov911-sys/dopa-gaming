// Единый источник контента. Цены/железо/контакты меняем только здесь.
// Источник: сторис Instagram dopa.uz (21–26 недель назад) — ПОДТВЕРДИТЬ у клиента.

export const contacts = {
  address: { ru: "Ташкент, Кушкуприк, 30", uz: "Toshkent, Qo'shko'prik, 30" },
  phone: "", // TODO: телефон клуба, формат +998XXXXXXXXX
  telegram: "", // TODO: юзернейм для брони, без @
  instagram: "dopa.uz",
  yandexMap: "", // TODO: ссылка «Маршрут» из Яндекс.Карт
  hours: "", // TODO: часы работы (24/7?)
};

// Тарифы. from/to — часы по Ташкенту; если to < from, интервал идёт через полночь.
// TODO: противоречие по ночи — «ночной» в вечернем 95 000 / 140 000,
// а отдельный «Ночной пакет» 70 000 / 100 000. Уточнить у клиента.
export const tariffs = [
  {
    id: "day",
    label: { ru: "Дневной", uz: "Kunduzgi" },
    from: 8,
    to: 17,
    main: [
      { name: { ru: "1 час", uz: "1 soat" }, price: 10000 },
      { name: { ru: "Дневной", uz: "Kunlik" }, price: 50000 },
    ],
    vip: [
      { name: { ru: "1 час", uz: "1 soat" }, price: 20000 },
      { name: { ru: "Дневной", uz: "Kunlik" }, price: 100000 },
    ],
  },
  {
    id: "evening",
    label: { ru: "Вечерний", uz: "Kechki" },
    from: 17,
    to: 8,
    main: [
      { name: { ru: "1 час", uz: "1 soat" }, price: 22000 },
      { name: { ru: "3 часа", uz: "3 soat" }, price: 50000 },
      { name: { ru: "5 часов", uz: "5 soat" }, price: 75000 },
      {
        name: { ru: "Ночной (00:00–08:00)", uz: "Tungi (00:00–08:00)" },
        price: 95000,
      },
    ],
    vip: [
      { name: { ru: "1 час", uz: "1 soat" }, price: 32000 },
      { name: { ru: "3 часа", uz: "3 soat" }, price: 80000 },
      { name: { ru: "5 часов", uz: "5 soat" }, price: 135000 },
      {
        name: { ru: "Ночной (00:00–08:00)", uz: "Tungi (00:00–08:00)" },
        price: 140000,
      },
    ],
  },
  {
    id: "night",
    label: { ru: "Ночной пакет", uz: "Tungi paket" },
    from: 0,
    to: 8,
    main: [{ name: { ru: "Ночь", uz: "Tun" }, price: 70000 }],
    vip: [{ name: { ru: "Ночь", uz: "Tun" }, price: 100000 }],
  },
];

export const hardware = {
  main: {
    gpu: "RTX 5060",
    cpu: "AMD Ryzen 5 7500F",
    ram: "16 GB (2×8)",
    monitor: "HKC 400 Hz",
    headset: "Razer BlackShark V2 X",
    mouse: "Rapoo VT7 Max",
    keyboard: "GravaStar Mercury K1 Lite",
  },
  vip: {
    gpu: "RTX 5070 12 GB",
    cpu: "AMD Ryzen 7 7800X3D",
    ram: "32 GB (2×16)",
    monitor: "Alienware 500 Hz",
    headset: "Logitech G Pro Wireless 2", // TODO: уточнить точную модель
    mouse: "Logitech G Pro X Superlight 2",
    keyboard: "GravaStar Mercury K1",
  },
};

export const formatPrice = (sum, lang = "ru") =>
  `${new Intl.NumberFormat("ru-RU").format(sum)} ${lang === "uz" ? "so'm" : "сум"}`;
