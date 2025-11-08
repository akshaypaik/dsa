// Leetcode link -> https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
var inorderTraversal = function (root) {
    let ans = [];

    // left => root => right
    function traverse(curr) {

        if (!curr) return;
        traverse(curr.left);
        ans.push(curr.val);
        traverse(curr.right);

    }

    traverse(root);

    return ans;
};