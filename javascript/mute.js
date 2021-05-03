var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("test", {
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady() {
  console.log("player");
  player.mute();
  player.playVideo();
  setTimeout(onPlayerReady, 97000);
}
