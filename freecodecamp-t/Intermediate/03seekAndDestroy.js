// Intermediate Algorithm Scripting: Seek and Destroy

// You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

//     Note
// You have to use the arguments object.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function destroyer(arr) {
  // creating new temp array that has whole array with the 2 & 3 included
  let args = Array.prototype.slice.call(arguments);

  // Get the 2 & 3 by themselfs in the temp array
  args.splice(0, 1); // start at element 0 and remove 1

  // Compare 2 & 3 with og array
  let newArr = [];

  // iterate through og array
  for (let i = 0; i < arr.length; i++) {
    // iterate through temp array
    for (let j = 0; j < args.length; j++) {
      // if arr[i] equals args[j] then delete it from og array
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }

  // filter out the empty items because was showing <2 empty items> prior
  newArr = arr.filter(removeEmptyItems);

  console.log(newArr);
  return newArr;
}

// filter function to remove any falsy values
function removeEmptyItems(value) {
  return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Time: 37:00
// Grade: 3

// Array-like objects = Array.prototype.slice.call(arguments)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
