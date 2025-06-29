// Leetcode link -> https://leetcode.com/problems/largest-odd-number-in-string/

const num = "239537672423884969653287101"

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {

    let n = num.length - 1;

    while (n >= 0) {
        if (Number(num[n]) % 2 === 1) {
            return num.substring(0, n + 1);
        }
        --n;
    }

    return "";

};

console.log(largestOddNumber(num));
