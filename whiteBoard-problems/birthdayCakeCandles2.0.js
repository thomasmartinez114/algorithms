function birthdayCakeCandles(ar) {
    // n # of candles
    // generate array with n candles
    // randomize the candle height; age being the tallest candle
    // get # of candles that can be blown out

    let total = 0;
    let allCandles = ar.sort(function (a, b) { return b - a });
    let tallestCandle = allCandles[0];

    for (let i = 0; i < allCandles.length; i++) {
        if (allCandles[i] == tallestCandle) {
            total++;
        }
    }
    return total;
}