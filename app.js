const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const playerArtist = document.getElementById('player__artist');
const playerSong = document.getElementById('player__song');
const siguiente = document.getElementById('next');
const albumImage = document.getElementById('albumImage');


let currentSongIndex = 0; 

const playList = [
    {
        title: 'Bonita',
        artist: 'Arcangel',
        img: 'images/Arcángel.png',
        song: 'music/y2mate.com - Bonita.mp3'
    },
    {
        title: 'Y Si La Ves',
        artist: 'Ñejo',
        img: 'images/ñejo.png',
        song: 'music/y2mate.com - ÑEJO  Y SI LA VES.mp3'
    },
    {
        title: 'Mi Fanática',
        artist: 'Arcangel',
        img: 'images/Arcángel.png',
        song: 'music/y2mate.com - arcangel  mi fanatica letra.mp3'
    },
    {
        title: 'Las Avispas',
        artist: 'Juan Luis Guerra',
        img: 'images/Juan Luis Guerra.png',
        song: 'music/y2mate.com - Las Avispas.mp3'
    },
    {
        title: 'Oh Qué Será?',
        artist: 'Willie Colón',
        img: 'images/willie colon.png',
        song: 'music/y2mate.com - Oh Qué Será.mp3'
    },
];


function loadSong(songIndex) {
    const song = playList[songIndex];
    audio.src = song.song;
    playerArtist.textContent = song.artist;
    playerSong.textContent = song.title;
    albumImage.src = song.img;
  }
  
  function playSong() {
    audio.play();
  }
  
  function pauseSong() {
    audio.pause();
  }
  
  function stopSong() {
    audio.pause();
    audio.currentTime = 0;
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playList.length;
    console.log(`Cambiando a la canción: ${currentSongIndex}`); 
    playSong();
}

  function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  loadSong(currentSongIndex);
  
  document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex);
  play.addEventListener('click', playSong);
  pause.addEventListener('click', pauseSong);
  stop.addEventListener('click', stopSong);
  rewind.addEventListener('click', previousSong);
  forward.addEventListener('click', previousSong);
});