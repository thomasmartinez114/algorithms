// Time Convert

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to(ie.if num = 63 then the output should be 1: 3).Separate the number of hours and minutes with a colon.
//   Examples
// Input: 126
// Output: 2: 6
// Input: 45
// Output: 0: 45

function TimeConvert(num) {
  // code goes here
  var hours = num / 60;
  console.log(hours);
}

// keep this function call here
// console.log(TimeConvert(readline()));
console.log(TimeConvert(126));