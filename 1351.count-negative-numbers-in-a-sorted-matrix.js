/* URL of this problem
 *  https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 *
 * @param {number[][]} grid
 * @return {number}
 */
 
var countNegatives = function(grid) {
    const negativeNums = grid.flat().filter(num => num < 0);    
    
    return negativeNums.length;
};