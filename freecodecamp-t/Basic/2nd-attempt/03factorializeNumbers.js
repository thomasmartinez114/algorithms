// Basic Algorithm Scripting: Factorialize a Number

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function factorialize(num) {
    let count = 1;

    for (var i = 1; i <= num; i++) {
        count *= i;
        console.log(count);
    }
    return count;
}

factorialize(5);
factorialize(10);

// Time: 07:05
// Grade: 3