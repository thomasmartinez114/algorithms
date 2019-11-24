// Write a function that splits an array(first argument) into groups the length of size(second argument) and returns them as a two - dimensional array.

function chunkArrayInGroups(arr, size) {
    let newArray = [];
    // newArray.push(arr);
    // console.log(newArray);

    for (var i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, i + size));
    }
    console.log(newArray);
    return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Time: 21:16
// Grade: 1