/* URL of this problem
 * https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var dominantIndex = function (nums) {
  // Sort nums in a descending order
  const SortedNums = [...nums].sort((a, b) => b - a);

  if (SortedNums[0] / 2 >= SortedNums[1]) {
    return nums.indexOf(SortedNums[0]);
  }
  return -1;
};

module.exports = dominantIndex;
