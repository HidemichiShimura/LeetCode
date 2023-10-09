/* URL of this problem
 * https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/
 *
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
  return s === words.map((word) => word[0]).join("");
};

module.exports = isAcronym;
