var tweets = document.querySelectorAll("[data-item-type=\"tweet\"]");

for (var tweet in tweets) {
  var containsHateSpeech = walk(tweet);
  if (containsHateSpeech) {
    tweet.style.height = "0px";
  }
}

function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      return textHasHateSpeech(node);
      break;
  }
}


function textHasHateSpeech() {
  
}