// Leetcode link -> https://leetcode.com/problems/subtree-of-another-tree/description/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    const hashRoot = serialize(root);
    const hashSubRoot = serialize(subRoot);
    console.log("hashRoot: ", hashRoot);
    console.log("hashSubRoot: ", hashSubRoot);
    return hashRoot.includes(hashSubRoot);
};

// representing tree with an unique string
const serialize = (root) => {
    let hash = "";
    function traverse(curr) {
        if (!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val;
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return hash;
}