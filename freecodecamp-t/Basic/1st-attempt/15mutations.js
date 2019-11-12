function mutation(arr) {
  let firstWord = arr[1].toLowerCase();
  let secondWord = arr[0].toLowerCase();

  for (var i = 0; i < firstWord.length; i++) {
    if (secondWord.indexOf(firstWord[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(['hello', 'hey']));

// The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex.Returns - 1 if the value is not found.
