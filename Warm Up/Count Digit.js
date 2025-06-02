const n = 680125;

const findNumberOfDigits = (num) => {
    if (num === undefined || num === null) {
        return "please provide a number to find digits";
    }

    let count = 0;

    // edge case where number is 0
    if (num === 0) {
        return 1;
    }

    // handling negative numbers
    num = Math.abs(num);

    // while (Math.floor(num / 10) != 0) {  // my condition without checking the solution
    while (Math.floor(num) > 0) {
        count++;
        num = num / 10;
    }

    return count;

};

console.log(findNumberOfDigits(n));
console.log(findNumberOfDigits());
console.log(findNumberOfDigits(0));
console.log(findNumberOfDigits(-25));