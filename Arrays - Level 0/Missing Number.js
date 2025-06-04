const nums = [3, 0, 1];

const findMissingNum = (nums) => {

    let numLength = nums.length;
    let totalSum = numLength * (numLength + 1) / 2;
    let curSum = 0;

    for (let i = 0; i < nums.length; i++) {
        curSum += nums[i];
    }

    return totalSum - curSum;

}

console.log(findMissingNum(nums));
