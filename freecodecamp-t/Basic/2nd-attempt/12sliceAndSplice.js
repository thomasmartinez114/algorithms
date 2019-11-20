// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

// copy the arrs
// then splice

function frankenSplice(arr1, arr2, num){
    let arr1Copy = arr1.slice(0);
    let arr2Copy = arr2.slice(0);
    console.log(arr1Copy);
    console.log(arr2Copy);

    for (var i = 0; i < arr1Copy.length; i++) {
        // console.log(arr2Copy[i]);
        arr2Copy.splice(num, 0, arr1Copy[i]);
        num++;
    }
    console.log(arr2Copy);
}

frankenSplice([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 3);

// Time: 10:22
// Grade: 3
