import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', onTimeupdate);

function onTimeupdate({ seconds }) {
  localStorage.setItem(currentTimeKey, `${seconds}`);
}

const videoPlayerCurrentTime = localStorage.getItem(currentTimeKey);
player.setCurrentTime(Number(videoPlayerCurrentTime));
