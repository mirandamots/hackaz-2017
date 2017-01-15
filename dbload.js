jQuery.getJSON("https://dl.dropboxusercontent.com/s/illwee486dmhaux/hatespeech.json").then(function(json) {

	var bayes = new classifier.Bayesian();

	for(var key in json) {
		bayes.train(json[key].tweet_text, json[key].does_this_tweet_contain_hate_speech)
	}

	var bayesJson = JSON.stringify(bayes.toJSON());
	document.getElementById("container").innerHTML = bayesJson;
});
