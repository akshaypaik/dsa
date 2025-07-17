// Leetcode link -> https://leetcode.com/problems/valid-parentheses/description/

/**
 * @param {string} s
 * @return {boolean}
 */
const pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
}
var isValid = function (str) {
    let stack = [];
    if (str[0] === ']' || str[0] === '}' || str[0] === ')') {
        return false;
    }
    if (str[str.length - 1] === '[' || str[str.length - 1] === '{' || str[str.length - 1] === '(') {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '[' || str[i] === '{' || str[i] === '(') {
            stack.push(str[i]);
        }else{
            if(str[i] !== pairs[stack.pop()]){
                return false;
            }
        }
    }
    return stack.length === 0;
};