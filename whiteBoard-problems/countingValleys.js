// count from 0
// if steps == D then subtract 1
// if steps == U then add 1

function countingValleys(n, s) {
    let hike = 0;
    let valleys = 0;
    // CONST D = -1;
    // CONST U = 1;

    for (let steps = 0; steps < s.length; steps++) {
        if (s[steps] == 'D') {
            hike--;
        }

        if (s[steps] == 'U') {
            hike++;
        }

        if (hike === 0 && s[steps] == 'U') {
            valleys++
        }
    }
    return valleys;
}

countingValleys(8, "UDDDUDUU");


// https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=internal-search