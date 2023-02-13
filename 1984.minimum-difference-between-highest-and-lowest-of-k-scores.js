/* URL of this problem
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minimumDifference = function (nums, k) {
  const SortedNums = [...nums].sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; i <= SortedNums.length - k; i++) {
    const NumsPicked = SortedNums.slice(i, i + k);
    const HighestScore = Math.max(...NumsPicked);
    const LowestScore = Math.min(...NumsPicked);
    const Diff = HighestScore - LowestScore;

    minDiff = Math.min(minDiff, Diff);
  }

  return minDiff;
};

module.exports = minimumDifference;
