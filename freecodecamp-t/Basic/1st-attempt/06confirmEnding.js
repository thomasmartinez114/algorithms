function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  // if the ending of str by target's length equals target
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }

  return str;
}

confirmEnding('Bastian', 'n');

// Time: 10.12
// Grade: 2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// function confirmEnding(str, target) {
//   // console.log(str.substr(-1)); // logs substr(-1) = 'n'
//   if (str.substr(-target.length) === target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// confirmEnding('Thomas', 'mas');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr

// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterward.

// str.substr(start[, length])

// ParametersSection
//   start - The index of the first character to include in the returned substring.
//   length - Optional.The number of characters to extract.
