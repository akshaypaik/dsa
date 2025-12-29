// Leetcode link -> https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    function traverse(curr, rightNode){
        if(!curr) return;

        if(!rightNode){
            curr.next = null;
        }else{
            curr.next = rightNode
        }

        traverse(curr?.left, curr?.right);
        traverse(curr?.right, curr?.next?.left);
    }

    traverse(root, null);
    return root;
};