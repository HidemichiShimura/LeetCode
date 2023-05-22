/* URL of this problem
 * https://leetcode.com/problems/sort-even-and-odd-indices-independently/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function (nums) {
  const NumsAtOddIdx = nums
    .filter((num, idx) => idx % 2 === 1)
    .sort((a, b) => b - a);
  const NumsAtEvenIdx = nums
    .filter((num, idx) => idx % 2 === 0)
    .sort((a, b) => a - b);
  const RearrangedNums = [];

  for (let i = 0; i < NumsAtEvenIdx.length; i++) {
    NumsAtEvenIdx[i] && RearrangedNums.push(NumsAtEvenIdx[i]);
    NumsAtOddIdx[i] && RearrangedNums.push(NumsAtOddIdx[i]);
  }

  return RearrangedNums;
};

module.exports = sortEvenOdd;
