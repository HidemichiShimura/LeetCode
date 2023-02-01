/* URL of this problem
 * https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var check = function (nums) {
  const Rotated = [...nums];
  const Sorted = [...nums].sort((a, b) => a - b);

  // Rotate nums nums's length times to check if nums can be in a non-decreasing order
  for (let i = 0; i < Rotated.length; i++) {
    if (`${Rotated}` === `${Sorted}`) return true;

    Rotated.unshift(Rotated.pop());
  }
  return false;
};

module.exports = check;
