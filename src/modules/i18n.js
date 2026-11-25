import ru from "../i18n/ru.js";
import uz from "../i18n/uz.js";
import { updateTariffBanner } from "./tariffs.js";

const dict = { ru, uz };
const KEY = "lang";

export function getLang() {
  const saved = localStorage.getItem(KEY);
  return saved && saved in dict ? saved : "ru";
}

export function applyLang(lang) {
  const language = dict[lang] ? lang : "ru";

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const text = dict[language]?.[key];

    if (text !== undefined) {
      // Если элемент - input с placeholder
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });

  // Обновляем все кнопки переключения языков (в десктопном и мобильном меню)
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === language);
  });

  // Обновляем динамический баннер тарифов на выбранном языке
  updateTariffBanner();
}

export function setLang(lang) {
  if (!dict[lang]) return;

  localStorage.setItem(KEY, lang);
  applyLang(lang);
}

export function initI18n() {
  applyLang(getLang());

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      if (lang) setLang(lang);
    });
  });
}
