jQuery.getJSON("https://dl.dropboxusercontent.com/s/illwee486dmhaux/hatespeech.json").then(function(json) {

  var bayes = new classifier.Bayesian({
      backend: {
        type: 'Redis',
        options: {
        hostname: 'localhost', // default
        port: 6379,            // default
        name: 'hatespeech'      // namespace for persisting
      }
    }
  });


	for(var key in json) {
	  console.log("training line: " + json[key].tweet_text);
	  bayes.train(json[key].tweet_text, json[key].does_this_tweet_contain_hate_speech)
	}

	var bayesJson = bayes.toJSON();
	console.log(bayesJson);

	// TODO post that JSON to redis
});
