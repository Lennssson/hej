const timelineElement = document.getElementById('leftTimelineId');
const timelineText = timelineElement.textContent;
timelineElement.textContent = '';

var index=0;

function typeWriterTime(){
    if(index <= timelineText.length){
        timelineElement.textContent += timelineText.charAt(index);
        index ++;
        setTimeout(typeWriterTime, 150)
    }
}
typeWriterTime();