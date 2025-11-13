// Leetcode link -> https://leetcode.com/problems/symmetric-tree/description/

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let queue = [root.left, root.right];
    while (queue.length) {
        let p1 = queue.shift();
        let p2 = queue.shift();
        if (!p1 && !p2) continue;
        if (p1?.val != p2?.val) {
            return false;
        }
        queue.push(p1.left, p2.right);
        queue.push(p1.right, p2.left);
    }
    return true;
};