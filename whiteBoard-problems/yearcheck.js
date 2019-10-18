// current month / year - old month / year
// give number of years past
// 09/19 - 03/15 = 4.5 years
// current time should be updated automatically not hard coded
// static it first then make it dynamic

const readline = require('readline-sync');
const date = new Date();

// Get user input month
let pastMonth = readline.question('Enter a month 1-12: ');

// Get user input year
let pastYear = readline.question('Enter a year - xxxx format: ');

// Populate current month and year
let currYear = date.getFullYear();
let currMonth = date.getMonth() + 1;

// Summing up the months years
let totalMonths = 0;
let totalYears = 0;
let timeElapsed = totalYears + totalMonths;

if (pastMonth < currMonth) {
  totalMonths = (currMonth - pastMonth) / 12;
  //   console.log(totalMonths);
}
if (pastYear < currYear) {
  totalYears = currYear - pastYear;
  //   console.log(totalYears);
} else {
  totalMonths = (pastMonth - currMonth) / 12;
  totalYears = pastYear - currYear;
}
console.log('Total years passed is: ', totalYears + totalMonths);
