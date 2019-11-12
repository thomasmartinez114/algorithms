// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4, 1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

function sumAll(arr) {
  // Sort the arr of numbers from least to greatest
  // Then loop through to add all numbers between them

  let sum = 0;
  let sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  console.log(sortedArr);

  // let nums = the first element (least) to add up from there
  // nums <= second element in the arr since that will be the highest number

  for (let nums = sortedArr[0]; nums <= sortedArr[1]; nums++) {
    sum += nums;
    console.log(`Number being added is: ${nums}`);
    console.log(sum);
  }
  console.log(`Total sum: ${sum}`);

  return sum;
}

sumAll([1, 4]);
sumAll([15, 2]);

// Time: 09:03
// Grade: 2

// function sumAll(arr) {
//   // sort the array smallest - largest
//   arr.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(arr);

//   let sum = 0;

//   for (let num = arr[0]; num <= arr[1]; num++) {
//     // console.log(num);
//     sum += num;
//   }
//   console.log('Total is: ' + sum);
//   return sum;
// }

// sumAll([1, 4]);
