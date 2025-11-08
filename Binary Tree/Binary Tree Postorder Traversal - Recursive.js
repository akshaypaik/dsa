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
var postorderTraversal = function(root) {
    let result = [];
    
    // left => right => root
    function traverse(curr){
        if(!curr) return;
        traverse(curr.left);
        traverse(curr.right);
        result.push(curr.val);
    }

    traverse(root);

    return result;
};