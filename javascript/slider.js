// MADE WITH INSPIRATION FROM TUTORIAL BY CONOR BAILEY
// https://www.youtube.com/watch?v=KHGc7eZyxKY&ab_channel=ConorBailey

let slider = document.querySelector(".recycleSlider");
let innerslider = document.querySelector(".recycleSliderInner");

let pressed = false;
let startx;
let x;

const mediaQuery = window.matchMedia("(max-width: 975px)");
function slideornoslide() {
  if (mediaQuery.matches) {
    // console.log("use slider");

    slider.addEventListener("mousedown", press);
    slider.addEventListener("mouseenter", grab);
    slider.addEventListener("mouseup", grab);
    slider.addEventListener("mousemove", move);
    window.addEventListener("mouseup", reset);

    function press(e) {
      pressed = true;
      startx = e.offsetX - innerslider.offsetLeft;
      slider.style.cursor = "grabbing";
    }

    function grab() {
      slider.style.cursor = "grab";
    }

    function reset() {
      pressed = false;
    }

    function move(e) {
      if (!pressed) return;
      e.preventDefault();
      x = e.offsetX;
      innerslider.style.left = x - startx + "px";
      checkboundaries();
    }

    function checkboundaries() {
      let outer = slider.getBoundingClientRect();
      let inner = innerslider.getBoundingClientRect();
      if (parseInt(innerslider.style.left) > 0) {
        innerslider.style.left = "0px";
      } else if (inner.right < outer.right) {
        innerslider.style.left = `-${inner.width - outer.width}px`;
      }
    }
  } else {
    // console.log("use desktop layout");
    slider.style.cursor = "default";
  }
}

window.addEventListener("resize", slideornoslide);
window.addEventListener("resize", movebanner);
window.addEventListener("load", slideornoslide);
window.addEventListener("load", movebanner);

//PLACE THE DESKTOP BANNERS

function movebanner() {
  if (window.innerWidth > 600 && window.innerWidth < 975) {
    console.log("MEDIUM");
    var video = document.querySelector(".videowrap");
    var videoPos = video.getBoundingClientRect();

    let banner = document.querySelector(".desktopbanner");
    banner.style.top = `calc(${videoPos.height}px + 3rem + 36rem)`;
    let footer = document.querySelector("footer");
    footer.style.top = `calc(${videoPos.height}px + 3rem + 36rem + 24rem)`;
  } else if (window.innerWidth < 600) {
    console.log("SMALL");
    let footer = document.querySelector("footer");
    footer.style.top = "120rem";
  } else if (window.innerWidth > 974) {
    console.log("BIG");
    var video = document.querySelector(".videowrap");
    var videoPos = video.getBoundingClientRect();

    let banner = document.querySelector(".desktopbanner");
    var bannerPos = banner.getBoundingClientRect();
    banner.style.top = `calc(${videoPos.height}px + 3rem + 36rem)`;

    let footer = document.querySelector("footer");
    footer.style.top = `calc(${videoPos.height}px + 36rem + 24rem)`;
    console.log(`calc(${videoPos.height}px + ${bannerPos.height}px + 32rem)`);
  }
}
