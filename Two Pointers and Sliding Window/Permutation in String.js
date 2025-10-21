// Leetcode link -> https://leetcode.com/problems/permutation-in-string/description/

const s1 = "ab";
const s2 = "eidbaooo";

const checkInclusion = function (s1, s2) {
    let hashPermutation = new Array(26).fill(0);
    let hashWindow = new Array(26).fill(0);
    let permutationLength = s1.length;

    for (let i = 0; i < permutationLength; i++) {
        ++hashPermutation[s1.charCodeAt(i) - 97];
        ++hashWindow[s2.charCodeAt(i) - 97];
    }

    let left = 0;
    let right = permutationLength - 1;
    while (right < s2.length) {
        if (isHashSame(hashPermutation, hashWindow)) {
            return true;
        } else {
            --hashWindow[s2.charCodeAt(left) - 97];
            ++left;
            ++right;
            ++hashWindow[s2.charCodeAt(right) - 97];
        }
    }
    return false;
};

const isHashSame = (hashP, hashW) => {
    for (let i = 0; i < 26; i++) {
        if (hashP[i] !== hashW[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkInclusion(s1, s2));