// Basic Algorithm Scripting: Finders KeepersPassed
// Create a function that looks through an array(first argument) and returns the first element in the array that passes a truth test(second argument).If no element passes the test, return undefined.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

// Look through array and returns the first element
// that passes the truth test (second argument)
// If nothing passes the test then return undefined

function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    // console.log(num)

    // input the num in the function
    if (func(num)) {
      console.log(num);
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Time: 09:30
// Grade: 2
