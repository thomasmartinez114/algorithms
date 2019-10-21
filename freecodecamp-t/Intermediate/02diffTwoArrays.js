// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

// return new arr with unique elements
// Loop through arr1 or 2 and check for difference then push those uniqures to newArr

// merge the lists and sort it
// use filter to get new arr

function diffArray(arr1, arr2) {
  let newArr = [];
  let mergedArr = arr1.concat(arr2).sort(function(a, b) {
    return a - b;
  });
  console.log(mergedArr);
  filteredArr = mergedArr.filter(function())

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Referenced sites
// https://medium.com/front-end-weekly/getting-unique-values-in-javascript-arrays-17063080f836
// https://devdocs.io/javascript/global_objects/array/filter
// https://devdocs.io/javascript/global_objects/array/includes
// https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe
// https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/

// function diffArray(arr1, arr2) {
//   var newArr = [];
//   // Same, same; but different.

//   // Iterate through arr1
//   for (let i = 0; i < arr1.length; i ++){

//     // Check if the element is in arr2
//     if (arr2.indexOf(arr1[i]) === -1){

//       // Store the element in newArr
//       newArr.push(arr1[i])
//     }
//   }

//   // Iterate through arr2
//   for (let i = 0; i < arr2.length; i ++) {

//   // Check if the element is in arr1
//     if (arr1.indexOf(arr2[i]) === -1){

//   // Store the element in newArr
//     newArr.push(arr2[i])
//     }
//   }

//   return newArr;
// }
