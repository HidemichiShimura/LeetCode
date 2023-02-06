/* URL of this problem
 * https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/description/
 *
 *
 * @param {string[]} strs
 * @return {number}
 */

var maximumValue = function (strs) {
  let maxValue = 0;

  for (let i = 0; i < strs.length; i++) {
    const CurrValue = isNaN(strs[i]) ? strs[i].length : strs[i];

    maxValue = Math.max(maxValue, CurrValue);
  }

  return maxValue;
};

module.exports = maximumValue;
