import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTimeKey = 'videoplayer-current-time';
const timePushing = throttle(onTimeupdate, 1000);
player.on('timeupdate', timePushing);

function onTimeupdate({ seconds }) {
  localStorage.setItem(currentTimeKey, `${seconds}`);
}
const videoPlayerCurrentTime = localStorage.getItem(currentTimeKey);
player.setCurrentTime(Number(videoPlayerCurrentTime));
