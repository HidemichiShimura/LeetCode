/* URL of this problem
 * https://leetcode.com/problems/delete-columns-to-make-sorted/
 *
 * @param {string[]} strs
 * @return {number}
 */
 
var minDeletionSize = function(strs) {
    const totalColumn = strs[0].length;
    const totalRow = strs.length;
    let columnToDeletCount = 0;
    
    for (let column = 0; column < totalColumn; column++) {
        for (let row = 0; row < totalRow - 1; row++) {
            if (strs[row].charAt(column) > strs[row + 1].charAt(column)) {
                columnToDeletCount++;
                break;
            }
        }
    }
    
    return columnToDeletCount;
};

module.exports = minDeletionSize;