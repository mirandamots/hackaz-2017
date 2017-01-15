function replaceTwitterWord() {
    var tweets = [].slice.call(document.querySelectorAll(".js-stream-item"), 0); // retrieve all the tweets/conversations
    for (i = 0; i < tweets.length; i++) { // iterate through the tweets/conversations
      var tweetContent = tweets[i].getElementsByTagName("P"); // the tweets' text uses the <p> tag
      for (var j = 0; j < tweetContent.length; j++) {
        if (isHateSpeech(tweetContent[j].innerHTML)) {
          // tweets[i].style.display = "none"; // use this if you don't want to totally remove the tweets
          if (!localStorage.redMode) {
            tweets[i].parentNode.removeChild(tweets[i]);
          } else {
            tweets[i].style.color = "red";
          }
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
  window.setTimeout(tick, 4000);
}

tick();