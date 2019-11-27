// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
    let total = 0;

    for (var i = 0; i < ar.length; i++) {
        total += ar[i];
        console.log(total);
    }
    console.log(`The grand total is: ${total}`);
    return total;
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);

// Time: 05:28
// Grade: 5