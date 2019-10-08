// count from 0
// if steps == D then subtract 1
// if steps == U then add 1

function countingValleys(n, s) {
    let hike = 0;
    // CONST D = -1;
    // CONST U = 1;

    for (let steps = 0; steps < s.length; steps++) {
        if (s[steps] === 'D') {
            hike--;
        } else if (s[steps] === 'U') {
            hike++;
        } else {
            break;
        }
    }
    console.log(hike);
}



// https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=internal-search