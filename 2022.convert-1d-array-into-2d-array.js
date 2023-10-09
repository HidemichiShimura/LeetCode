/* URL of this problem
 * https://leetcode.com/problems/convert-1d-array-into-2d-array/description/
 *
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */

var construct2DArray = function (original, m, n) {
  const TwoDimensionalArr = [];

  if (m * n !== original.length) return [];

  for (let i = 0; i < original.length; i += n) {
    TwoDimensionalArr.push(original.slice(i, i + n));
  }

  return TwoDimensionalArr;
};

module.exports = construct2DArray;
