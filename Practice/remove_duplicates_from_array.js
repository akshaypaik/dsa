const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicate = (nums) => {

    let x = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i];
        }

    }

    return x + 1;

}

console.log(removeDuplicate(nums));
