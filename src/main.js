import "./style.css";
import { initI18n } from "./modules/i18n.js";

initI18n();

document.addEventListener('DOMContentLoaded', () => {
    // Мобильное меню (бургер)
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
});

// Переключение периодов цен для статического HTML
window.switchPricePeriod = function(periodKey) {
    document.querySelectorAll('.price-tab-content').forEach(el => {
        el.style.display = 'none';
    });
    const activeTab = document.getElementById('period-' + periodKey);
    if (activeTab) {
        activeTab.style.display = 'grid';
    }

    document.querySelectorAll('.tariff-tabs .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
};