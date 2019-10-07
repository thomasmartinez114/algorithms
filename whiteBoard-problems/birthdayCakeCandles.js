// n # of candles
// generate array with n candles
// randomize the candle height; age being the tallest candle
// get # of candles that can be blown out

function birthdayCakeCandles(ar) {
    let ar = [4, 2, 3, 5, 3];
    let total = 0;

    for (let candles = 0; candles < ar.length; candles++) {
        if (candles >= ar[candles]) {
            total++;
        }
    }
    console.log(total);
}