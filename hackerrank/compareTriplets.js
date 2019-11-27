// Compare the arrays of scores
// a = Alicia
// b = Bobby
// whoever has highest number gets 1 point added to their total score


function compareTriplets(a, b) {
    let totalScores = [0, 0]
    // [a, b]

    for (let score = 0; score < a.length; score++){
        // console.log(a[score]);
        // console.log(b[score]);
        if (a[score] > b[score]){
            totalScores[0]++;
        }

        if (b[score] > a[score]){
            totalScores[1]++;
        }
    }
    console.log(totalScores);
}


compareTriplets([1, 2, 3], [0, 2, 4]);