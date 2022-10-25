/* URL of this problem
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 *
 * @param {number[]} position
 * @return {number}
 */
 
var minCostToMoveChips = function(position) {
    const chipsAtOddIndices = position.filter(num => num % 2 === 1);
    const chipsAtEvenIndices = position.filter(num => num % 2 === 0);
    
    return Math.min(chipsAtOddIndices.length, chipsAtEvenIndices.length);
};

module.exports = minCostToMoveChips;