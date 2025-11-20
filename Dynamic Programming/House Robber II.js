// Leetcode link -> https://leetcode.com/problems/house-robber-ii/description/

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    let n = nums.length;
    if (n === 1) return nums[0];

    function robHelper(start, end) {

        let p1 = 0;
        let p2 = 0;
        for (let i = start; i < end; i++) {
            let curr = Math.max(nums[i] + p2, p1);
            [p1, p2] = [curr, p1];
        }

        return p1;
    }

    return Math.max(robHelper(0, n-1), robHelper(1, n));

};