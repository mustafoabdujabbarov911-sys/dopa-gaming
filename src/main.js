import "@fontsource-variable/unbounded";
import "@fontsource-variable/montserrat";
import "swiper/css";
import "./style.css";

import { initI18n } from "./modules/i18n.js";
import { getCurrentTariff } from "./modules/tariffs.js";

initI18n();

// Проверка, что всё подключено — удалить, когда начнётся вёрстка.
console.log("Сейчас действует тариф:", getCurrentTariff().id);
