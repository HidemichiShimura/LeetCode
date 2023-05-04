/* URL of this problem
 * https://leetcode.com/problems/find-the-middle-index-in-array/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let middleIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    const LeftSum =
      i === 0 ? 0 : nums.slice(0, i).reduce((sum, curr) => sum + curr);
    const RightSum =
      i === nums.length - 1
        ? 0
        : nums.slice(i + 1).reduce((sum, curr) => sum + curr);

    if (LeftSum === RightSum) {
      middleIndex = i;
      break;
    }
  }

  return middleIndex;
};

module.exports = findMiddleIndex;
