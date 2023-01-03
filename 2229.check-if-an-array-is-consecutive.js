/* URL of this problem
 * https://leetcode.com/problems/check-if-an-array-is-consecutive/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var isConsecutive = function(nums) {
    const SortedNums = [...nums].sort((a, b) => a - b);
    const RangeStart = Math.min(...nums);
    const RangeEnd = RangeStart + nums.length - 1;
    const RangeNums = [];

    for (let i = RangeStart; i <= RangeEnd; i++) {
        RangeNums.push(i);
    }

    return SortedNums.join("") === RangeNums.join("");
};

module.exports = isConsecutive;