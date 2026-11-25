const THEME_KEY = "dopa-theme";

export function getTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

export function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.classList.toggle("light", isLight);
  document.documentElement.classList.toggle("dark", !isLight);
  document.documentElement.setAttribute("data-theme", theme);

  document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
    btn.setAttribute(
      "aria-label",
      isLight ? "Включить тёмную тему" : "Включить светлую тему",
    );
    const sunIcons = btn.querySelectorAll(".icon-sun");
    const moonIcons = btn.querySelectorAll(".icon-moon");

    sunIcons.forEach((el) => {
      if (isLight) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    });

    moonIcons.forEach((el) => {
      if (isLight) {
        el.classList.add("hidden");
      } else {
        el.classList.remove("hidden");
      }
    });
  });
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

export function initTheme() {
  applyTheme(getTheme());

  document.querySelectorAll(".theme-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });
}
