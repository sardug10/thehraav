// COLLAPSIBLE MENU BAR
const menuButton = document.querySelector(".fa-bars");
const menu = document.querySelector(".navbar__list");
const navBar = document.querySelector(".navbar");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  navBar.classList.toggle("bigger-nav");
});

//JAVASCRIPT FOR CAROUSEL

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  cellAlign: "left",
  containe: true,
  autoPlay: 1500,
  pageDots: false,
  wrapAround: true,
  pauseAutoPlayOnHover: true,
  imagesLoaded: true,
  prevNextButtons: false,
});

elem.addEventListener("mouseleave", () => {
  flkty.playPlayer();
});