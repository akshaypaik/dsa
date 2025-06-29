// Leetcode link -> https://leetcode.com/problems/valid-palindrome/description/

const s = "A man, a plan, a canal: Panama";

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {

    s = s.toLowerCase();

    let i = 0;
    let x = s.length - 1;
    while (i < x) {

        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        } else if (!s[x].match(/[a-z0-9]/i)) {
            --x;
        } else if (s[i] === s[x]) {
            ++i;
            --x;
        } else {
            return false;
        }

    }

    return true;

};

console.log(isPalindrome(s));
