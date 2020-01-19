// Basic Algorithm Scripting: Find the Longest Word in a StringPassed
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function findLongestWordLength(str) {
  // count of the longest word
  // iterate through the words.length
  // if the iteration is longer than the current sum then make that the new sum

  let total = 0;
  let words = str.split(' ');
  console.log(words);

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > total) {
      total = words[i].length;
    }
    console.log(`New total is: ${total}`);
  }
  return total;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// Time: 07:06
// Grade: 3
