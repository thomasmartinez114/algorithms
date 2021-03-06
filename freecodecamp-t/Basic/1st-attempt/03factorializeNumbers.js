// Basic Algorithm Scripting: Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function factorialize(num) {
  let sum = 1;

  for (let i = 1; i <= num; i++) {
    sum *= i;
    console.log(sum);
  }
  return sum;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);

// Time: 04:20
// Grade: 3

//////////////////
// 1st attempt //
/////////////////

// function factorialize(num) {
//   var sum;

//   for (var i = 1; i <= num; i++) {
//     sum = num * i;
//   }
//   console.log(sum);
// }

// factorialize(5);
