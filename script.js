
const hiThereElement = document.getElementById('typewrite');
const hiThereText = hiThereElement.textContent;
hiThereElement.textContent = '';


var index=0;

function typeWriter(){
    if(index <= hiThereText.length){
        hiThereElement.textContent += hiThereText.charAt(index);
        index ++;
        setTimeout(typeWriter, 150)
    }
}

typeWriter();
