// Basic Algorithm Scripting: Repeat a String Repeat a StringPassed
// Repeat a given string str(first argument) for num times(second argument).Return an empty string if num is not a positive number.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

//     Hints
// Hint 1
// The program is very simple, we have to take a variable and return that variable being repeated certain amount of times.No need to add space or anything, just keep repeating it into one single string.

//     Hint 2
// You can’t edit strings, you will need to create a variable to store the new string.

//     Hint 3
// Create a loop to repeat the code as many times as needed.

//     Hint 4
// Make the variable created store the current value and append the word to it.

function repeatStringNumTimes(str, num) {
    // repeat after me
    let repeat = '';

    for (let i = 0; i < num; i++) {
        repeat += str;
    }
    console.log(repeat);
    return repeat;
}

repeatStringNumTimes("abc", 3);

// Time: 03:24
// Grade: 4