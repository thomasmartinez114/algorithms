function miniMaxSum(arr) {
  let sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  let min = 0;
  let max = 0;
  console.log('Sorted Array is: ' + sortedArr);

  for (var i = 0; i < sortedArr.length - 1; i++) {
    min += sortedArr[i];
  }

  for (var i = 1; i < sortedArr.length; i++) {
    max += sortedArr[i];
  }
  console.log(min, max);
}

miniMaxSum([5, 4, 3, 2, 1]);

// Time: 06:41
// Grade: 5
