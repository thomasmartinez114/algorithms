// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Hint 1
// You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.You will need to keep track of the array with the answer and the largest number of each sub - array.

//     Hint 2
// You can work with multidimensional arrays by Array[Index][SubIndex]

// Hint 3
// Pay close attention to the timing of the storing of variables when working with loops

function largestOfFour(arr) {
  // You can do this!
  let largest = [];

  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    // Sort the Arrs
    let sortArrs = arr[i].sort(function(a, b) {
      return a - b;
    });
    //console.log(sortArrs);

    // Push the last index since it's largest to the largest ARR
    // Take the largest index
    let highest = sortArrs.slice(-1)[0]; // [0] removes number from original arr
    console.log('Highest # is: ' + highest);

    // Push to largest ARR
    largest.push(highest);
  }
  console.log(largest);
  return largest;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// Time: 08:17
// Grade: 2.5
