import vimeo from "@vimeo/player";

import throttle from "lodash.throttle";
const iframe = document.querySelector("#vimeo-player");

const player = new vimeo(iframe);

player.on("timeupdate", throttle(onIframeVideo, 1000));

function onIframeVideo(evt) {
  localStorage.setItem("videoplayer-current-time", evt.seconds);
}
player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
