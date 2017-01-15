var jsonArr = JSON.parse( );
var bayes = new classifier.Bayesian(
  {
  backend: {
    type: 'Redis',
    options: {
      hostname: 'localhost', // default
      port: 6379,            // default
      name: 'emailspam'      // namespace for persisting
    }
  }
}
);

var i = 0;
var len = Object.keys(json).length;

for(i = 0; i < len; i++) {
  bayes.train(jsonArr[i].tweet_text, jsonArr[i].does_this_tweet_contain_hate_speech)
}
