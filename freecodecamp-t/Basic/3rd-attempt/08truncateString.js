// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

// Hint 1
// Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

//     Hint 2
// You will need to use the slice() method and specify where to start and where to stop.

// if str > num then slice the rest and add ...

function truncateString(str, num) {
  // Clear out that junk in your trunk

  if (str.length > num) {
    let newStr = str.slice(0, num) + '...';
    console.log(newStr);
    return newStr;
  } else {
    return str;
  }
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

// Time: 04:06
// Grade: 4
