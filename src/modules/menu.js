export function initMenu() {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!burgerBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add("active");
    burgerBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    burgerBtn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains("active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Закрытие при клике на любую ссылку или кнопку в меню
  mobileMenu.querySelectorAll("a, button.btn-booking").forEach((el) => {
    el.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Закрытие при клике вне меню
  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("active") &&
      !mobileMenu.contains(e.target) &&
      !burgerBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
      closeMenu();
    }
  });
}
