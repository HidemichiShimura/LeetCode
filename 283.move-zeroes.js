/* URL of this problem
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] === 0) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;

  /* Another solution that prevents side effects */

  // const NonZeros = nums.filter(num => num !== 0);
  // const Zeros = nums.filter(num => num === 0);

  // return NonZeros.concat(Zeros);
};

module.exports = moveZeroes;
