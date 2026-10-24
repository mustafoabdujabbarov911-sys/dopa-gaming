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
