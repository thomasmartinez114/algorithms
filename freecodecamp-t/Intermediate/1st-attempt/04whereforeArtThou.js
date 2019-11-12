// Make a function that looks through an array of objects(first argument) and returns an array of all objects that have matching name and value pairs(second argument).Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array(the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  // What's in a name?
  let objKeys = Object.keys(source);
  // console.log(objKeys);

  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < source.length; j++) {
    }
    console.log(collection[i]);
  }

}

whatIsInAName(
  [{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }],
  { last: 'Capulet' }
);

// Cliff code below
// function whatIsInAName(collection, source) {
//     let keys = Object.keys(source);

//     /////////////
//     //  v2.0  //
//     ////////////
//     return collection.filter(item => {
//         for (let key = 0; key < keys.length; key++) {
//             if (item[keys[key]] !== source[keys[key]]) {
//                 return false;
//             }
//         }
//         return true;
//     })

//     /////////////
//     //  v1.0  //
//     ////////////

//     // for (let item = 0; item < collection.length; item++) {
//     //     var isGood = true;
//     //     for (let key = 0; key < keys.length; key++) {
//     //         if (!collection[item].hasOwnProperty(keys[key])) {
//     //             // key not there NEXT!
//     //             isGood = false;
//     //             break;
//     //         }
//     //         if (collection[item][keys[key]] !== source[keys[key]]) {
//     //             // not a match NEXT!
//     //             isGood = false;
//     //             break;
//     //         }
//     //     }
//     //     if (isGood) {
//     //         arr.push(collection[item]);
//     //     }
//     // }
//     // // Only change code above this line
//     // console.log(arr);
//     // return arr;
// }
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
