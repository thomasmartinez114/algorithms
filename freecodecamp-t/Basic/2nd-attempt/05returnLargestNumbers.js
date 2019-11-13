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
    let largestNumbers = [];

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        // Sort the Sub Arrays smallest - largest
        let sortedArr = arr[i].sort(function (a, b) { return a - b });
        console.log("Sorted Arrays: " + sortedArr);

        // Grab largest number
        let highest = sortedArr.slice(-1)[0]; // Adding [0] removes element from bracket
        // console.log(highest);
        // Push the largest to largestNumber arr (last element)
        largestNumbers.push(highest);
    }
    console.log(largestNumbers);
    return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Time: 19:22
// Grade: 3