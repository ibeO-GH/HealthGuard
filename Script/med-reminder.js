const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", function () {
    menuBar.classList.toggle("active");
    navMenu.classList.toggle("active");
});


// when user click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

