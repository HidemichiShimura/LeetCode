/* URL of this problem
 * https://leetcode.com/problems/number-of-segments-in-a-string/description/
 *
 * @param {string} s
 * @return {number}
 */

var countSegments = function (s) {
  const Segments = s.split(" ").filter((char) => char !== "");

  return Segments.length;
};

module.exports = countSegments;
