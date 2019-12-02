// Convert a string to spinal case.Spinal case is all - lowercase - words - joined - by - dashes.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

// turn all words to lower case
// join by " "

function spinalCase(str){
    // new str to manipulate
    // find all matches were lowercase is next to uppercase
    // replace lowercase-Uppercase words to lowercase-space-uppercase
    // $1 $2 does this
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    // replace spaces or underscores with hiphens
    let newWord = str.replace(/\s|_/g, '-');

    console.log(newWord);
    return newWord;
}


//spinalCase("This Is Spinal Tap") // should return "this-is-spinal-tap".
 spinalCase("thisIsSpinalTap") // should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") // should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") // should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") // should return "all-the-small-things".

// function spinalCase(str) {
//     // "It's such a fine line between stupid, and clever."
//     // --David St. Hubbins
//     let words = str;
//     words.toLowerCase();
//     console.log(words);
//     return str;
// }

// Time: 23:05
// Grade: 3