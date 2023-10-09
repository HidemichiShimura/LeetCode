/* URL of this problem
 * https://leetcode.com/problems/sum-of-squares-of-special-elements/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
  const NumsLen = nums.length;
  const SpecialNums = [...nums].filter((num, idx) => NumsLen % (idx + 1) === 0);

  return SpecialNums.reduce((accum, curr) => accum + curr ** 2, 0);
};

module.exports = sumOfSquares;
