// current month / year - old month / year
// give number of years past
// 09/19 - 03/15 = 4.5 years
// current time should be updated automatically not hard coded
// static it first then make it dynamic

const readline = require('readline-sync');
const date = new Date();

// Get user input month
let enterMonth = readline.question('Enter a month 1-12: ');

// Get user input year
let enterYear = readline.question('Enter a year - xxxx format: ');

// Populate current month and year
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;

// Summing up the months years
let totalMonths = enterMonth / 12;
let totalYears = currentYear - enterYear;
let combinedTime = totalYears + totalMonths;

// Console Log the time passed
console.log(`The total amount of time passed it: ${combinedTime.toFixed(2)}`);
