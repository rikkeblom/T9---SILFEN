window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector(".burgerBox").addEventListener("click", move);
  document.querySelector(".shop").addEventListener("mouseover", shopMenu);
  document.querySelector(".about").addEventListener("mouseover", aboutMenu);
  document.querySelector("main").addEventListener("mouseover", closesubmenu);
  document.querySelector(".play").addEventListener("mouseover", closesubmenu);
  document.querySelector(".sale").addEventListener("mouseover", closesubmenu);
  document.querySelector(".new").addEventListener("mouseover", closesubmenu);
}

function move() {
  console.log("open the hammenu");
}

function shopMenu() {
  //   console.log("show the shop menu");
  document.querySelector(".navWrapShop").classList.remove("hidden");
  document.querySelector(".navWrapAbout").classList.add("hidden");
}

function aboutMenu() {
  //   console.log("show the about menu");
  document.querySelector(".navWrapAbout").classList.remove("hidden");
  document.querySelector(".navWrapShop").classList.add("hidden");
}

function closesubmenu() {
  //   console.log("close submenus");
  document.querySelector(".navWrapAbout").classList.add("hidden");
  document.querySelector(".navWrapShop").classList.add("hidden");
}
