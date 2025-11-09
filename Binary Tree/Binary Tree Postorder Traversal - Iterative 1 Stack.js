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
    let stack = [];
    let ans = [];
    let curr = root;
    let lastVisitedNode = null;
    while(stack.length || curr){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        const peekNode = stack[stack.length-1];
        if(peekNode?.right && peekNode.right != lastVisitedNode){
            curr = peekNode.right;
        }else{
            ans.push(peekNode.val);
            lastVisitedNode = stack.pop();
        }
    }
    return ans;
};