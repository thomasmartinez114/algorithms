// current month / year - old month / year
// give number of years past
// 09/19 - 03/15 = 4.5 years
// current time should be updated automatically not hard coded
// static it first then make it dynamic

var readline = require('readline-sync');

var enterMonth = readline.question('Enter a month in 00 format: ');
console.log(enterMonth);

var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;

console.log(`${currentMonth} & ${currentYear}`);
console.log(enterMonth);
