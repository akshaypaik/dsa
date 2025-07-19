// Leetcode link -> https://leetcode.com/problems/remove-outermost-parentheses/description/

const s = "(()())(())(()(()))";

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [];
    let result = "";
    for(let i=0;i<s.length;i++){
        if(s[i] === '('){
            stack.push(s[i]);
            if(stack.length > 1){
                result = result + s[i];
            }
        }else if(s[i] === ')'){
            if(stack.length > 1){
                result = result + s[i];
            }
            stack.pop();
        }
    }
    return result;
};

console.log(removeOuterParentheses(s)); // "()()()()(())"


