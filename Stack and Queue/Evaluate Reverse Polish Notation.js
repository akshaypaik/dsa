// Leetcode link -> https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
//My Solution
// var evalRPN = function(tokens) {
//     const operators = ["+", "-", "*", "/"];
//     let stack = [];

//     for(let i=0;i<tokens.length;i++){
//         if(!operators.includes(tokens[i])){
//             stack.push(Number(tokens[i]));
//             console.log("stack: ", stack);
//         }else{
//             let result;
//             if(tokens[i] === "+"){
//                 result = stack.pop() + stack.pop();
//                 stack.push(result);
//                 console.log("stack + : ", stack);
//             }else if(tokens[i] === "-"){
//                 const firstNum = stack.pop();
//                 const secondNum = stack.pop();
//                 result = secondNum-firstNum;
//                 stack.push(result);
//                 console.log("stack -: ", stack);
//             }else if(tokens[i] === "*"){
//                 result = stack.pop() * stack.pop();
//                 stack.push(result);
//                 console.log("stack *: ", stack);
//             } else if(tokens[i] === "/"){
//                 const firstNum = stack.pop();
//                 const secondNum = stack.pop();
//                 console.log("firstNum: ", firstNum);
//                 console.log("secondNum: ", secondNum);
//                 result = secondNum/firstNum;
//                 result = result > 0 ? Math.floor(result) : Math.ceil(result);
//                 stack.push(result);
//                 console.log("stack /: ", stack);
//             }

//         }
//     }
//     console.log("stack end: ", stack);
//     return Number(stack[stack.length-1]);
// };


// Using JS eval method
var evalRPN = function (tokens) {
    const operators = ["+", "-", "*", "/"];
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        if (!operators.includes(tokens[i])) {
            stack.push(tokens[i]);
        } else {
            let a = stack.pop();
            let b = stack.pop();
            let result = eval(a + tokens[i] + b);
            result = result > 0 ? Math.floor(result) : Math.ceil(result);
            stack.push(result);
        }
    }

    return stack.pop();
}

// Using our own calculate method (beats all solution)
var evalRPN = function(tokens) {
    const operators = ["+", "-", "*", "/"];
    let stack = [];

    const calculate = {
        "+": (a,b) => b+a,
        "-": (a,b) => b-a,
        "*": (a,b) => b*a,
        "/": (a,b) => Math.trunc(b/a),
    }

    for (let i = 0; i < tokens.length; i++) {
        if (!calculate[tokens[i]]) {
            stack.push(tokens[i]);
        } else {
            let a = stack.pop();
            let b = stack.pop();
            // let result = eval(`${b} ${tokens[i]} ${a}`);
            let result = calculate[tokens[i]](Number(a),Number(b));
            stack.push(result);
        }
    }

    return Number(stack.pop());
    
};