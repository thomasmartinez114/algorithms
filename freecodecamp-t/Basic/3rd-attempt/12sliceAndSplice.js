// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

// copy the arrs
// then splice

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let newArr1 = arr1;
  // console.log(newArr1);

  let newArr2 = arr2;
  // console.log(newArr2);

  for (var i = 0; i < newArr1.length; i++) {
    newArr2.splice(n, 0, newArr1[i]);
    n++;
  }
  console.log(newArr2);
  return newArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Time: 07:00
// Grade: 2
