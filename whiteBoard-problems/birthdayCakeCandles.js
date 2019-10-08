// n # of candles
// generate array with n candles
// randomize the candle height; age being the tallest candle
// get # of candles that can be blown out

function birthdayCakeCandles(ar) {
    // let nums = Math.floor(1000 + Math.random() * 900000)
    // console.log(nums)
    // nums = nums.toString().substring(0, ar);
    // nums = parseInt(nums);
    let total = 0;
    let allCandles = [];

    for (let candles = 0; candles < ar; candles++) {
        let candleHeight = Math.floor(Math.random() * ar + 1)
        allCandles.push(candleHeight);
    }
    console.log(allCandles);

    // for (let candles = 0; candles < nums.length; candles++) {
    //     if (candles >= nums[candles]) {
    //         total++;
    //     } else {
    //         continue;
    //     }
    // }
    // console.log(total);
}

birthdayCakeCandles(5);



// https://stackoverflow.com/questions/29640432/generate-4-digit-random-number-using-substring/29640472
// You can get 4-digit this way .substring(startIndex, length), which would be in your case .substring(0, 4). To be able to use .substring() you will need to convert a to string by using .toString(). At the end, you can convert the resulting output into integer by using parseInt :

//  var a = Math.floor(100000 + Math.random() * 900000)
//  a = a.toString().substring(0, 4);

//  a =  parseInt(a);

//  alert(a);

