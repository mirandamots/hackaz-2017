var jsonArr = JSON.parse( );
var bayes = new classifier.Bayesian( );

var i = 0;
var len = Object.keys(json).length;

for(i = 0; i < len; i++) {
  bayes.train(jsonArr[i].tweet_text, jsonArr[i].does_this_tweet_contain_hate_speech)
}
