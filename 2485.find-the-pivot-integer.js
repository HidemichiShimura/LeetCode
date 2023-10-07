/* URL of this problem
 * https://leetcode.com/problems/find-the-pivot-integer/description/
 *
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let pivotInt = -1;

  for (let i = 1; i <= n; i++) {
    const LeftSum = calcSum(1, i);
    const RightSum = calcSum(i, n);

    if (LeftSum === RightSum) pivotInt = i;
  }

  return pivotInt;
};

function calcSum(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

module.exports = pivotInteger;
