// Leetcode link -> https://leetcode.com/problems/daily-temperatures/description/

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

   let stack = [];
    let n = temperatures.length;
    let result = new Array(n).fill(0);

    stack.push(n - 1);

    console.log("initial result: ", result);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            if (temperatures[stack[stack.length - 1]] > temperatures[i]) {
                result[i] = stack[stack.length - 1] - i;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(i);
    }
    console.log("final result: ", result);
    return result;


};

console.log(dailyTemperatures(temperatures));
