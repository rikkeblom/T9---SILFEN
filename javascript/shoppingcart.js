window.addEventListener("load", start);

function start() {
  document.querySelector(".bagIcon").addEventListener("click", openCart);
}

function openCart() {
  document.querySelector(".shoppingcartwrapper").classList.remove("hidden");
  document.querySelector(".cross").addEventListener("click", closeCart);
}

function closeCart() {
  document.querySelector(".shoppingcartwrapper").classList.add("hidden");
}
