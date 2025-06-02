const s = ["h", "e", "l", "l", "o"];

// my solution
// const reverseString = (s) => {

//     let x = 0;
//     for (let i = s.length - 1; i >= x; i--) {
//         if (x === i) {
//             break;
//         }

//         [s[i], s[x]] = [s[x], s[i]];
//         // let temp = s[i];
//         // s[i] = s[x];
//         // s[x] = temp;
//         x++;
//     }

//     return s;

// }

const reverseString = (s) => {

    let n = s.length;
    for (let i = 0; i < Math.floor(n/2); i++) {
        [s[i], s[n-1-i]] = [s[n-1-i], s[i]];
    }

    return s;

}

console.log(reverseString(s));
