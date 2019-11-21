// Basic Algorithm Scripting: Falsy BouncerPassed

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// Remember to use Read - Search - Ask if you get stuck.Write your own code.

function bouncer(arr) {
    let newArr = [];

    for (let truthy = 0; truthy < arr.length; truthy++) {
        if (arr[truthy]) newArr.push(arr[truthy]);
    }
    console.log(newArr);
    return newArr;
}

bouncer([7, "ate", "", false, 9]) // return [7, "ate", 9]
bouncer(["a", "b", "c"]) // return ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]) // return [].
bouncer([1, null, NaN, 2, undefined]) // return [1, 2].

// Time: 11:42
// Grade: 3