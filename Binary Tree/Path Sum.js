// Leetcode link -> https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// Top down approach
var hasPathSum = function (root, targetSum) {
    function traverse(curr, sum) {
        if (!curr?.left && !curr?.right) {
            return sum + curr?.val === targetSum;
        }
        const leftRes = traverse(curr?.left, sum + curr?.val);
        const rightRes = traverse(curr?.right, sum + curr?.val);
        return leftRes || rightRes;
    }
    const result = traverse(root, 0);
    return result;
};

// Bottom up approach
var hasPathSum = function (root, targetSum) {
    function traverse(curr, targetSum) {
        if (!curr?.left && !curr?.right) {
            return targetSum - curr?.val === 0;
        }
        const leftRes = traverse(curr?.left, targetSum - curr?.val);
        const rightRes = traverse(curr?.right, targetSum - curr?.val);
        return leftRes || rightRes;
    }
    const result = traverse(root, targetSum);
    return result;
};