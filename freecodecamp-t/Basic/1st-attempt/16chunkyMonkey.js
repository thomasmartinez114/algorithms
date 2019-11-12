// Write a function that splits an array(first argument) into groups the length of size(second argument) and returns them as a two - dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let splitArr = [];

  for (var i = 0; i < arr.length; i++) {
    splitArr.push(arr[i]);
  }
  console.log(splitArr);
  return arr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
