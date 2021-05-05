const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('q');

fetch(`https://kea21-7e1e.restdb.io/rest/silfen-item?q={"title": "${title}"}`, {
  "method": "GET",
  "headers": {
    "x-apikey": "602f9e445ad3610fb5bb63d5"
  }
})
.then((res) => res.json())
.then(response => {
  showProduct(response);
})
.catch(err => {
  console.error(err);
});

function showProduct(product) {
    //console.log(product[0].title);
    document.querySelector('.title-and-price>h1').textContent = product[0].title;
    document.querySelector('.title-and-price>h2>span').textContent = product[0].price;
    document.querySelector('.information>p').textContent = product[0].description;
    document.querySelector('.materials-p').textContent = product[0].material;
    document.querySelector('.information>p').textContent = product[0].description;
    document.querySelector('img.one').src = product[0].images[0];

    const productImages = product[0].images;
    const templateImages = document.querySelector('.gallery-template').content;
    const templateBigImages = document.querySelector('.big-img-template').content;
    productImages.forEach(image => {
        //clone it
        const clone =  templateImages.cloneNode(true); 
        const copy = templateBigImages.cloneNode(true);
        //change content
        clone.querySelector('img.gallery-img').src = image;
        copy.querySelector('img.secondary').src = image;
        //apend
        document.querySelector('.gallery').appendChild(clone);
        document.querySelector('.main-img-box').appendChild(clone);
    })
}

//onclick="currentPhoto()"