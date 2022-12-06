// const song = document.querySelector('audio');
const song = document.getElementById ('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songCover = document.querySelector('img');
const songArtist = document.getElementById('artist');
const songTitle = document.getElementById('title');

let isPlaying = false;

song.volume = 0.01; //add function to change volume

function playSong(){
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  song.play();
}

function pauseSong(){
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  song.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//write a fanction to change font-size if title is too long to fit
function loadSong(songName){
  songTitle.textContent = songName.songTitle;
  songArtist.textContent = songName.songArtist;
  songCover.src = `img/cover_${songName.fileName}.jpeg`;
  song.src = `music/music_${songName.fileName}.mp3`;
}

loadSong(songsList[3]);

prevBtn.addEventListener('click', playPrevSong);
nextBtn.addEventListener('click', playNextSong);
