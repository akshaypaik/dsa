const nums = [2, 2, 1];

// Using frequency counter
// const findSingleNumber = (nums) => {

//     const frequencyCounter = {};
//     let singleNum = null;

//     for (let i = 0; i < nums.length; i++) {
//         frequencyCounter[nums[i]] = ++frequencyCounter[nums[i]] || 1;
//     }

//     for (const key in frequencyCounter) {
//         if (frequencyCounter[key] === 1) {
//             singleNum = key;
//         }
//     }

//     return singleNum;

// }

// using mathematics - Bitwise XOR
// a (XOR) a = a
// a (XOR) a = 0
// a (XOR) b (XOR) b (XOR) a (XOR) c = c
// mdn link -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
// Bitwise XOR (^) in JS
const findSingleNumber = (nums) => {

    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }

    return xor;

}


console.log(findSingleNumber(nums));
