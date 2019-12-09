function staircase(n) {
    for (var i = 1; i <= n; i++){
        for (var j = 0; j < n - 1; j++){
            console.log(".");
        }
        for (var k = 1; k <= i; k++){
            console.log("#");
        }
        console.log("\n");
    }
}

staircase(4);

// Loop to do hashtags and pyramid
// for (int i = 1; i <= height; i++)
// {
//     // column
//     for (int k = 0; k < height - i; k++)
//     {
//         printf(" ");
//     }
//     for (int j = 1; j <= i; j++)
//     {
//         // row
//         printf("#");
//     }
//     printf("\n");
// }