// Compare the arrays of scores
// a = Alicia
// b = Bobby
// whoever has highest number gets 1 point added to their total score


function compareTriplets(a, b) {
    let aliciaScore = 0;
    let bobbyScore = 0;

    for (let score = 0; score < a.length; score++){
        // console.log(a[score]);
        // console.log(b[score]);
        if (a[score] > b[score]){
            aliciaScore++;
        } else {
            bobbyScore++;
        }
    }
    console.log(aliciaScore);
    console.log(bobbyScore);
}


compareTriplets([1, 2, 3], [0, 2, 4]);