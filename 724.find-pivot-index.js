/* URL of this problem
 * https://leetcode.com/problems/find-pivot-index/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const Left = nums.slice(0, i);
    const Right = nums.slice(i + 1);
    const LeftSum = Left.reduce((sum, curr) => sum + curr, 0);
    const RightSum = Right.reduce((sum, curr) => sum + curr, 0);

    if (LeftSum === RightSum) return i;
  }
  return -1;
};

module.exports = pivotIndex;
