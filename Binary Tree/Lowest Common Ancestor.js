// Leetcode link -> https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let lca = null;
    function traverse(curr) {
        let count = 0;
        if (!curr) return 0;
        let leftTree = traverse(curr?.left);
        let rightTree = traverse(curr?.right);
        if (curr?.val === p.val || curr.val === q.val) {
            ++count;
        }
        count = count + leftTree + rightTree;
        if (count === 2 && !lca) {
            lca = curr;
        }
        return count;
    }
    traverse(root);
    return lca;
};