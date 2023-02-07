/* URL of this problem
 * https://leetcode.com/problems/alternating-digit-sum/description/
 *
 *
 * @param {number} n
 * @return {number}
 */

var alternateDigitSum = function (n) {
  let num = n;
  const digits = [];

  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }

  // Add a negatibve sign to digits at odd indexes of the array
  return digits.reduce((sum, curr, idx) => {
    if (idx % 2 === 1) {
      return sum + -1 * curr;
    }
    return sum + curr;
  }, 0);
};

module.exports = alternateDigitSum;
