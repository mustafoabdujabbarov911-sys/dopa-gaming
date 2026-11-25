// Единый источник контента. Цены/железо/контакты
export const contacts = {
  address: {
    ru: "г. Ташкент, ул. Кушкуприк, 30 (ТРК Alfraganus, 1-й этаж)",
    uz: "Toshkent sh., Qo'shko'prik ko'ch., 30 (Alfraganus savdo majmuasi, 1-qavat)",
  },
  phone: "+998 90 123 45 67",
  phoneRaw: "+998901234567",
  telegram: "https://t.me/dopa_gaming",
  instagram: "https://instagram.com/dopa.uz",
  coordinates: {
    lat: 41.289425,
    lng: 69.295583,
  },
  yandexMapRoute:
    "https://yandex.com/maps/?rtext=~41.289425,69.295583&rtt=auto",
  yandexWidgetUrl:
    "https://yandex.ru/map-widget/v1/?ll=69.295583%2C41.289425&z=17&pt=69.295583%2C41.289425%2Cpm2rdm",
  hours: {
    ru: "Круглосуточно 24/7 (без выходных)",
    uz: "24/7 kechayu-kunduz (dam olishsiz)",
  },
};

export const tariffs = [
  {
    id: "day",
    title: { ru: "Дневной тариф", uz: "Kunduzgi tarif" },
    hours: "08:00 – 17:00",
    from: 8,
    to: 17,
  },
  {
    id: "evening",
    title: { ru: "Вечерний тариф", uz: "Kechki tarif" },
    hours: "17:00 – 00:00",
    from: 17,
    to: 24,
  },
  {
    id: "night",
    title: { ru: "Ночной пакет", uz: "Tungi paket" },
    hours: "00:00 – 08:00",
    from: 0,
    to: 8,
  },
];

export const hardware = {
  main: {
    gpu: "GeForce RTX 5060",
    cpu: "AMD Ryzen 5 7500F",
    ram: "16 GB DDR5 (2×8)",
    monitor: "HKC 400 Гц",
    headset: "Razer BlackShark V2 X",
    mouse: "Rapoo VT7 Max",
    keyboard: "GravaStar Mercury K1 Lite",
  },
  comfort: {
    gpu: "GeForce RTX 5060",
    cpu: "AMD Ryzen 5 7500F",
    ram: "16 GB DDR5 (2×8)",
    monitor: "HKC 400 Гц",
    headset: "Logitech G Pro X Wired",
    mouse: "Logitech G Pro X Superlight",
    keyboard: "GravaStar Mercury K1 Lite",
  },
  vip: {
    gpu: "GeForce RTX 5070 12 GB",
    cpu: "AMD Ryzen 7 7800X3D",
    ram: "32 GB DDR5 (2×16)",
    monitor: "Alienware 500 Гц",
    headset: "Logitech G Pro X 2 Lightspeed",
    mouse: "Logitech G Pro X Superlight 2",
    keyboard: "GravaStar Mercury K1 / MCHOSE Mix 87",
  },
};

export const formatPrice = (sum, lang = "ru") =>
  `${new Intl.NumberFormat("ru-RU").format(sum)} ${lang === "uz" ? "so'm" : "сум"}`;
