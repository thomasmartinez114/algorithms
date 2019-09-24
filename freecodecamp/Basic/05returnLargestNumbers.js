// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  var largestNumber = [];

  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a, b) {
      return a - b;
    });
    // var sort = arr[i] - 1;
    // console.log(`The high is ${sort}`);

    console.log(`Print out arr: ${arr[i]}`);
    var high = arr[i].slice(-1);
    console.log(high);
    // largestNumber.parseInt().push(arr[i] - 1);
    // console.log(largestNumber);
    // for (var j = 0; j < arr[i].length; j++) {
    //   console.log(`Print out the numbers in arr: ${arr[i][j]}`);
  }
  console.log(largestNumber);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
