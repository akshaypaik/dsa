// Leetcode link -> https://leetcode.com/problems/spiral-matrix/description/
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const spiralOrder = function (matrix) {

    let result = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let srow = 0;
    let scol = 0;
    let erow = m - 1;
    let ecol = n - 1;

    while (srow <= erow && scol <= ecol) {
        //top
        for (let i = scol; i <= ecol; i++) {
            result.push(matrix[srow][i])
        }

        //right
        for (let j = srow + 1; j <= erow; j++) {
            result.push(matrix[j][ecol]);
        }

        //bottom
        for (let i = ecol - 1; i >= scol; i--) {
            if (srow === erow) {
                break;
            }
            result.push(matrix[erow][i]);
        }

        //left
        for (let j = erow - 1; j >= srow + 1; j--) {
            if (scol === ecol) {
                break;
            }
            result.push(matrix[j][scol]);
        }

        ++srow;
        ++scol;
        --ecol;
        --erow;
    }

    return result;

};