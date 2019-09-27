// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function truncateString(str, num) {
  var eachLetter = str.slice(0, num);
  // console.log(eachLetter); // log out the letters by what num - 1 is
  var newStr = eachLetter + '...';
  console.log(newStr); // log what the words would be with '...' added
}

truncateString(
  'A-tisket a-tasket A green and yellow basket',
  'A-tisket a-tasket A green and yellow basket'.length
);
