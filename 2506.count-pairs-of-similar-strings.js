/* URL of this problem
 * https://leetcode.com/problems/count-pairs-of-similar-strings/description/
 *
 * @param {string[]} words
 * @return {number}
 */

var similarPairs = function (words) {
  let similarPairCount = 0;

  for (let i = 0; i < words.length; i++) {
    const CurrUniqueChars = [...new Set(words[i])].sort().join("");

    for (let j = i + 1; j < words.length; j++) {
      const NextUniqueChars = [...new Set(words[j])].sort().join("");

      if (CurrUniqueChars === NextUniqueChars) similarPairCount++;
    }
  }

  return similarPairCount;
};

module.exports = similarPairs;
