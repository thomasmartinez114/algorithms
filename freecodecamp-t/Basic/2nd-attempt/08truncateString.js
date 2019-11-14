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
    return str.slice(0, num) + '...';
    // console.log(newWord);
  } else {
    return str;
  }
  console.log(str);
}

truncateString('A-tisket a-tasket A green and yellow basket', 8); // A-tiskett...
truncateString('Peter Piper picked a peck of pickled peppers', 11); // Peter Piper...
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);
truncateString('A-', 1); // A...
truncateString('Absolutely Longer', 2); // Ab...

// Time: 14:57
// Grade: 3
