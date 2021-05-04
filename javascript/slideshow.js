//mobile source https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_rr
//desktop source https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_imgdots 

window.addEventListener('resize', applyCarousel);
window.addEventListener('load', applyCarousel);

const mediaScreen = window.matchMedia('(max-width: 769px)');
function applyCarousel() {
    if (mediaScreen.matches) {
      //mobile slideshow
        let imageIndex = 0;
        carousel();
        document.querySelector('.main-img-box').classList.add('hidden');
        function carousel() {
          let i;
          const productImage = document.querySelectorAll('.slideshow-img');
          for (i = 0; i < productImage.length; i++) {
            productImage[i].style.display = 'none';  
          }
          imageIndex++;
          if (imageIndex > productImage.length) {imageIndex = 1}    
          productImage[imageIndex-1].style.display = 'block';  
          setTimeout(carousel, 4000); // Change image every 4 seconds
        }
    } else {
    }
}

      //desktop gallery
      document.querySelector('.main-img-box').classList.remove('hidden');
      
      function currentPhoto(n) {
        showPhotos(photoIndex = n);
    }
    
    function showPhotos(n) {
        let i;
        const bigImage = document.querySelectorAll('.big-img');
        const smallImage = document.querySelectorAll('.gallery-img');
        
        if (n > bigImage.length) {
            photoIndex = 1;
        }
        
        if (n < 1) {
            photoIndex = bigImage.length;
        }
        
        for (i = 0; i < bigImage.length; i++) {
            bigImage[i].style.display = 'none';
        }
        
        bigImage[photoIndex-1].style.display = 'block';
    }
    