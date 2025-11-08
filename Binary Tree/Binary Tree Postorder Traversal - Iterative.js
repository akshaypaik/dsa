// Leetcode link -> https://leetcode.com/problems/binary-tree-postorder-traversal/description/

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let s1 = [root];
    let s2 = [];
    let curr = null;

    if (!root || root?.length === 0) return [];

    while (s1.length > 0) {
        curr = s1.pop();
        s2.push(curr?.val);
        curr?.left && s1.push(curr?.left);
        curr?.right && s1.push(curr?.right);
    }

    return s2.reverse();
};