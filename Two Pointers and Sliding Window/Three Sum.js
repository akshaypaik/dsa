/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {

    let res = [];
    nums.sort((a, b) => a - b);
    let n = nums.length;

    for (let i = 0; i < n; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1, k = n - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
            }
        }


    }

    return res;


};

console.log(threeSum(nums));
