const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const playerArtist = document.getElementById('player__artist');
const playerSong = document.getElementById('player__song');
const siguiente = document.getElementById('next');

let currentSongIndex = 0; 

const playList = [
    {
        title: 'Bonita',
        artist: 'Arcangel',
        img: 'images/arcangel.jpg',
        song: 'music/y2mate.com - Bonita.mp3'
    },
    {
        title: 'Y Si La Ves',
        artist: 'Ñejo',
        img: 'images/ñejo.png',
        song: 'music/y2mate.com - ÑEJO Y SI LA VES.mp3'
    },
    {
        title: 'Mi Fanática',
        artist: 'Arcangel',
        img: 'images/arcangel.jpg',
        song: 'music/y2mate.com - arcangel mi fanatica letra.mp3'
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

// Función para cargar una canción según el índice
function loadSong(songIndex) {
    const song = playList[songIndex];
    audio.src = song.song;
    playerArtist.textContent = song.artist;
    playerSong.textContent = song.title;
    albumImage.src = song.img;
  }
  
  // Función para reproducir la canción actual
  function playSong() {
    audio.play();
  }
  
  // Función para pausar la canción actual
  function pauseSong() {
    audio.pause();
  }
  
  // Función para detener la canción actual (pausa y reinicia)
  function stopSong() {
    audio.pause();
    audio.currentTime = 0;
  }
  
  // Función para avanzar a la siguiente canción en la lista
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playList.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  // Función para retroceder a la canción anterior en la lista
  function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + playList.length) % playList.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  // Cargar la primera canción al iniciar
  loadSong(currentSongIndex);
  
  // Listeners para los controles
  play.addEventListener('click', playSong);
  pause.addEventListener('click', pauseSong);
  stop.addEventListener('click', stopSong);
  forward.addEventListener('click', nextSong);
  rewind.addEventListener('click', previousSong);