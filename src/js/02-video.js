import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const currentTime = 'videoplayer-current-time';
const frame = document.querySelector('iframe');
const savedVideoTime = localStorage.getItem(currentTime);
const video = new Player(frame);

video.on('timeupdate', throttle(onPlay, 1000));

if (savedVideoTime) {
  setCurrentTime();
}
function onPlay({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}
function setCurrentTime() {
  if (savedVideoTime) {
    video.setCurrentTime(savedVideoTime);
  }
}
