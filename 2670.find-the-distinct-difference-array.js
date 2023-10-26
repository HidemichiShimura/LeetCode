/* URL of this problem
 * https://leetcode.com/problems/find-the-distinct-difference-array/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const diff = [];

  for (let i = 0; i < nums.length; i++) {
    const prefixLen = nums
      .slice(0, i + 1)
      .filter((num, idx, arr) => arr.indexOf(num) === idx).length;
    const suffixLen = nums
      .slice(i + 1)
      .filter((num, idx, arr) => arr.indexOf(num) === idx).length;

    diff.push(prefixLen - suffixLen);
  }

  return diff;
};

module.exports = distinctDifferenceArray;
