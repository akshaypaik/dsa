// Leetcode link -> https://leetcode.com/problems/next-greater-element-ii/description/

// const nums = [1, 2, 3, 4, 3];
const nums = [1, 5, 0, 3, 4, 9, 2, 6, 8];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    let copyNums = [...nums, ...nums];
    let n = copyNums.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    stack.push(copyNums[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > copyNums[i]) {
                result[i] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(copyNums[i]);
    }

    return result.slice(0, n / 2);

};

console.log(nextGreaterElements(nums));


// Without coping array -> playing with indexes 
var nextGreaterElements = function (nums) {

    let n = nums.length;
    let result = new Array(n).fill(-1);
    let stack = [];

    stack.push(nums[n - 1]);

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (top > nums[i % n]) {
                result[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(nums[i % n]);
    }

    return result.slice(0, n);

};
