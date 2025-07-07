// Leetcode link -> https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const haystack = "sadbutsad";
const needle = "sad"

var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === m) {
            return i;
        }

    }

    return -1;
};