// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var copyArr1 = arr1.slice(0);
  var copyArr2 = arr2.slice(0);
  console.log('Arr1: ' + copyArr1);
  console.log('Arr2: ' + copyArr2);

  for (var i = 0; i < copyArr1.length; i++) {
    copyArr2.splice(n, 0, copyArr1[i]);
    n++; // increment index position to place the element in proper index
  }
  console.log(copyArr2);
  return copyArr2;
}

// Time: 14:12
// Grade: 2
