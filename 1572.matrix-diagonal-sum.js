/* URL of this problem
    https://leetcode.com/problems/matrix-diagonal-sum/
*/

/*
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function(mat) {
    let sum = 0;
    
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
    }
        
    let startIndex = mat.length - 1;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][startIndex];
        startIndex--;
    }
        
    const index = Math.floor(mat.length / 2);
    if (mat.length % 2 !== 0) {
        const overlapElement = mat[index][index];
        sum -= overlapElement;
    }
    
    return sum;
};