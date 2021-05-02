//unfold filters on desktop

const filterBtn = document.querySelector('.filter-option');
const filterContainer = document.querySelector('.filter-container');
let filterContainerOpen = false;

filterBtn.addEventListener('click', unfoldFilter);

function unfoldFilter() {

    if (filterContainerOpen === false) {
        filterContainer.classList.remove('hidden');
        filterContainer.classList.remove('fold');
        filterContainer.classList.add('unfold');
        console.log('opened')
        filterContainerOpen = true;
    } else {
        console.log('closing');
        filterContainer.classList.remove('unfold');
        filterContainer.classList.add('fold');
        filterContainer.classList.add('hidden');
        console.log('closed');
        filterContainerOpen = false;
    }
}

//unfold filter on mobile
document.querySelector('.colours-f').addEventListener('click', unfoldCategory);
let colourClosed = true;

function unfoldCategory() {
if (colourClosed === true) {
    console.log('color');
    document.querySelector('.filter-category>label').style.display = 'block';
    colourClosed = false;
} else {
    document.querySelector('.filter-category>label').style.display = 'none';
    colourClosed = true;

}
}


//change image on hover
document.querySelector('.product-display-pl').addEventListener('mouseover', changeImage);

function changeImage() {
    document.querySelector('.product-display-pl>img').src='https://silfenstudio.com/wp-content/uploads/2020/02/518512_GALAXY_FRONT-1.jpg';
    document.querySelector('.product-display-pl').addEventListener('mouseout', returnImage);
}

function returnImage(){
    document.querySelector('.product-display-pl>img').src='https://silfenstudio.com/wp-content/uploads/2020/11/517352_LIGHT-PURPLE_FRONT-1.jpg';
}