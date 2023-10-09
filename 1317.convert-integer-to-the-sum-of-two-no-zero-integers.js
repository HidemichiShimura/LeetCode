/* URL of this problem
 * https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/description/
 *
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      const Sum = i + j;

      if (i.toString().includes("0") || j.toString().includes("0")) continue;
      if (Sum === n) return [i, j];
    }
  }
};

module.exports = getNoZeroIntegers;
