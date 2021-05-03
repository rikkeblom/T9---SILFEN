//source https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr

let imageIndex = 0;
carousel();

function carousel() {
  let i;
  const productImage = document.querySelectorAll('.product-photo');
  for (i = 0; i < productImage.length; i++) {
    productImage[i].style.display = 'none';  
  }
  imageIndex++;
  if (imageIndex > productImage.length) {imageIndex = 1}    
  productImage[imageIndex-1].style.display = 'block';  
  setTimeout(carousel, 4000); // Change image every 4 seconds
}