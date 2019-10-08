// n # of candles
// generate array with n candles
// randomize the candle height; age being the tallest candle
// get # of candles that can be blown out

function birthdayCakeCandles(ar) {
    let total = 0;
    let allCandles = [];

    for (let candles = 0; candles < ar; candles++) {
        let candleHeight = Math.floor(Math.random() * ar + 1) // Math.floor() rounds downward
        allCandles.push(candleHeight);
    }
    allCandles.sort(function (a, b) { return b - a });
    console.log(allCandles);
    let tallestCandle = allCandles[0];

    for (let i = 0; i < allCandles.length; i++) {
        if (allCandles[i] == tallestCandle) {
            total++;
        }
    }
    console.log(`Amount of highest candles ${total}`);
    return total;
}

birthdayCakeCandles(5);



// https://stackoverflow.com/questions/29640432/generate-4-digit-random-number-using-substring/29640472
// You can get 4-digit this way .substring(startIndex, length), which would be in your case .substring(0, 4). To be able to use .substring() you will need to convert a to string by using .toString(). At the end, you can convert the resulting output into integer by using parseInt

// https://www.youtube.com/watch?v=nBwQGT99qi4
