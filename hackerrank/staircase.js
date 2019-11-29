function staircase(n) {
    for (var i = 1; i <= n; i++) {
        // column
        for (var k = 0; k < n - i; k++) {
            console.log(" ");
        }
        for (var j = 1; j <= i; j++) {
            // row
            console.log("#");
        }
        console.log("\n");
    }

}

staircase(4);