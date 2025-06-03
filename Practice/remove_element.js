const nums = [3, 1, 5, 4, 3, 4, 8, 3];

const removeElements = (nums, val) => {

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != val){
            nums[x] = nums[i];
            x++;
        }
    }

    return x;

}

console.log(removeElements(nums, 3));
