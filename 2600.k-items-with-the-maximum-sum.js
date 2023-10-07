/* URL of this problem
 * https://leetcode.com/problems/k-items-with-the-maximum-sum/description/
 *
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  let sum = 0;
  let sumTimes = k;

  sum += Math.min(sumTimes, numOnes);
  sumTimes -= sum;
  sumTimes -= Math.min(sumTimes, numZeros);
  sum -= Math.min(sumTimes, numNegOnes);

  return sum;
};

module.exports = kItemsWithMaximumSum;
