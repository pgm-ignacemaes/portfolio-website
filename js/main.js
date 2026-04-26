const $toggle = document.querySelector(".nav__toggle");
const $mobileNav = document.querySelector(".nav__mobile");

$toggle.addEventListener("click", () => {
  $mobileNav.classList.toggle("nav__mobile--open");
});
