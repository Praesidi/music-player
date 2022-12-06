const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const musicCover = document.querySelector('img');
const musicArtist = document.getElementById('artist');
const musicTitle = document.getElementById('title');

let isPlaying = false;

music.volume = 0.01; //add function to change volume

function playMusic(){
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

function pauseMusic(){
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

playBtn.addEventListener('click', () => isPlaying ? pauseMusic() : playMusic());