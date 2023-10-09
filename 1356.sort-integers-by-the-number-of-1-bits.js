/* URL of this problem
 * https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/
 *
 * @param {number[]} arr
 * @return {number[]}
 */

var sortByBits = function (arr) {
  const ArrSorted = [...arr].sort((a, b) => {
    const CurrNumBinary = a.toString(2).replaceAll("0", "");
    const NextNumBinary = b.toString(2).replaceAll("0", "");

    if (CurrNumBinary === NextNumBinary) {
      return a - b;
    } else {
      return CurrNumBinary - NextNumBinary;
    }
  });

  return ArrSorted;
};

module.exports = sortByBits;
