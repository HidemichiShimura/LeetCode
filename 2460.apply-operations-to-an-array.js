/* URL of this problem
 * https://leetcode.com/problems/apply-operations-to-an-array/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */

var applyOperations = function(nums) {
    const appliedNums = [...nums];
    let nonZeroes;
    let zeroes;

    for (let i = 0; i < appliedNums.length - 1; i++) {
        if (appliedNums[i] === appliedNums[i + 1]) {
            appliedNums[i] = appliedNums[i] * 2;
            appliedNums[i + 1] = 0;
        }
    }

    // Extract non zero numbers and zeroes from appliedNums
    nonZeroes = appliedNums.filter(num => num !== 0);
    zeroes = appliedNums.filter(num => num === 0);

    return nonZeroes.concat(zeroes);
};

module.exports = applyOperations;