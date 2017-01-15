var bayes;
var SENSITIVITY = 0;

function setup() {
  jQuery.getJSON("https://dl.dropboxusercontent.com/s/sk9qkq6usjxvqgk/classifier.json").then(function(json) {
    bayes = new classifier.Bayesian();

    bayes.fromJSON(json);

    tick();
  });
}

function replaceTwitterWord() {
    var tweets = [].slice.call(document.querySelectorAll(".js-stream-item"), 0); // retrieve all the tweets/conversations
    for (i = 0; i < tweets.length; i++) { // iterate through the tweets/conversations
      var tweetContent = tweets[i].getElementsByTagName("P"); // the tweets' text uses the <p> tag
      for (var j = 0; j < tweetContent.length; j++) {
        if (isHateSpeech(tweetContent[j].innerHTML)) {
          tweets[i].style.display = "none"; // use this if you don't want to totally remove the tweets
          // tweets[i].parentNode.removeChild(tweets[i]);
          // if (!localStorage.redMode) {
          //   tweets[i].parentNode.removeChild(tweets[i]);
          // } else {
          //   tweets[i].style.color = "red";
          // }
          break;
        }
      }
      
    }
}

function isHateSpeech(text){
  console.log(text);

  console.log(bayes.classify(text));
  return (bayes.classify(text) > SENSITIVITY);
}

function tick() {
  replaceTwitterWord();
  window.setTimeout(tick, 4000);
}

setup();
