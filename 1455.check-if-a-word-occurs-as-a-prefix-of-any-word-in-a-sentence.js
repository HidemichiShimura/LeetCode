/* URL of this problem
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/
 *
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

var isPrefixOfWord = function(sentence, searchWord) {
    const Words = sentence.split(" ");

    for (let i = 0; i < Words.length; i++) {
        const isPrefix = Words[i].indexOf(searchWord) === 0;

        if (isPrefix) {
            // Return the index of the word in sentence (1-indexed) 
            return i + 1;
        }
    }

    return -1;
};

module.exports = isPrefixOfWord;