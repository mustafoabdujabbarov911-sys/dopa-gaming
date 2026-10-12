import ru from "../i18n/ru.js";
import uz from "../i18n/uz.js";

const dict = { ru, uz };
const KEY = "lang";

export function getLang() {
  const saved = localStorage.getItem(KEY);
  return saved in dict ? saved : "ru";
}

// Элементы с data-i18n="ключ" получают текст из словаря текущего языка.
export function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[lang][el.dataset.i18n];
    if (text) el.textContent = text;
  });
}

export function setLang(lang) {
  localStorage.setItem(KEY, lang);
  applyLang(lang);
}

export function initI18n() {
  applyLang(getLang());
}
