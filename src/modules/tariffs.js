import { tariffs } from "../data.js";

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

// Активный тариф: дневной 08–17, иначе вечерний (ночной пакет — отдельная вкладка).
export function getCurrentTariff(date = new Date()) {
  const hour = tashkentHour(date);
  return (
    tariffs.find((t) => t.id !== "night" && inRange(hour, t.from, t.to)) ??
    tariffs[0]
  );
}
