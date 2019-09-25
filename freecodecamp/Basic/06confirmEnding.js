function confirmEnding(str, target) {
  console.log(str.substr(-target.length)); // logs 'n'
}

confirmEnding('Bastian', 'n');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.
