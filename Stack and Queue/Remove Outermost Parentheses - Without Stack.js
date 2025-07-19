// Leetcode link -> https://leetcode.com/problems/remove-outermost-parentheses/description/

const s = "(()())(())(()(()))";

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level = 0;
    let result = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            ++level;
            if(level > 1){
                result = result + s[i];
            }
        }else if(s[i] === ')'){
            if(level > 1){
                result = result + s[i];
            }
            --level;
        }
    }
    return result;
};

console.log(removeOuterParentheses(s)); // "()()()()(())"


