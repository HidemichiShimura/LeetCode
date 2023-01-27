/* URL of this problem
 * https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var maximumCount = function (nums) {
  const NegativeNums = nums.filter((num) => num < 0);
  const PositiveNums = nums.filter((num) => num > 0);

  return Math.max(NegativeNums.length, PositiveNums.length);
};

module.exports = maximumCount;
