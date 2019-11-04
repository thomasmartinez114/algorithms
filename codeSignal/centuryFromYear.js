function centuryFromYear(year) {
  // 1 - 100 = 1st century
  // 101 - 200 = 2nd century
  // year / 100 to get the two digit of year ex. 1900/100 = 19
  // if get decimal need to round up
  console.log(Math.ceil(year / 100));
  return Math.ceil(year / 100); //Math.ceil will round up by 1
}

// Refactored version below
// var centuryFromYear = (year) => {return Math.ceil(year / 100);}

// centuryFromYear(1996);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

// Time: 15:30
// Grade: 2
