/* URL of this problem
 * https://leetcode.com/problems/binary-search/description/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let idx = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      idx = i;
      break;
    }
  }

  return idx;
};

module.exports = search;
