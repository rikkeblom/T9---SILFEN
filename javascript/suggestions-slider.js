const sliderSuggestion = document.querySelector('.slider-pr');
const innerSliderSuggestion = document.querySelector('.inner-slider-pr');

let pressed = false;
let startx;
let x;

sliderSuggestion.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSliderSuggestion.offsetLeft;
    sliderSuggestion.style.cursor = 'grabbing';
});

sliderSuggestion.addEventListener('mouseenter', ()=> {
    sliderSuggestion.style.cursor = 'grab';
});

sliderSuggestion.addEventListener('mouseup', ()=> {
    sliderSuggestion.style.cursor = 'grab';
});

window.addEventListener('mouseup', ()=>{
    pressed = false;
});

sliderSuggestion.addEventListener('mousemove', (e)=>{
    if(!pressed) return;
    e.preventDefault();
    
    x = e.offsetX;
    
    innerSliderSuggestion.style.left = `${x - startx}px`;
    checkboundary();
});


function checkboundary() {
    const outer = sliderSuggestion.getBoundingClientRect();
    const inner = innerSliderSuggestion.getBoundingClientRect();
    
    if(parseInt(innerSliderSuggestion.style.left) > 0) {
        innerSliderSuggestion.style.left = '0px';
    } else if (inner.right < outer.right) {
        innerSliderSuggestion.style.left = `-${inner.width - outer.width}px`;
    } 
}

checkboundary();