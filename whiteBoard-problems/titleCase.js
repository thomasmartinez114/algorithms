// Notes
// return a string with title casing, rest letters lowercase
// cap the words like "the"

// Pseudo code
// lowercase all into an arrary
// take the first letter of each and cap

function titleCase(sentence) {
    let newSent = sentence.toLowerCase();
    let words = newSent.split(' '); // splits by space aka each word and places into an array

    for (let letters = 0; letters < words.length; letters++) {
        wordsCap = words[letters].charAt(0).toUpperCase() + words[letters].slice(1); // cap first letter with charAt(0) then add with rest of letters after char 0
    }
    console.log(wordsCap);
    return wordsCap;
}