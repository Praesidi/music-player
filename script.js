// const song = document.querySelector('audio');
const song = document.getElementById ('audio');
const songCover = document.querySelector('img');
const songArtist = document.getElementById('artist');
const songTitle = document.getElementById('title');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

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
  if (songName.songTitle.length >= 20) {
    songTitle.style.fontSize = '25px';
    songArtist.style.fontSize = '20px';
  }else{
    songTitle.style.fontSize = '30px';
    songArtist.style.fontSize = '25px';
  }
  songTitle.textContent = songName.songTitle;
  songArtist.textContent = songName.songArtist;
  songCover.src = `img/cover_${songName.fileName}.jpeg`;
  song.src = `music/music_${songName.fileName}.mp3`;
}

let songIndex = 0;

function playNextSong(){
  songIndex++;
  if (songIndex + 1 > songsList.length) {
    songIndex = 0;
  }
  loadSong(songsList[songIndex]);
  playSong();
}

function playPrevSong(){
  songIndex--;
  if (songIndex < 0) {
    songIndex = songsList.length - 1;
  }
  loadSong(songsList[songIndex]);
  playSong();
}

loadSong(songsList[songIndex]);

function updateProgressBar(e){
  if (isPlaying) {
    const {currentTime, duration} = e.srcElement;
    console.log(currentTime, duration);
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}

nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPrevSong);
song.addEventListener('timeupdate', updateProgressBar);

