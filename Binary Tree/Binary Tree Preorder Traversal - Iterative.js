// Leetcode link -> https://leetcode.com/problems/binary-tree-preorder-traversal/description/

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
var preorderTraversal = function (root) {

    let result = [];
    let stack = [];
    stack.push(root);

    while (stack.length > 0) {
        let curr = stack.pop();
        curr?.val != undefined && result.push(curr?.val);
        curr?.right != undefined && stack.push(curr.right);
        curr?.left != undefined && stack.push(curr.left);
    }

    return result;

};