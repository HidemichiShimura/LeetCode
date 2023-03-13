/* URL of this problem
 * https://leetcode.com/problems/split-with-minimum-sum/description/
 *
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  const Sorted = [...num.toString()].sort((a, b) => a - b);
  let num1 = "",
    num2 = "";

  while (Sorted.length > 0) {
    num1 += Sorted.shift();
    num2 += Sorted.shift() || "";
  }

  // Convert the number strings to number
  num1 = +num1;
  num2 = +num2;

  return num1 + num2;
};

module.exports = splitNum;
