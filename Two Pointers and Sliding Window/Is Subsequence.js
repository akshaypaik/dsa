// Leetcode link -> https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let i = 0;
    let j = 0;

    while (j < t.length) {

        if(s[i] === t[j]){
            i++;
            j++;
        }else{
            j++;
        }

    }

    return i === s.length;

};