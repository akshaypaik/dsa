// Leetcode link -> https://leetcode.com/problems/trapping-rain-water/description/

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

    let n = height.length;
    let maxLeft = [];
    let maxLeftNumber = 0;
    let maxRight = [];
    let maxRightNumber = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        maxLeftNumber = Math.max(height[i], maxLeftNumber);
        maxLeft.push(maxLeftNumber);
        maxRightNumber = Math.max(height[n-i-1], maxRightNumber);
        maxRight[n-i-1] = maxRightNumber;
    }
    console.log("maxLeft: ", maxLeft);

    // This is fine as well but we can calculate this value in above loop as well
    // for (let i = height.length - 1; i >= 0; i--) {
    //     maxRightNumber = Math.max(height[i], maxRightNumber);
    //     maxRight[i] = maxRightNumber;
    // }
    console.log("maxRight: ", maxRight);

    for (let i = 0; i < n; i++) {
        result = result + (Math.min(maxLeft[i], maxRight[i]) - height[i]);
    }

    return result;

};

console.log(trap(height));
