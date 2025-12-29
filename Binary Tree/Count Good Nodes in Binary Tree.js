// Leetcode link -> https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

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
var goodNodes = function(root) {
    let length = 0;
    function traverse(curr, maxSoFar){
        if(curr.val >= maxSoFar){
            length++;
        }
        if(!curr) return;
        curr?.left && traverse(curr?.left, Math.max(maxSoFar, curr?.left.val));
        curr?.right && traverse(curr?.right, Math.max(maxSoFar, curr?.right.val));
    }

    traverse(root, root.val);

    return length;
};