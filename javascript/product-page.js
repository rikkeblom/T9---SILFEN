let measurmentsOpen = true;
let materialsOpen = false;

document.querySelector('.measurments').addEventListener('click', removeHiddenMeasurments);
document.querySelector('.materials').addEventListener('click', removeHiddenMaterials);

function removeHiddenMeasurments() {
    if(!measurmentsOpen) {
        //open Measurments 
        document.querySelector('.measurments-p').classList.remove('hidden');
        document.querySelector('.measurments>img').style.transform = 'rotate(90deg)';
        document.querySelector('.measurments>img').style.transition = '500ms';
        document.querySelector('.measurments>h2').classList.add('checked-section');
        measurmentsOpen = true;

        //close materials if open
        if(materialsOpen){
            document.querySelector('.materials-p').classList.add('hidden');
            document.querySelector('.materials>img').style.transform = 'rotate(45deg)';
            document.querySelector('.materials>h2').classList.remove('checked-section');
            document.querySelector('.materials>img').style.transition = '500ms';
            materialsOpen = false; 
        }
    } else {
        //close measurments
        document.querySelector('.measurments-p').classList.add('hidden');
        document.querySelector('.measurments>img').style.transform = 'rotate(45deg)';
        document.querySelector('.measurments>img').style.transition = '500ms';
        document.querySelector('.measurments>h2').classList.remove('checked-section');
        measurmentsOpen = false;
    }
    
 }

 function removeHiddenMaterials() {
    if(!materialsOpen) {
        //open materials
        document.querySelector('.materials-p').classList.remove('hidden');
        document.querySelector('.materials>img').style.transform = 'rotate(90deg)';
        document.querySelector('.materials>img').style.transition = '500ms';
        document.querySelector('.materials>h2').classList.add('checked-section');
        materialsOpen = true;

        //close measurments if open 
        if(measurmentsOpen) {
            document.querySelector('.measurments-p').classList.add('hidden');
            document.querySelector('.measurments>img').style.transform = 'rotate(45deg)';
            document.querySelector('.measurments>img').style.transition = '500ms';
            document.querySelector('.measurments>h2').classList.remove('checked-section');
            measurmentsOpen = false;
        }
    } else {
        //close materials
        document.querySelector('.materials-p').classList.add('hidden');
        document.querySelector('.materials>img').style.transform = 'rotate(45deg)';
        document.querySelector('.materials>img').style.transition = '500ms';
        document.querySelector('.materials>h2').classList.remove('checked-section');
        materialsOpen = false;
    }
 }