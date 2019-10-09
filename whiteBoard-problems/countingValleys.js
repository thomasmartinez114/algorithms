// count from 0
// if steps == D then subtract 1
// if steps == U then add 1

function countingValleys(n, s) {
    let hike = 0;
    // CONST D = -1;
    // CONST U = 1;

    for (let steps = 0; steps < s.length; steps++) {
        if (s[steps] == 'D') {
            hike--;
            console.log('Down');
        } else if (s[steps] == 'U') {
            hike++;
            console.log('Up');
        } else {
            break;
        }
        console.log(`Hike steps ${hike}`);
    }
    console.log(hike);
    return hike;
}

countingValleys(12, "DDUUDDUDUUUD");


// https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=internal-search