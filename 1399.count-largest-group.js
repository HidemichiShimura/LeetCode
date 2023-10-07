/* URL of this problem
 * https://leetcode.com/problems/count-largest-group/description/
 *
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const DigitSumByOccur = new Map();
  let digitSumOccurs;
  let maxDigitSumOccur;

  for (let i = 1; i <= n; i++) {
    const DigitSum = getDigitSum(i);

    DigitSumByOccur.set(DigitSum, (DigitSumByOccur.get(DigitSum) ?? 0) + 1);
  }

  digitSumOccurs = [...DigitSumByOccur.values()];
  maxDigitSumOccur = Math.max(...digitSumOccurs);

  return digitSumOccurs.filter((val) => val === maxDigitSumOccur).length;
};

function getDigitSum(n) {
  let num = n;
  let digitSum = 0;

  while (num > 0) {
    digitSum += num % 10;
    num = Math.floor(num / 10);
  }

  return digitSum;
}

module.exports = countLargestGroup;
