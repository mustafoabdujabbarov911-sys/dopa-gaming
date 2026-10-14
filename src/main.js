import "@fontsource-variable/unbounded";
import "@fontsource-variable/montserrat";
import "swiper/css";
import "./style.css";

import { initI18n } from "./modules/i18n.js";
import { getCurrentTariff } from "./modules/tariffs.js";

initI18n();

// Проверка, что всё подключено — удалить, когда начнётся вёрстка.
console.log("Сейчас действует тариф:", getCurrentTariff().id);
document.addEventListener('DOMContentLoaded', () => {
    // 1. Управление мобильным бургер-меню
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // 2. Логика определения текущего тарифа по времени Ташкента
    updateCurrentTariff();
    // Обновляем статус каждую минуту
    setInterval(updateCurrentTariff, 60000);
});

// Функция расчета активного тарифа по времени Ташкента (UTC+5)
function updateCurrentTariff() {
    const tariffTextElement = document.getElementById('tariffText');
    if (!tariffTextElement) return;

    // Получаем текущие часы в часовом поясе Ташкента
    const options = { timeZone: 'Asia/Tashkent', hour: 'numeric', minute: 'numeric', hour12: false };
    const formatter = new Intl.DateTimeFormat([], options);
    const timeString = formatter.format(new Date());
    const currentHour = parseInt(timeString.split(':')[0], 10);

    // Условия по вашему ТЗ:
    // Дневной: 08:00 – 17:00
    // Вечерний: 17:00 – 08:00 (либо ночной пакет с 00:00 до 08:00)
    let activeTariff = '';

    if (currentHour >= 8 && currentHour < 17) {
        activeTariff = 'Сейчас действует: Дневной тариф (08:00 – 17:00)';
    } else if (currentHour >= 0 && currentHour < 8) {
        activeTariff = 'Сейчас действует: Ночной пакет (00:00 – 08:00)';
    } else {
        activeTariff = 'Сейчас действует: Вечерний тариф (17:00 – 08:00)';
    }

    tariffTextElement.textContent = activeTariff;
}

// 3. Функция переключения языка
function switchLang(lang) {
    // Подсветка активной кнопки языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang || btn.textContent.trim().toLowerCase() === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    console.log('Переключен язык на:', lang);
    // Здесь в будущем можно будет добавить подгрузку словаря для RU/UZ
}