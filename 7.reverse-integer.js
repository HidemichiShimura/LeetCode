/* URL of this problem
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  // Set a range of reversed integer
  const Max = Math.pow(2, 31) - 1;
  const Min = Math.pow(-2, 31);
  // Reverse digits but leave out the negative sign at the beginning if x is less than 0
  const ReversedDigits =
    x >= 0
      ? x.toString().split("").reverse()
      : x.toString().slice(1).split("").reverse();
  let reversedNum = 0;

  for (let i = 0; i < ReversedDigits.length; i++) {
    reversedNum +=
      Number(ReversedDigits[i]) * Math.pow(10, ReversedDigits.length - (i + 1));
  }
  if (x < 0) reversedNum *= -1;

  if (reversedNum > Max || reversedNum < Min) {
    return 0;
  } else {
    return reversedNum;
  }
};

module.exports = reverse;
