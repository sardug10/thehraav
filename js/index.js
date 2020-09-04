// COLLAPSIBLE MENU BAR
const menuButton = document.querySelector(".fa-bars");
const menu = document.querySelector(".navbar__list");
const navBar = document.querySelector(".navbar");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  navBar.classList.toggle("bigger-nav");
});
