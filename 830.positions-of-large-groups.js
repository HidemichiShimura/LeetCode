/* URL of this problem
 * https://leetcode.com/problems/positions-of-large-groups/description/
 *
 * @param {string} s
 * @return {number[][]}
 */

var largeGroupPositions = function (s) {
  let Intervals = [];
  let startIdx = 0;
  let endIdx = 1;

  while (endIdx <= s.length) {
    if (s.charAt(startIdx) !== s.charAt(endIdx)) {
      Intervals.push([startIdx, endIdx - 1]);
      startIdx = endIdx;
    }
    endIdx++;
  }
  Intervals = Intervals.filter((interval) => {
    const IntervalLen = interval[1] - interval[0];

    return IntervalLen > 1;
  });

  return Intervals;
};

module.exports = largeGroupPositions;
