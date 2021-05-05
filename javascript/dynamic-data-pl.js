/*const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const url = 'https://kea-alt-del.dk/t7/api/products?category=' + category;*/

//fetching the whole database
fetch("https://kea21-7e1e.restdb.io/rest/silfen-item", {
  "method": "GET",
  "headers": {
    "x-apikey": "602f9e445ad3610fb5bb63d5"
  }
})
.then((res) => res.json())
.then(response => {
  showProductList(response);
})
.catch(err => {
  console.error(err);
});

function showProductList(products) {
    //grab the template
    const productTemplate = document.querySelector('.product-template').content;
    
    products.forEach(product => {
       
        //clone it
        const clone = productTemplate.cloneNode(true); 
        //change content
        //console.log(product);
        clone.querySelector('.product-display-pl>h1').textContent = product.title;
        clone.querySelector('.product-display-pl>h2>span').textContent = product.price;
        clone.querySelector('.pl-img-box>img').src = product.images[0];
        clone.querySelector('a.product-link').href = `product-page.html?q=${product.title}`;
       
        //apend
        document.querySelector('.product-list-display').appendChild(clone);
    });
}