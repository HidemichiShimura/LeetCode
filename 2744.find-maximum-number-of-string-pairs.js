/* URL of this problem
 * https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/
 *
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const WordsCopy = [...words];
  let idx = 0,
    pairCount = 0;

  while (idx < WordsCopy.length) {
    const ReversedWord = [...WordsCopy[idx]].reverse().join("");

    if (WordsCopy.includes(ReversedWord, idx + 1)) {
      const ReversedWordIdx = WordsCopy.indexOf(ReversedWord);

      WordsCopy.splice(ReversedWordIdx, 1);
      WordsCopy.splice(idx, 1);
      pairCount++;

      continue;
    }
    idx++;
  }

  return pairCount;
};

module.exports = maximumNumberOfStringPairs;
