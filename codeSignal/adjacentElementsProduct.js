// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
    let result = inputArray[0] * inputArray[1];

    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] * inputArray[i + 1] > result) {
            result = inputArray[i] * inputArray[i + 1];
        }
    }
    console.log("Largest product is: " + result);
    return result;
}

// Time: 30:00
// Grade: 2
adjacentElementsProduct([3, 6, -2, -5, 7, 3]); // 21
adjacentElementsProduct([-23, 4, -3, 8, -12]); // -12