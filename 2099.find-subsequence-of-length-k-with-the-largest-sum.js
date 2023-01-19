/* URL of this problem
 * https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSubsequence = function (nums, k) {
  const NumsCopy = [...nums];

  // Remove minimum numbers from NumsCopy until the length of NumsCopy reaches k
  for (let i = 0; i < nums.length - k; i++) {
    const MinNum = Math.min(...NumsCopy);

    NumsCopy.splice(NumsCopy.indexOf(MinNum), 1);
  }

  return NumsCopy;
};

module.exports = maxSubsequence;
