function replaceTwitterWord() {
    var tweets = [].slice.call(document.querySelectorAll(".js-stream-item"), 0);
    for (i = 0; i < tweets.length; i++) {
      var tweetContent = tweets[i].getElementsByTagName("P");
      for (var j = 0; j < tweetContent.length; j++) {
        if (isHateSpeech(tweetContent[j].innerHTML)) {
          tweets[i].style.display = "none";
          break;
        }
      }
      
    }
}

function isHateSpeech(text){
  return true;
}

function tick() {
  replaceTwitterWord();
  window.setTimeout(tick, 5000);
}

tick();