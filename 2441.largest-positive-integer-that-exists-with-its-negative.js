/* URL of this problem
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var findMaxK = function(nums) {
    const Sorted = [...nums].sort((a, b) => b - a);

    for (let i = 0; i < Sorted.length; i++) {
        if (Sorted.includes(-1 * Sorted[i])) {
            return Sorted[i];
        }
    }
    return -1;
};

module.exports = findMaxK;