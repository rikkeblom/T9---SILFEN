window.addEventListener("load", start);
let ham = 1;

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
  if (ham == 1) {
    document.querySelector(".first").classList.remove("hidden");
    document.querySelector(".shoparrow").addEventListener("click", openhamshop);
    document
      .querySelector(".aboutarrow")
      .addEventListener("click", openhamabout);
    ham = ham + 1;
    console.log("Hamburger menu is open");
  } else {
    document.querySelector(".first").classList.add("hidden");
    document.querySelector(".second").classList.add("hidden");
    document.querySelector(".third").classList.add("hidden");
    ham = ham - 1;
    console.log("Hamburger menu is closed");
  }
}

function openhamshop() {
  console.log("open shop");
  document.querySelector(".first").classList.add("hidden");
  document.querySelector(".second").classList.remove("hidden");
}

function openhamabout() {
  console.log("open shop");
  document.querySelector(".first").classList.add("hidden");
  document.querySelector(".second").classList.add("hidden");
  document.querySelector(".third").classList.remove("hidden");
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
