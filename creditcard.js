function readMoreFunction() {
    var contentText = document.getElementById("content");
    var btnText = document.getElementById("buttonReadMore");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      contentText.style.display = "none";
    } else {
      dots.style.display = "none";
      contentText.style.display = "inline";
    }
  }