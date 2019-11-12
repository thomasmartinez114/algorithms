// Basic Algorithm Scripting: Finders KeepersPassed
// Create a function that looks through an array(first argument) and returns the first element in the array that passes a truth test(second argument).If no element passes the test, return undefined.

// Remember to use Read - Search - Ask if you get stuck.Try to pair program.Write your own code.

function findElement(arr, func) {
  let num = 0;
  // return num;

  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // log the elements
    if (arr[i] % 2 === 0) {
      console.log(`The arr[i] that passed is ${arr[i]}`);
      return arr[i];
      break;
    }
  }
  console.log('the num is: ' + num);
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Time: 10:53
// Grade: 2
