// Leetcode link -> https://leetcode.com/problems/reverse-string-ii/description/

const s = "abcdefg", k = 2;

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {

    let arr = s.split('');
    let n = arr.length;

    for (let x = 0; x < n; x = x + (2 * k)) {

        const mid = Math.floor(k / 2);

        for (let i = 0; i < mid; i++) {
            [arr[x + i], arr[x + k - i - 1]] = [arr[x + k - i - 1], arr[x + i]];
        }

    }

    return arr.join('');

};

console.log(reverseStr(s, k));
