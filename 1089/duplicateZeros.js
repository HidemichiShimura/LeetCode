/* URL of this problem
 * https://leetcode.com/problems/duplicate-zeros/description/
 *
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let idx = 0;

  while (idx < arr.length) {
    if (arr[idx] === 0) {
      arr.splice(idx, 0, 0);
      arr.pop();
      idx += 2;
    } else {
      idx++;
    }
  }
};

module.exports = duplicateZeros;
