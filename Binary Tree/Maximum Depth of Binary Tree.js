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
 * @return {number}
 */

// Top down approach
var maxDepth = function (root) {
    let maxDepth = 0;
    function traverse(curr, depth) {
        if (!curr) return;
        maxDepth = Math.max(maxDepth, depth)
        traverse(curr?.left, depth + 1);
        traverse(curr?.right, depth + 1);
    }
    traverse(root, 1);
    return maxDepth;
};

// Bottom up approach
var maxDepth = function (root) {
    function traverse(curr) {
        if (!curr) return 0;
        let leftMax = traverse(curr?.left);
        let rightMax = traverse(curr?.right);
        return 1 + Math.max(leftMax, rightMax);
    }
    const result = traverse(root);
    return result;
};