function titleCase(str) {
  var newStr = str.split(' ');
  console.log(newStr);
  for (var i = 0; i < newStr.length; i++) {
    //console.log(newStr[i]);
    var upper = newStr[i][0].toUpperCase();
    console.log(upper);
  }
}

titleCase("I'm a little tea pot");