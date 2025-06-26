// Leetcode link -> https://leetcode.com/problems/find-words-containing-character/

const words = ["abc", "bcd", "aaaa", "cbc"], x = "a";

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {

    const numbers = [];

    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] == x) {
                numbers.push(i);
                break;
            }
        }

    }

    return numbers;

};

console.log(findWordsContaining(words, x));
