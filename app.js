const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');

play.addEventListener('click', () => audio.play());
pause.addEventListener('click', () => audio.pause());
rewind.addEventListener('click', () => audio.currentTime -= 10);
forward.addEventListener('click', () => audio.currentTime += 10);
stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

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
let currentSongIndex = 0; 


function playSong(song) {
    const audio = document.getElementById("audio");
    audio.src = song.src; 
    audio.play(); 
}


function nextSong() {
    currentSongIndex++; 
    if (currentSongIndex >= playList.length) {
        currentSongIndex = 0; 
    }
    playSong(playList[currentSongIndex]); 
}
document.getElementById("next").addEventListener("click", nextSong);