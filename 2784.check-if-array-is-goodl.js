/* URL of this problem
 * https://leetcode.com/problems/check-if-array-is-good/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const SortedNums = [...nums].sort((a, b) => a - b);
  const Len = nums.length;
  const MaxNum = Math.max(...nums);

  if (Len !== MaxNum + 1) return false;

  for (let i = 1; i < Len; i++) {
    if (SortedNums[i - 1] !== i) return false;
  }
  return SortedNums[Len - 1] === MaxNum;
};

module.exports = isGood;
