// Remember we can use apis too for this controls but we gonna do it from scratch bang!!!!!


const play=document.getElementById("play");
const stop=document.getElementById("stop");
const video=document.getElementById("video");
const progress=document.getElementById("progress");
const timestamp=document.getElementById("timestamp");

//Play and pause video functions

function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause()
    }
}
//update the play and pause icon
function updatePlayIcon(){
    if(!video.paused){
        play.innerHTML='<i class="bi bi-pause-btn-fill"></i>';
    }
    else{
        play.innerHTML=' <i class="bi bi-play"></i>';
    }
}

//update progress for the timestamp

function updateProgress(){
   progress.value=(video.currentTime/video.duration)*100;

   // Get minutes for timestamp
   let mins=Math.floor(video.currentTime/60);
   if(mins<10){
    mins='0'+String(mins);
   }
//Get seconds  for the timestamp
   let secs=Math.floor(video.currentTime %60);
   if(secs<10){
    secs='0'+String(secs);
   }
//Updating the timestamp 
   timestamp.innerHTML=`${mins}:${secs}`;
}

// set video time progress basically updating the numbers in progress

function setVideoProgress(){
   video.currentTime=(+progress.value* video.duration)/100;
}

//stop the videos

function stopVideo(){
    video.currentTime=0;
    video.pause();
    // this makes the video to pause and start at the beginning and the important point to note here is that there is no function named stop as like pause
}

// Event listeners

video.addEventListener("click",toggleVideoStatus);
video.addEventListener("pause",updatePlayIcon);
video.addEventListener("play",updatePlayIcon);
video.addEventListener("timeupdate",updateProgress);

play.addEventListener("click",toggleVideoStatus);

stop.addEventListener("click",stopVideo);


progress.addEventListener("change",setVideoProgress);

