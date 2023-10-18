/* URL of this problem
 * https://leetcode.com/problems/check-if-the-number-is-fascinating/description/
 *
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const concatedDigits = `${n}${n * 2}${n * 3}`.split("").sort().join("");

  return concatedDigits === "123456789";
};

module.exports = isFascinating;
