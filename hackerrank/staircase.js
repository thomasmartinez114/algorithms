function staircase(n) {
  for (var i = 0; i < n; i++) {
    // column
    for (var j = 0; j <= n; j++) {
      if (i + j < n - 1) {
        console.log(' ');
      }
    }
    for (var k = 1; k <= i; j++) {
      // row
      console.log('#');
    }
  }
}

staircase(4);
