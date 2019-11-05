// A palindrome is a string that reads the same left-to-right and right-to-left.
// var for regular spelt and backwards spelt

function checkPalindrome(inputString) {
    var regular = inputString;
    var backwards = '';

    for (var i = 0; i < regular.length; i++) {
        backwards = inputString.split('').reverse().join('');
    }
    if (backwards === regular) {
        console.log(`Words are palindrome!`);
        return true;
    }
    else {
        console.log(`Words are NOT palindrome!`);
        return false;
    }
}

checkPalindrome('aabaa');
checkPalindrome('abac');
checkPalindrome('a');

// Time: 08:50
// Grade: 5

// Refactored code
// function checkPalindrome(inputString) {
//     return inputString == inputString.split('').reverse().join('');
// }
