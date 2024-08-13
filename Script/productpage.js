let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".list");

menu.addEventListener("click", function(){
    // menu.classList.toggle("");
    navlist.classList.toggle("open");
});