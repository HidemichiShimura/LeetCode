/* URL of this problem
 * https://leetcode.com/problems/shift-2d-grid/description/
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function(grid, k) {
    const Row = grid.length;
    const Column = grid[0].length;
    const FlatGrid = grid.flat();
    const ShiftedGrid = [];

    // Execute the shift operations
    for (let i = 0; i < k; i++) {
        FlatGrid.unshift(FlatGrid.pop());
    }
    // Create a 2D array after all the shift operations
    for (let i = 0; i < Row; i++) {
        const CurrRow = FlatGrid.splice(0, Column);
        
        ShiftedGrid.push(CurrRow);
    }

    return ShiftedGrid;
};

module.exports = shiftGrid;