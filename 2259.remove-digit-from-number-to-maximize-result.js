/* URL of this problem
 * https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/description/
 *
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let maxNum = 0;

  for (let i = 0; i < number.length; i++) {
    if (number.charAt(i) === digit) {
      const Num = number.substring(0, i) + number.substring(i + 1);

      maxNum = maxNum < Num ? Num : maxNum;
    }
  }

  return maxNum;
};

module.exports = removeDigit;
