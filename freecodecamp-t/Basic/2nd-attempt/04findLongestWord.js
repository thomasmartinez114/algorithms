// Basic Algorithm Scripting: Find the Longest Word in a StringPassed
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function findLongestWordLength(str) {
    let count = 0;
    let words = str.split(' ');
    console.log(words);

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > count) {
            count = words[i].length;
        }
    }
    console.log(`The longest word has ${count} letters`);
    return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("The biggest encyclepedia");

// Time: 04:38
// Grade: 4