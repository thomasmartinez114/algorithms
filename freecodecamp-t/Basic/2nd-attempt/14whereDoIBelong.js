// Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it has been sorted.The returned value should be a number.

// For example, getIndexToIns([1, 2, 3, 4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).

//     Likewise, getIndexToIns([20, 3, 5], 19)should return 2because once the array has been sorted it will look like[3, 5, 20]and 19is less than 20(index 2) and greater than 5(index 1).

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.sort(function(a, b) {return a - b})
    // console.log(arr);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            console.log(i);
            return i;
        }
    }

    return i;
}

// Time: 14:06
// Grade: 3

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35) // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30) // should return 2.
getIndexToIns([40, 60], 50) // should return 1.
getIndexToIns([3, 10, 5], 3) // should return 0.
getIndexToIns([5, 3, 20, 3], 5) // should return 2.
getIndexToIns([2, 20, 10], 19) // should return 2.
getIndexToIns([2, 5, 10], 15) // should return 3.
getIndexToIns([], 1) // should return 0.

