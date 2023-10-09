/* URL of this problem
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/
 *
 *
 * @param {number[]} nums
 * @return {number}
 */

var differenceOfSum = function (nums) {
  const elementSum = nums.reduce((sum, curr) => sum + curr, 0);
  const digitSum = nums.reduce((sum, curr) => sum + calcDigitSum(curr), 0);

  return Math.abs(elementSum - digitSum);
};

function calcDigitSum(num) {
  let number = num;
  let digitSum = 0;

  while (number > 0) {
    digitSum += number % 10;
    number = Math.floor(number / 10);
  }
  digitSum += number;

  return digitSum;
}

module.exports = differenceOfSum;
