// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

function sumAll(arr) {
  // sort the array smallest - largest
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);

  let sum = 0;

  for (let num = arr[0]; num <= arr[1]; num++) {
    // console.log(num);
    sum += num;
  }
  console.log('Total is: ' + sum);
  return sum;
}

sumAll([1, 4]);

// Time: 27:34
// Grade: 1
