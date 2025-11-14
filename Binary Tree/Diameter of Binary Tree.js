// Leetcode link -> https://leetcode.com/problems/diameter-of-binary-tree/description/

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
var diameterOfBinaryTree = function (root) {
    let maxDiameter = 0;
    function traverse(curr) {
        if (!curr) return 0;
        let leftSubTree = traverse(curr.left);
        let rightSubTree = traverse(curr.right);
        let currDiameter = leftSubTree + rightSubTree;
        maxDiameter = Math.max(currDiameter, maxDiameter)
        return 1 + Math.max(leftSubTree, rightSubTree);
    }
    traverse(root);
    return maxDiameter;
};