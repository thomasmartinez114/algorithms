// // Intermediate Algorithm Scripting: Seek and Destroy

// // You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

// //     Note
// // You have to use the arguments object.

// // Remember to use Read - Search - Ask if you get stuck.Write your own code.

// Intermediate Algorithm Scripting: Seek and DestroyPassed
// You will be provided with an initial array(the first argument in the destroyer function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

//     Note
// You have to use the arguments object.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

// iterate through arr
// if they match then pop

function destroyer(arr) {
  let newArr = [];

  var args = Array.prototype.slice.call(arguments);
  args.splice(0, 1); // removes the 0 index only
  console.log(args);

  for (var i = 0; i < arr.length; i++){
      for(var j = 0; j < args.length; j++){
          if (arr[i] === args[j]){
              delete arr[i];
          }
      }
  }

  // need to use filter to remove empty items showing up in arr
  newArr = arr.filter(removeEmptyItems);

  console.log(newArr);
  return newArr;

}

// filter function to remove false values
function removeEmptyItems(value){
    return Boolean(value);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3) // should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) // should return [1].
// destroyer([2, 3, 2, 3], 2, 3) // should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) // should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") // should return [12, 92, 65].

// Time: 23:54
// Grade: 2

