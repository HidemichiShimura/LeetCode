/* URL of this problem
 * https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  const PerformedNums = [...nums];
  const MaxNumIdx = PerformedNums.indexOf(Math.max(...PerformedNums));
  let maxScore = 0;

  for (let i = 0; i < k; i++) {
    const MaxNum = PerformedNums[MaxNumIdx];

    maxScore += MaxNum;
    PerformedNums[MaxNumIdx] += 1;
  }

  return maxScore;
};

module.exports = maximizeSum;
