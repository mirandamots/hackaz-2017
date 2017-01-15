jQuery.getJSON("https://dl.dropboxusercontent.com/s/sk9qkq6usjxvqgk/classifier.json").then(function(json) {
	var bayes = new classifier.Bayesian();

	bayes.fromJSON(json);

	console.log(bayes.classify(""));
});
