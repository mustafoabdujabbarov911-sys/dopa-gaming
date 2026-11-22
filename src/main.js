import "./style.css";
import { initI18n } from "./modules/i18n.js";

function initHardwareTabs() {
  const btnMain = document.getElementById("btn-main");
  const btnComfort = document.getElementById("btn-comfort");
  const btnVip = document.getElementById("btn-vip");

  function switchHardware(zone) {
    document.querySelectorAll(".hw-content").forEach((el) => {
      el.classList.add("hidden");
    });

    document.querySelectorAll(".hw-tab").forEach((btn) => {
      btn.className =
        "hw-tab px-6 py-2.5 rounded-xl font-bold text-sm bg-[#12141c] text-gray-400 border border-gray-800 hover:text-white transition-all cursor-pointer";
    });

    const activeContent = document.getElementById(`hw-${zone}`);
    if (activeContent) {
      activeContent.classList.remove("hidden");
    }

    const activeBtn = document.getElementById(`btn-${zone}`);
    if (activeBtn) {
      if (zone === "main") {
        activeBtn.className =
          "hw-tab px-6 py-2.5 rounded-xl font-bold text-sm bg-white text-amber-600 shadow-lg transition-all cursor-pointer";
      } else if (zone === "comfort") {
        activeBtn.className =
          "hw-tab px-6 py-2.5 rounded-xl font-bold text-sm bg-white text-emerald-600 shadow-lg transition-all cursor-pointer";
      } else if (zone === "vip") {
        activeBtn.className =
          "hw-tab px-6 py-2.5 rounded-xl font-bold text-sm bg-white text-purple-600 shadow-lg transition-all cursor-pointer";
      }
    }
  }

  if (btnMain) btnMain.addEventListener("click", () => switchHardware("main"));
  if (btnComfort) btnComfort.addEventListener("click", () => switchHardware("comfort"));
  if (btnVip) btnVip.addEventListener("click", () => switchHardware("vip"));
}

function bootstrap() {
  initI18n();
  initHardwareTabs();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}