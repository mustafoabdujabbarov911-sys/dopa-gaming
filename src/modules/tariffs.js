import { tariffs } from "../data.js";
import { getLang } from "./i18n.js";

// Час по Ташкенту, а не по часам телефона пользователя.
export function tashkentHour(date = new Date()) {
  const h = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hourCycle: "h23",
    timeZone: "Asia/Tashkent",
  }).format(date);
  return Number(h);
}

function inRange(hour, from, to) {
  return from < to ? hour >= from && hour < to : hour >= from || hour < to;
}

// Активный тариф: дневной 08–17, вечерний 17–24, ночной 00–08
export function getCurrentTariff(date = new Date()) {
  const hour = tashkentHour(date);
  return tariffs.find((t) => inRange(hour, t.from, t.to)) ?? tariffs[0];
}

export function updateTariffBanner() {
  const current = getCurrentTariff();
  const lang = getLang();
  const title = current.title[lang] || current.title.ru;
  const prefix = lang === "uz" ? "Hozir amalda" : "Сейчас действует";
  // Заменяем пробелы на неразрывные пробелы (\u00A0), чтобы время (00:00 – 08:00) всегда оставалось на одной строке
  const hoursFormatted = current.hours.replace(/ /g, "\u00A0");
  const text = `${prefix}: ${title} (${hoursFormatted})`;

  document.querySelectorAll(".tariff-text").forEach((el) => {
    el.textContent = text;
  });
}

export function initTariffs() {
  updateTariffBanner();
  // Регулярное обновление раз в минуту
  setInterval(updateTariffBanner, 60000);
}
