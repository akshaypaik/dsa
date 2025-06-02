const n = 1432;

const reverseInteger = (num) => {

    //handling the negative case
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num = Math.abs(num);
    }

    let reverse = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        reverse = (10 * reverse) + lastDigit;
        num = Math.floor(num / 10);
    }

    // 2 to the power of 31
    let limit = 2**31;
    // let limit = Math.pow(2, 31);

    if (reverse < -limit || reverse > limit - 1) {
        return 0;
    }

    return isNegative ? -reverse : reverse;

}

console.log(reverseInteger(n));
console.log(reverseInteger(-121));