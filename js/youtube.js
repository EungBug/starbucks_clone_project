// Youtube iFrame API 연동
// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상의 ID
    playerVars: {
      // 영상 재생 관련 옵션들
      autoplay: true,
      loop: true,
      playlist: 'An6LvWQuj_8',
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거 옵션
      },
    },
  });
}
