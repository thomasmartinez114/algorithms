// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems.The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// For example, given the array  there are  elements, two positive, two negative and one zero.Their ratios would be, 2/5 positives, 2/5 negatives, 1/5 zeros and. It should be printed as:
// 0.400000
// 0.400000
// 0.200000

// print each on their own line rounded to 6th place
// arr is the array of intergers
// n is number of elements in the array

// Complete the plusMinus function below.
function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  let denom = 6;
  // console.log(denom);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }
  console.log(`Positives: ${positives}`);
  console.log(`Negatives: ${negatives}`);
  console.log(`Zeros: ${zeros}`);
}
