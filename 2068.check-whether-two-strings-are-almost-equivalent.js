/* URL of this problem
 * https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/description/
 *
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

var checkAlmostEquivalent = function(word1, word2) {
    const Word1CharsByFreq = new Map();
    const Word2CharsByFreq = new Map();
    const UniqueChars = [...new Set(word1 + word2)];
    const MaximumFrequency = 3;

    for (let i = 0; i < word1.length; i++) {
        Word1CharsByFreq.set(word1[i], (Word1CharsByFreq.get(word1[i]) ?? 0) + 1);
        Word2CharsByFreq.set(word2[i], (Word2CharsByFreq.get(word2[i]) ?? 0) + 1);
    }
    for (let i = 0; i < UniqueChars.length; i++) {
        const Word1CharFreq = Word1CharsByFreq.get(UniqueChars[i]) ?? 0;
        const Word2CharFreq = Word2CharsByFreq.get(UniqueChars[i]) ?? 0;
        const Difference = Math.abs(Word1CharFreq - Word2CharFreq);

        if (Difference > MaximumFrequency) {
            return false;
        }
    }
    return true;
};

module.exports = checkAlmostEquivalent;