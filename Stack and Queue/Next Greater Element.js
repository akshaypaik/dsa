// Leetcode link -> https://leetcode.com/problems/next-greater-element-i/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

    let lookupMap = new Map();
    let stack = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        console.log("lookupMap: ", lookupMap);
        console.log("stack: ", stack)
        console.log("nums2[i]: ", nums2[i])
        if (i === nums2.length - 1) {
            lookupMap.set(nums2[i], -1);
            stack.push(nums2[i]);
            continue;
        }
        if (nums2[i] < stack[stack.length - 1]) {
            lookupMap.set(nums2[i], stack[stack.length - 1]);
            stack.push(nums2[i]);
        } else {
            while (true) {
                console.log("inside while")
                console.log("stack: ", stack)
                if (stack.length === 0) {
                    lookupMap.set(nums2[i], -1);
                    stack.push(nums2[i]);
                    break;
                }
                let value = stack.pop();
                if (nums2[i] > value) {
                    continue;
                } else {
                    lookupMap.set(nums2[i], value);
                    stack.push(value);
                    break;
                }
            }
        }
    }

    let result = [];

    for (let j = 0; j < nums1.length; j++) {
        result.push(lookupMap.get(nums1[j]));
    }

    console.log("lookupMap: ", lookupMap);

    return result;

};

var nextGreaterElement = function (a1, arr) {

    let lookupMap = new Map();
    let stack = [];
    let n = arr.length;

    stack.push(arr[n - 1]);
    lookupMap.set(arr[n - 1], -1);

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        while (stack.length) {
            if (stack[stack.length - 1] < arr[i]) {
                stack.pop();
            } else {
                lookupMap.set(arr[i], stack[stack.length - 1]);
                break;
            }
        }
        if (!stack.length) {
            lookupMap.set(arr[i], -1);
        }
        stack.push(arr[i]);
    }

    let result = [];

    for (let j = 0; j < a1.length; j++) {
        result.push(lookupMap.get(a1[j]));
    }

    return result;


};