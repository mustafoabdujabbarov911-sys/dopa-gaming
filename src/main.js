import "./style.css";
import { initI18n } from "./modules/i18n.js";
import { initTariffs } from "./modules/tariffs.js";
import { initMenu } from "./modules/menu.js";

function initHardwareTabs() {
  const tabs = document.querySelectorAll(".hw-tab");
  const contents = document.querySelectorAll(".hw-content");

  const activeStyles = {
    main: ["bg-white", "text-amber-600", "shadow-lg"],
    comfort: ["bg-white", "text-emerald-600", "shadow-lg"],
    vip: ["bg-white", "text-purple-600", "shadow-lg"],
  };

  const inactiveClasses = [
    "bg-[#12141c]",
    "text-gray-400",
    "border",
    "border-gray-800",
    "hover:text-white",
  ];

  function switchHardware(zone) {
    contents.forEach((el) => {
      if (el.id === `hw-${zone}`) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });

    tabs.forEach((btn) => {
      const btnZone =
        btn.dataset.zone || (btn.id ? btn.id.replace("btn-", "") : "");

      // Снимаем активные стили
      Object.values(activeStyles).forEach((classes) =>
        btn.classList.remove(...classes),
      );
      btn.classList.remove(...inactiveClasses);

      if (btnZone === zone) {
        const toAdd = activeStyles[zone] || activeStyles.main;
        btn.classList.add(...toAdd);
      } else {
        btn.classList.add(...inactiveClasses);
      }
    });
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const zone =
        btn.dataset.zone || (btn.id ? btn.id.replace("btn-", "") : "main");
      switchHardware(zone);
    });
  });
}

function bootstrap() {
  initI18n();
  initTariffs();
  initMenu();
  initHardwareTabs();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
