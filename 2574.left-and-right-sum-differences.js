/* URL of this problem
 * https://leetcode.com/problems/left-and-right-sum-differences/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const Answer = [];

  for (let i = 0; i < nums.length; i++) {
    const LeftSum = nums.slice(0, i).reduce((sum, curr) => sum + curr, 0);
    const RightSum = nums.slice(i + 1).reduce((sum, curr) => sum + curr, 0);
    const Diff = Math.abs(LeftSum - RightSum);

    Answer.push(Diff);
  }

  return Answer;
};

module.exports = leftRigthDifference;
