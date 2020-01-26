// Basic Algorithm Scripting: Title Case a SentencePassed

// Return the provided string with the first letter of each word capitalized.Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

// make all lowercase first
// cap first letter of each word

function titleCase(str) {
  // Lowercase and split the words
  let words = str.toLowerCase().split(' ');
  console.log(words);
  let finalWords = [];

  for (var i = 0; i < words.length; i++) {
    let titleCase = words[i][0].toUpperCase() + words[i].slice(1);
    // console.log(titleCase);
    finalWords.push(titleCase);
  }
  // console.log(finalWords);

  // Join the final words now
  let sentence = finalWords.join(' ');
  console.log(sentence);
  return sentence;
}

titleCase("I'm a little tea pot");

// Time: 11:55
// Grade: 4
