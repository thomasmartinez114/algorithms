// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// Note
// You can return the array with its elements in any order.

// return new arr with unique elements
// Loop through arr1 or 2 and check for difference then push those uniqures to newArr

// Hint 1
// Merge the list to make it easy to compare functions.

// Hint 2
// Use filter to get the new array, you will need to create a callback function.

// Hint 3
// The best way to go about the callback function is to check if the number from the new merged array is not in both original arrays and return it.

// https://www.youtube.com/watch?v=XAIvkcdj4Ro

function diffArray(arr1, arr2) {
  let newArr = [];
  let mergedArr = arr1.concat(arr2).sort();
  console.log(mergedArr);

  // Filter

  for (var i = 0; i < mergedArr.length; i++) {
    if (newArr.indexOf(mergedArr[i]) === -1) {
      newArr.push(mergedArr[i]);
    }
  }

  // Same, same; but different.
  console.log(newArr);
  return newArr;
}

// Time: 52:00
// Grade: 0

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// should return [4]
// diffArray(
//   ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//   ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// should return ["pink wool"]

// function diffArray(arr1, arr2) {
//   let newArr = [];

//   let mergeList = arr1.concat(arr2);
//   console.log(mergeList);

//   let uniqueItems = Array.from(new Set(mergeList));
//   console.log(uniqueItems);

//   // Same, same; but different.
//   return uniqueItems;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Time: 53:58
// Grade: 0

// function diffArray(arr1, arr2) {
//   let newArr = [];
//   let mergedArr = arr1.concat(arr2).sort(function(a, b) {
//     return a - b;
//   });
//   console.log(mergedArr);
//   filteredArr = mergedArr.filter(function())

//   // Same, same; but different.
//   return newArr;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Time: 45:03
// Grade: 0

// Referenced sites
// https://medium.com/front-end-weekly/getting-unique-values-in-javascript-arrays-17063080f836
// https://devdocs.io/javascript/global_objects/array/filter
// https://devdocs.io/javascript/global_objects/array/includes
// https://codeburst.io/comparison-of-two-arrays-using-javascript-3251d03877fe
// https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// function diffArray(arr1, arr2) {
//   let newArr = [];
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
