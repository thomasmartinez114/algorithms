function titleCase(str) {
  var words = str.split(' ');
  console.log(words);

  for (var i = 0; i < words.length; i++) {
    var capWords = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    console.log(capWords);
  }
}

titleCase("I'm a little tea pot");

// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/