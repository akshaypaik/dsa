// Leetcode link -> https://leetcode.com/problems/binary-tree-right-side-view/

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
var rightSideView = function (root) {
    if (!root) return [];
    let queue = [root];
    let ans = [];
    while (queue.length) {
        let levelSize = queue.length;
        let levelArr = [];
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            levelArr.push(curr?.val);
            curr?.left && queue.push(curr?.left);
            curr?.right && queue.push(curr?.right);
        }
        ans.push(levelArr[levelArr.length - 1]);
    }
    return ans;
};