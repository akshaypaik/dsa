// Leetcode link -> https://leetcode.com/problems/house-robber/description/

/**
 * @param {number[]} vals
 * @return {number}
 */
var rob = function (vals) {
    let n = vals.length;
    if (n === 1) return vals[0];
    let dp = [vals[0], Math.max(vals[0], vals[1])];
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + vals[i], dp[i - 1]);
    }
    return dp[n - 1];
};