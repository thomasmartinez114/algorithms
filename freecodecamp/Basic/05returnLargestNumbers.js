// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  var largestNumber = [];

  for (var i = 0; i < arr.length; i++) {
    // Sort the numbers in the arrays
    arr[i].sort(function(a, b) {
      return a - b;
    });

    console.log(`Print out arr: ${arr[i]}`);
    var high = arr[i].slice(-1).join(''); // Get the last element which is the highest -- join(' ') removes the subarrays
    console.log(high);
    largestNumber.push(high); // Push the highest to the new array
  }
  console.log(largestNumber);
  console.log(typeof largestNumber);
  return largestNumber;
}

// Doesnt pass FCC but displays what we want

largestOfFour([
  [4, 9, 1, 3],
  [13, 35, 18, 26],
  [32, 35, 97, 39],
  [1000000, 1001, 857, 1]
]);
