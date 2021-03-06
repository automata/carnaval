var player, player2, iframe;
var $ = document.querySelector.bind(document);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '200',
    width: '200',
    videoId: 'dQw4w9WgXcQ',
    events: {
      'onReady': onPlayerReady
    }
  });
  player2 = new YT.Player('player2', {
    height: '200',
    width: '200',
    videoId: '8aQcoXK2egw',
    events: {
      'onReady': onPlayer2Ready
    }
  });
}

// when ready, wait for clicks
function onPlayerReady(event) {
  var player = event.target;
  iframe = $('#player');
  player.playVideo();
}

// when ready, wait for clicks
function onPlayer2Ready(event) {
  var player2 = event.target;
  iframe = $('#player');
  player2.playVideo();
}

// The language basically specificies medias (video our audio), where it begins
// and some parameters:

// V1: dQw4w9WgXcQ
// inicio: 4.4.3
// volume: 0

// A1: foo.mp3
// inicio: 4.4.3
// volume: 1
//
// Idea: creator can map symbols (e.g. emojis) to mnemonics operands
// :clock1: -> inicio
// :ear: -> volume
