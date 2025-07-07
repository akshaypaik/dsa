// Leetcode link -> https://leetcode.com/problems/container-with-most-water/description/

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

/**
 * @param {number[]} arr
 * @return {number}
 */
const maxArea = function (arr) {

    let i = 0;
    let j = arr.length - 1;
    let maxAreaValue = 0;

    while (i < j) {
        const area = Math.min(arr[i], arr[j]) * (j - i);
        maxAreaValue = Math.max(area, maxAreaValue);

        if (arr[i] < arr[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxAreaValue;

};