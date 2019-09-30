function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var copyArr1 = arr1.slice(0);
  var copyArr2 = arr2.slice(0);
  console.log(copyArr2);

  for (var i = 0; i < copyArr1.length; i++) {
    copyArr2.push(copyArr1[i]);
  }
  console.log(copyArr2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);