const nums = [7, 1, 5, 3, 6, 4];

const findBestTime = (nums) => {

    let min = nums[0];
    let maxProfit = -Infinity;

    for (let i = 0; i < nums.length; i++) {

        min = Math.min(min, nums[i]);

        maxProfit = Math.max(maxProfit, nums[i] - min);

    }

    return maxProfit;

}

console.log(findBestTime(nums));
