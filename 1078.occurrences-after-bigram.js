/* URL of this problem
 * https://leetcode.com/problems/occurrences-after-bigram/description/
 *
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

var findOcurrences = function(text, first, second) {
    const Words = text.split(" ");
    const ThirdWords = [];

    for (let i = 0; i < Words.length - 2; i++) {
        const CurrFirst = Words[i];
        const CurrSecond = Words[i + 1];
        const CurrThird = Words[i + 2];

        if (CurrFirst === first && CurrSecond === second) {
            ThirdWords.push(CurrThird);
        }
    }

    return ThirdWords;
};

module.exports = findOcurrences;