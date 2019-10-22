// Basic Algorithm Scripting: Title Case a SentencePassed
// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function titleCase(str) {
  let lowerCase = str.toLowerCase();

  let words = lowerCase.split(' ');
  console.log(words);

  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let capitalize = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    console.log(capitalize);
    // push to array
    newWords.push(capitalize);
    // console.log(`Array of words ${newWords}`);
  }
  let final = newWords.join(' ');
  console.log(final);
  return final;
}

titleCase("I'm a little tea pot");
titleCase('sHoRt AnD sToUt');
titleCase('HERE IS MY HANDLE HERE IS MY SPOUT');

// function titleCase(str) {
//   var words = str.split(' ');
//   // console.log(words); // showing words split
//   var newWords = [];

//   for (var i = 0; i < words.length; i++) {
//     var capWords = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     // console.log(capWords);
//     newWords.push(capWords);
//     // console.log(newWords);
//   }
//   var wordsFinal = newWords.join(' ');
//   console.log(wordsFinal);
//   return wordsFinal;
// }

// titleCase("I'm a little tea pot");

// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

// \\\\\\\\\\\\\\\\\
// \\ This works  \\
// \\\\\\\\\\\\\\\\\

// function titleCase(str) {
//   str = str.toLowerCase();
//   console.log(str);

//   var newWords = str.split(' ');
//   console.log(newWords);

//   for (var i = 0; i < newWords.length; i++) {
//     newWords[i] = newWords[i].charAt(0).toUpperCase() + newWords[i].slice(1);
//     console.log(newWords[i])
//   }
//   str = newWords.join(' ');
//   console.log(str);
//   return str;
// }

// titleCase("I'm a little tea pot");
