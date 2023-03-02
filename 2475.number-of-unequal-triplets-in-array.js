/* URL of this problem
 * https://leetcode.com/problems/number-of-unequal-triplets-in-array/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let tripletCount = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] === nums[k] || nums[i] === nums[k]) continue;

        tripletCount++;
      }
    }
  }

  return tripletCount;
};

module.exports = unequalTriplets;
