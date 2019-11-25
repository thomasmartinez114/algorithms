// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    console.log(min, max);
    
    var total = 0;

    for (var i = min; i <= max; i++) {
        total = total + i;
    }
    console.log(total);
    return total;

}

sumAll([1, 4]);
sumAll([5, 10]); // should return 45

// Time: 09:26
// Grade: 2