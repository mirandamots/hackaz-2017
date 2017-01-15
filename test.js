var bayes = new classifier.Bayesian();

// function readSingleFile(e) {
//   var file = e.target.files[0];
//   if (!file) {
//     return;
//   }
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var contents = e.target.result;
//     displayContents(contents);
//   };
//   reader.readAsText(file);
// }
//
// function displayContents(contents) {
//   var element = document.getElementById('file-content');
//   element.innerHTML = contents;
// }
//
// document.getElementById('file-input')
//   .addEventListener('change', readSingleFile, false);
//
// // Import the CSV.
// Papa.parse('hatespeech.csv', {
// 	complete: function(results) {
// 		console.log("Finished:", results.data);
// 	}
// });

bayes.train("you're such a pile of slag", 'hate speech');
bayes.train("slag are the worst", 'hate speech');
bayes.train("I like eggs and ham", 'not');

var category = bayes.classify("get out slags");

console.log(category);

var json = bayes.toJSON();

// var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json));
// var dlAnchorElem = document.getElementById('downloadAnchorElem');
// dlAnchorElem.setAttribute("href",     dataStr     );
// dlAnchorElem.setAttribute("download", "scene.json");
// dlAnchorElem.click();

bayes.fromJSON(json);
