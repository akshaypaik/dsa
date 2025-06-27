// Leetcode link -> https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

const s = "RLRRLLRLRL";

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {

    let countLookup = {
        R: 0,
        L: 0
    }

    let count = 0;

    for (let i = 0; i < s.length; i++) {

        ++countLookup[s[i]];

        if (countLookup.R === countLookup.L) {
            countLookup.R = 0;
            countLookup.L = 0;
            ++count;
        }

    }

    return count;

};

console.log(balancedStringSplit(s));
