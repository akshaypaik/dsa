// Leetcode link -> https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/

const s = "successes";

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsSet = new Set(vowels);

    let vowelCount = 0;
    let consonantCount = 0;
    let lookup = {};

    for (let i = 0; i < s.length; i++) {
        if (lookup[s[i]]) {
            lookup[s[i]] = ++lookup[s[i]];
        } else {
            lookup[s[i]] = 1;
        }
    }

    console.log(lookup);


    for (let key in lookup) {
        if (vowelsSet.has(key)) {
            // vowelCount = Math.max(vowelCount, lookup[key]);
            if (lookup[key] > vowelCount) {
                vowelCount = lookup[key];
            }
        } else {
            // consonantCount = Math.max(consonantCount, lookup[key]);
            if (lookup[key] > consonantCount) {
                consonantCount = lookup[key];
            }
        }
    }

    return vowelCount + consonantCount;

};

console.log(maxFreqSum(s));
