const nums = [1, 1, 0, 1, 1, 1];

const maxConsecutiveOnes = (nums) => {

    let maxCount = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }

    }

    maxCount = Math.max(maxCount, count);

    return maxCount;

}

console.log(maxConsecutiveOnes(nums));
