/* URL of this problem
 * https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/
 *
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  const Digits = [...num.toString()];
  let divisingDigit = 0;

  for (let i = 0; i < Digits.length; i++) {
    if (num % Digits[i] === 0) divisingDigit++;
  }

  return divisingDigit;
};

module.exports = countDigits;
