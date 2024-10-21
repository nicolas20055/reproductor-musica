const audio = document.getElementById(`audio`)
const play = document.getElementById(`play`)
const pause = document.getElementById(`pause`)
const forward = document.getElementById(`forward`)
const rewind = document.getElementById(`rewind`)
const stop = document.getElementById(`stop`)


play.addEventListener(`click`, () => audio.play ())

pause.addEventListener(`click`,() => audio.pause ())

rewind.addEventListener(`click`,() => audio.currentTime -= 10)

forward.addEventListener(`click`,() => audio.currentTime += 10)

stop.addEventListener(`click`, () => {
    audio.pause ()
    audio.currentTime = 0
})


const playList = [
    {
      title: 'bonita',
      artist: 'Arcangel',
      img: 'images\arcangel.jpg',
      song: 'music\y2mate.com - Bonita.mp3'
    },
    {
      title: 'y si la ves ',
      artist: 'ñejo',
      img: 'images\ñejo.png',
      song: 'music\y2mate.com - ÑEJO  Y SI LA VES.mp3'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
    {
      title: 'Song 4',
      artist: 'Artist 4',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
    {
      title: 'Song 5',
      artist: 'Artist 5',
      img: 'ruta de la imagen de la canción',
      song: 'ruta de la cancion'
    },
  ]