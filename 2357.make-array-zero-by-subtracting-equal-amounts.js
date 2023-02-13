/* URL of this problem
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/
 *
 * @param {number[]} nums
 * @return {number}
 */

var minimumOperations = function (nums) {
  let operationCount = 0;
  let numsSubtracted = [...nums];

  while (numsSubtracted.some((num) => num > 0)) {
    const NonZeroNums = numsSubtracted.filter((num) => num > 0);
    const MinNum = Math.min(...NonZeroNums);

    numsSubtracted = numsSubtracted.map((num) => {
      return num - MinNum > 0 ? num - MinNum : 0;
    });
    operationCount++;
  }

  return operationCount;
};

module.exports = minimumOperations;
