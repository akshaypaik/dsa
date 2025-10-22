// Leetcode link -> https://leetcode.com/problems/sliding-window-maximum/description/

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

const maxSlidingWindow = function (arr, k) {

    let result = [];
    let queue = [];

    let left = 0;
    let right = 0;

    while (right < arr.length) {
        while (queue.length && arr[right] > queue[queue.length - 1]) {
            queue.pop();
        }
        queue.push(arr[right]);

        if (right >= k - 1) {
            result.push(queue[0]);
            // if the leftmost element of current window (arr[i]) is equal to largest element (queue[0]) then remove it
            if (arr[left] === queue[0]) {
                queue.shift();
            }
            ++left;
        }

        ++right;
    }

    return result;


};