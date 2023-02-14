/* URL of this problem
 * https://leetcode.com/problems/separate-the-digits-in-an-array/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */

var separateDigits = function (nums) {
  const Digits = nums.join("").split("");
  const Answer = Digits.map((digit) => Number(digit));

  return Answer;
};

module.exports = separateDigits;
