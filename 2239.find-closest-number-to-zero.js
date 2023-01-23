/* URL of this problem
 * https://leetcode.com/problems/find-closest-number-to-zero/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var findClosestNumber = function (nums) {
  const AbsNums = nums.map((num) => Math.abs(num));
  const MinAbsNum = Math.min(...AbsNums);

  if (nums.includes(MinAbsNum)) {
    return MinAbsNum;
  } else {
    return MinAbsNum * -1;
  }
};

module.exports = findClosestNumber;
