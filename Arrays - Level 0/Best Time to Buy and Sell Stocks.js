const nums = [7, 1, 5, 3, 6, 4];

const bestTimeToBuySellStocks = (nums) => {

    let min = nums[0];
    let maxProfit = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        // my solution
        // min = Math.min(min, nums[i]);
        // const value = nums[i] - min;
        // maxProfit = Math.max(maxProfit, value);

        if (nums[i] - min > maxProfit) {
            maxProfit = nums[i] - min;
        }
        if (nums[i] < min) {
            min = nums[i];
        }

    }

    return maxProfit;


}

console.log(bestTimeToBuySellStocks(nums));
