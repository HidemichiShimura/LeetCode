/* URL of this problem
 * https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/
 *
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const Segments = getContiguousSegments(s);
  const ZeroSegments = Segments.filter((segment) => segment[0].includes("0"));
  const OneSegments = Segments.filter((segment) => segment[0].includes("1"));
  const LongestZeroSegmentLen = ZeroSegments.reduce((max, curr) => {
    return Math.max(max, curr.length);
  }, 0);
  const LongestOneSegmentLen = OneSegments.reduce((max, curr) => {
    return Math.max(max, curr.length);
  }, 0);

  return LongestZeroSegmentLen < LongestOneSegmentLen;
};

function getContiguousSegments(str) {
  const Segments = [];
  let startIdx = 0;
  let endIdx = 1;

  while (endIdx <= str.length) {
    if (str.charAt(startIdx) !== str.charAt(endIdx)) {
      Segments.push(str.substring(startIdx, endIdx));
      startIdx = endIdx;
    }
    endIdx++;
  }

  return Segments;
}

module.exports = checkZeroOnes;
