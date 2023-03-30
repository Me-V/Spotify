let songIndex = 1;
let masterPlay = document.getElementById('masterPlay');
let seek = document.getElementById('seek');
let audioElement = new Audio('1.mp3');
let gif = document.getElementById('gif')
let songs = Array.from(document.getElementsByClassName('songs'));
let songItemPlay = Array.from(document.getElementsByClassName('one'));
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let songItem = [
  {songName:"warrior mortal" , filePath:"1.mp3" , coverPath:"1.jpg"}, 
  
  {songName:"ceilo huma-huma" , filePath:"2.mp3" , coverPath:"2.jpg"} ,
  
  {songName:"Deaf-kev Invincible" , filePath:"3.mp3" , coverPath:"3.jpg"},
  
  {songName:"Black Swan" , filePath:"4.mp3" , coverPath:"4.jpg"},
  
  ]
  

songs.forEach((element, i)=>{
  
 element.getElementsByTagName("img")[0].src = songItem[i].coverPath;
 element.getElementsByClassName("songName")[0].innerText = songItem[i].songName;
})

  
masterPlay.addEventListener('click',()=>{
  
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else{
   audioElement.pause();
   masterPlay.classList.remove('fa-pause-circle');
   masterPlay.classList.add('fa-play-circle'); 
   gif.style.opacity = 0;
  }
})


audioElement.addEventListener('timeupdate',()=>{
  
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  seek.value = progress;
})

seek.addEventListener('change',()=>{
  
audioElement.currentTime = ((seek.value * audioElement.duration)/100);  
})


const makeAllPlay = () =>{
  songItemPlay.forEach((element)=>{
   
   element.classList.remove('fa-pause-circle');
   element.classList.add('fa-play-circle');
  })
}

songItemPlay.forEach((element)=>{
  
  element.addEventListener('click',(e)=>{
  
   
   makeAllPlay();
   
   songIndex = parseInt(e.target.id);
   
   e.target.classList.remove('fa-play-circle');
   e.target.classList.add('fa-pause-circle');
   
   audioElement.src = (`${songIndex}.mp3`);
   audioElement.currentTime = 0;
   audioElement.play();
   
   gif.style.opacity=1;
   
   masterPlay.classList.remove('fa-play-circle');
   masterPlay.classList.add('fa-pause-circle');
  })
})


next.addEventListener('click',()=>{
  
  if(songIndex>=4){
    songIndex=1;
  }
  else{
    songIndex+=1;
  }
  audioElement.src = (`${songIndex}.mp3`);
  audioElement.currentTime = 0;
  audioElement.play();
  
  gif.style.opacity = 1;
  
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})


previous.addEventListener('click', () => {

  if (songIndex <= 1) {
    songIndex = 4;
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = (`${songIndex}.mp3`);
  audioElement.currentTime = 0;
  audioElement.play();

  gif.style.opacity = 1;

  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  
  
})