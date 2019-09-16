// current month / year - old month / year
// give number of years past
// 09/19 - 03/15 = 4.5 years
// current time should be updated automatically not hard coded
// static it first then make it dynamic

var readline = require('readline-sync');

// Get user input month
var enterMonth = readline.question('Enter a month 1-12: ');

// Get user input year
var enterYear = readline.question('Enter a year - xxxx format: '); // Constraint to 4 digit entry

// Populate current month and year
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;

// Summing up the months years
var totalMonths = enterMonth / 12;
var totalMonthsTwo = totalMonths.toFixed(2);
var totalYears = currentYear - enterYear;
let combinedTime = totalYears + totalMonths;

// console.log(`${currentMonth} & ${currentYear}`);
// console.log(enterMonth);
console.log(`The total amount of time passed it: ${combinedTime.toFixed(2)}`);
