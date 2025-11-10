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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let ans = [];
    while (queue.length > 0) {
        let levelArr = [];
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            levelArr.push(curr?.val);
            curr?.left && queue.push(curr.left);
            curr?.right && queue.push(curr.right);
        }
        ans.push(levelArr);
    }
    return ans;
};