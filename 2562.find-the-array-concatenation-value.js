/* URL of this problem
 * https://leetcode.com/problems/find-the-array-concatenation-value/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var findTheArrayConcVal = function (nums) {
  const Nums = [...nums];
  let concatValue = 0;

  while (Nums.length > 0) {
    const FirstNum = Nums.shift();
    // Assign an empty string if Nums has no more elements left
    const LastNum = Nums.pop() || "";
    const CurrConcatValue = FirstNum.toString() + LastNum.toString();

    concatValue += +CurrConcatValue;
  }

  return concatValue;
};

module.exports = findTheArrayConcVal;
