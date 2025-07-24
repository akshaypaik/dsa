// Leetcode link -> https://leetcode.com/problems/rotting-oranges/description/

const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    let queue = [];

    // step 1: add all the rotten oranges in queue

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }

    let maxMinutes = 0;

    // step 2: mark adjacent nodes as rotten and push in queue till it is not empty

    while (queue.length) {
        // console.log(grid[0]);
        // console.log(grid[1]);
        // console.log(grid[2]);
        // console.log("--------");

        let [x, y, level] = queue.shift();
        //top
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        //bottom
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        //right 
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        //left
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        maxMinutes = Math.max(level, maxMinutes);
    }

    // step 3: finally run over each element in check if any fresh is remaining 

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return maxMinutes;

};

console.log(orangesRotting(grid));
