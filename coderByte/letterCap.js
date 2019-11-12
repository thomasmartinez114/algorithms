function LetterCapitalize(str) {

    // code goes here  
    // let lowerCase = str.toLowerCase();
    // let words = lowerCase.split(' ');
    // console.log(words);

    // let captilized = [];

    // for (var i = 0; i < words.length; i++) {
    //   cap = words[i][0].toUpperCase() + words[i].slice(1);
    //   console.log(cap);
    //   captilized.push(cap);
    // }
    // let final = captilized.join(' ');
    // console.log(final);
    // return final; 

    wordarr = str.split(" ");
    console.log(wordarr);

    for (var i = 0, n = wordarr.length; i < n; i++) {
        wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1);
    }
    str = wordarr.join(" ");

    return str;

}

// keep this function call here 
console.log(LetterCapitalize(readline()));

// Time: 23:00
// Grade: 3