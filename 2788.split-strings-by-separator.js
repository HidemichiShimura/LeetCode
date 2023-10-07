/* URL of this problem
 * https://leetcode.com/problems/split-strings-by-separator/description/
 *
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
  return words
    .join(separator)
    .split(separator)
    .filter((word) => word);
};

module.exports = splitWordsBySeparator;
