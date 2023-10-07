/* URL of this problem
 * https://leetcode.com/problems/missing-number-in-arithmetic-progression/description/
 *
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function (arr) {
  let val = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    const CurrVal = arr[i + 1] - arr[i];

    val = Math.abs(val) < Math.abs(CurrVal) ? val : CurrVal;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + val !== arr[i + 1]) {
      return arr[i] + val;
    }
  }
  return arr[0];
};

module.exports = missingNumber;
