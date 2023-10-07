/* URL of this problem
 * https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  for (let i = 1; ; i++) {
    const StartVal = i;
    let hasSumLessThanOne = false;
    let sum = StartVal;

    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];

      if (sum < 1) {
        hasSumLessThanOne = true;
        break;
      }
    }

    if (!hasSumLessThanOne) return StartVal;
  }
};

module.exports = minStartValue;
