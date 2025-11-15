// Leetcode link -> https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const root = [3, 9, 20, null, null, 15, 7];

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let queue = [root];
    let count = 0;
    while (queue.length) {
        ++count;
        let levelArray = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const curr = queue.shift();
            levelArray.push(curr?.val);
            curr?.left && queue.push(curr?.left);
            curr?.right && queue.push(curr?.right);
        }
        levelArray = count % 2 === 0 ? levelArray.reverse() : levelArray;
        ans.push(levelArray);
    }
    return ans;
};

console.log(zigzagLevelOrder(root));