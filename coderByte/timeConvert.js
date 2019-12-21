// Time Convert

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to(ie.if num = 63 then the output should be 1: 3).Separate the number of hours and minutes with a colon.
//   Examples
// Input: 126
// Output: 2: 6
// Input: 45
// Output: 0: 45

function TimeConvert(num) {
  // code goes here
  let hours = num / 60;
  console.log(hours);
  let minutes = num % 60; // 126 % 60 = 6 (60 goes into 120 twice and the remainder is 6)
  console.log(minutes);
  let total = hours + ':' + minutes;
  console.log(total);
}

// keep this function call here
// console.log(TimeConvert(readline()));
console.log(TimeConvert(126));
