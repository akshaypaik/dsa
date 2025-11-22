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

// OR

var rightSideView = function (root) {
    if (!root) return [];
    let queue = [root];
    let ans = [];
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = queue.shift();
            i == 0 && ans.push(curr?.val);
            curr?.right && queue.push(curr?.right);
            curr?.left && queue.push(curr?.left);
        }
    }
    return ans;
};

// Recursive solution
var rightSideView = function (root) {
    if (!root) return [];
    let ans = [];
    function traverse(curr, level) {
        if (curr?.val === undefined) return;
        if (ans[level] === undefined) ans[level] = curr.val;
        traverse(curr.right, level + 1);
        traverse(curr.left, level + 1);
    }
    traverse(root, 0);
    return ans;
};