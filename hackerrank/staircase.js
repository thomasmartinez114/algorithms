function staircase(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= n; j++) {
      if (i + j < n - 1) {
        console.log(' ');
      }
      console.log('\n');
    }
  }
}

staircase(4);
