/* URL of this problem
 * https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var findMaxK = function(nums) {
    // Sort the input nums in a descending order
    const Sorted = [...nums].sort((a, b) => b - a);

    for (let i = 0; i < Sorted.length; i++) {
        const Num = Sorted[i];

        if (Sorted.includes(Num * -1)) {
            return Num;
        }
    }
    return -1;
};

module.exports = findMaxK;