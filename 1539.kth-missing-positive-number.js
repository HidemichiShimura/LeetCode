/* URL of this problem
 * https://leetcode.com/problems/kth-missing-positive-number/description/
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
  let missingCount = 0;
  let missingNum = 0;

  for (let i = 1; missingCount < k; i++) {
    if (!arr.includes(i)) {
      missingCount++;
      missingNum = i;
    }
  }

  return missingNum;
};

module.exports = findKthPositive;
