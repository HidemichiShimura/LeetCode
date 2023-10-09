/* URL of this problem
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/
 *
 * @param {string} s
 * @return {number}
 */

var maxLengthBetweenEqualCharacters = function (s) {
  // Longest length of elements between two same characters
  let longestLen = -1;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s.charAt(i) === s.charAt(j)) {
        // Length of elements between two same characters
        const Len = j - i - 1;

        longestLen = Math.max(Len, longestLen);
      }
    }
  }

  return longestLen;
};

module.exports = maxLengthBetweenEqualCharacters;
