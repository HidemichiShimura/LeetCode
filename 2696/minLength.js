/* URL of this problem
 * https://leetcode.com/problems/minimum-string-length-after-removing-substrings/description/
 *
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  let resultingStr = s;

  while (resultingStr.includes("AB") || resultingStr.includes("CD")) {
    if (resultingStr.includes("AB"))
      resultingStr = resultingStr.replace("AB", "");
    if (resultingStr.includes("CD"))
      resultingStr = resultingStr.replace("CD", "");
  }

  return resultingStr.length;
};

module.exports = minLength;
