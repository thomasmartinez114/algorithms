// Basic Algorithm Scripting: MutationsPassed
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments["hello", "hey"] should return false because the string "hello" does not contain a "y".

//     Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

// function mutation(arr) {
//     for (var i = 0; i < arr.length; i++){
//         let lowercase = arr[i].toLowerCase();
//         console.log(lowercase);

//         if ()
//     }
// }

function mutation(arr) {
    let word1 = arr[1].toLowerCase();
    let word2 = arr[0].toLowerCase();

    for (let letters = 0; letters < word1.length; letters++){
        if (word2.indexOf(word1[letters]) < 0) return false;
    }
    return true;
}

mutation(["hello", "hey"]);

// Time: 09:00
// Grade: 2