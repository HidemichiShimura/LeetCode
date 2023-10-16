/* URL of this problem
 * https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/
 *
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let numWithoutTrailingZero = num;

  while (numWithoutTrailingZero.length > 0) {
    const lastChar = numWithoutTrailingZero.charAt(
      numWithoutTrailingZero.length - 1
    );

    if (lastChar !== "0") break;
    numWithoutTrailingZero = numWithoutTrailingZero.substring(
      0,
      numWithoutTrailingZero.length - 1
    );
  }

  return numWithoutTrailingZero;
};

module.exports = removeTrailingZeros;
