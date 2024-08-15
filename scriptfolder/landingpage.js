const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("tablet-active");
});
