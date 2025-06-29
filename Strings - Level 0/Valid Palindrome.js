// Leetcode link -> https://leetcode.com/problems/valid-palindrome/description/

const s = "A man, a plan, a canal: Panama";

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {

    s = s.toLowerCase();
    let filteredStr = "";
    let reverseFilteredStr = "";
    for (let i = 0; i < s.length; i++) {

        // If you donot want to use regex expression to check for alphanumeric characters
        if ((s[i].charCodeAt() >= 'a'.charCodeAt() && s[i].charCodeAt() <= 'z'.charCodeAt()) ||
            s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt()){
            // Regex expression to check alphanumeric characters
            // if (s[i].match(/[a-z0-9]/i)) {
                filteredStr = filteredStr + s[i];
                reverseFilteredStr = s[i] + reverseFilteredStr;
            }

    }

    return filteredStr === reverseFilteredStr;

};

console.log(isPalindrome(s));
