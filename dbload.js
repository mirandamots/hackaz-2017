DUMB_WORDS = new Set(['the', 'a', 'in', 'and', 'or', 'but', 'as', 'for', 'I', 'of', 'http', 'https', 't']);

jQuery.getJSON("https://dl.dropboxusercontent.com/s/illwee486dmhaux/hatespeech.json").then(function(json) {

	var bayes = new classifier.Bayesian();

	for(var key in json) {
		bayes.train(json[key].tweet_text, json[key].does_this_tweet_contain_hate_speech)
	}

	var bayesJson = bayes.toJSON();
	console.log(bayesJson);

	for(var key in bayesJson['words']) {
		if(DUMB_WORDS.has(key)) {
			delete bayesJson['words'][key];
		} else if(key.match(/\d+/g) != null) {
			delete bayesJson['words'][key];
		} else {
			sum = 0;

			for(var key2 in bayesJson['words'][key]) {
				sum += bayesJson['words'][key][key2]
			}

			if(sum <= 1) {
				delete bayesJson['words'][key];
			}
		}
	}

	document.getElementById("container").innerHTML = JSON.stringify(bayesJson);
});
