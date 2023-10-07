/* URL of this problem
 * https://leetcode.com/problems/merge-strings-alternately/description/
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const Word1Chars = [...word1];
  const Word2Chars = [...word2];
  const MergedChars = [];
  const LoopTime = Math.max(Word1Chars.length, Word2Chars.length);

  for (let i = 0; i < LoopTime; i++) {
    const FirstChar = Word1Chars.shift() || "";
    const SecondChar = Word2Chars.shift() || "";

    MergedChars.push(FirstChar, SecondChar);
  }

  return MergedChars.join("");
};

module.exports = mergeAlternately;
