// Leetcode problem link -> https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// sorted, increasing order     a[i+1] > a[i]
// [1,2,4,8,12]

// sorted, decresing order      a[i+1] < a[i]
// [12,9,8,7,5,1]

// sorted, non decresing order  (can have duplicates)   a[i+1] >= a[i]
// [1,2,3,3,3,4,4,5,8,9]

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];


const removeDuplicates = (nums) => {

    let x = 0;

    for (let i = 1; i < nums.length; i++) {
        // my logic
        // if (nums[i] != nums[i - 1]) {
        //     nums[x + 1] = nums[i];
        //     x++;
        // }
        if (nums[i] > nums[x]) {
            x += 1;
            nums[x] = nums[i];
        }
    }

    // return nums.slice(0, x + 1);
    return x + 1;
}

console.log(removeDuplicates(nums));

