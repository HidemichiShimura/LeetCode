/* URL of this problem
 * https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/
 *
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const KDistIndices = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== key) continue;

    for (let j = 0; j < nums.length; j++) {
      if (Math.abs(j - i) <= k) KDistIndices.push(j);
    }
  }

  return [...new Set(KDistIndices)];
};

module.exports = findKDistantIndices;
