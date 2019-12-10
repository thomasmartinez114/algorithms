// Given a time in 12 hour AM/PM format, convert it to military 24 format.
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
//timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Sample Input
// 07:05:45PM

// Sample Output
// 19:05:45

function timeConversion(s) {
  // split from :
  // then take the first element and subrtract by 24 to turn into Military time
  // split last by PM or AM

  let newTime = s.split(':');
  console.log(newTime);

  let hour = 0;
  let min = 0;
  let sec = 0;

  for (var i = 0; i < newTime.length; i++) {
    if (newTime > 12) {
      hour = 12 + newTime[0];
    } else {
      hour = 12 + parseInt(newTime[0]); // convert 07 to int
      console.log(hour);
    }
    min = newTime[1];
    sec = newTime[2];
  }

  console.log(hour + ':' + min + ':' + sec);
}

timeConversion('07:05:45PM');
