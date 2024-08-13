let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".list");

menu.addEventListener("click", function(){
    // menu.classList.toggle("");
    navlist.classList.toggle("open");
});

// let allTab = document.querySelector('.all-tab');
// let currentTab = document.querySelector('.current-tab');
// let completedTab = document.querySelector('.completed-tab');

// allTab.addEventListener("click", function() {
//     allTab.classList.add("orderTab");
// });