const s = ["h", "e", "l", "l", "o"];

const reverseString = (s) => {

    let n = s.length;
    let halfLoop = Math.floor(n / 2);

    // for (let i = 0; i < halfLoop; i++) {
    //     [s[i], s[halfLoop - 1 - i]] = [s[halfLoop - 1 - i], s[i]]
    // }

    let x = 0;

    for (let i = n - 1; i >= x; i--) {
        if (x === i) {
            break;
        }
        [s[i], s[x]] = [s[x], s[i]];
        x++;
    }

    return s;

}

console.log(reverseString(s));
