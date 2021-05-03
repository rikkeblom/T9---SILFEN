let measurmentsOpen = false;
let materialsOpen = false;

document.querySelector('.measurments').addEventListener('click', removeHiddenMeasurments);
document.querySelector('.materials').addEventListener('click', removeHiddenMaterials);

function removeHiddenMeasurments() {
    if(!measurmentsOpen) {
        document.querySelector('.measurments-p').classList.remove('hidden');
        document.querySelector('.measurments>img').style.transform = 'rotate(90deg)';
        document.querySelector('.measurments>img').style.transition = '500ms';
        measurmentsOpen = true;
    } else {
        document.querySelector('.measurments-p').classList.add('hidden');
        document.querySelector('.measurments>img').style.transform = 'rotate(45deg)';
        document.querySelector('.measurments>img').style.transition = '500ms';
        measurmentsOpen = false;
    }
    
 }

 function removeHiddenMaterials() {
    if(!materialsOpen) {
        document.querySelector('.materials-p').classList.remove('hidden');
        document.querySelector('.materials>img').style.transform = 'rotate(90deg)';
        document.querySelector('.materials>img').style.transition = '500ms';
        materialsOpen = true;
    } else {
        document.querySelector('.materials-p').classList.add('hidden');
        document.querySelector('.materials>img').style.transform = 'rotate(45deg)';
        document.querySelector('.materials>img').style.transition = '500ms';
        materialsOpen = false;
    }
    
 }