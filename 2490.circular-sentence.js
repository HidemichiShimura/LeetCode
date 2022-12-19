/* URL of this problem
 * https://leetcode.com/problems/circular-sentence/description/
 *
 * @param {string} sentence
 * @return {boolean}
 */

var isCircularSentence = function(sentence) {
    const Words = sentence.split(" ");
    const SentenceFirstLetter = sentence.charAt(0);
    const SentenceLastLetter = sentence.charAt(sentence.length - 1);
    
    // Check if the first letter and the last letter in sentence are same
    if (SentenceFirstLetter !== SentenceLastLetter) {
        return false;
    }

    // Check if the last latter of a word is equal to the first letter of the next word
    for (let i = 0; i < Words.length - 1; i++) {
        const CurrWord = Words[i];
        const NextWord = Words[i + 1];
        const CurrLastLetter = CurrWord.charAt(CurrWord.length - 1);
        const NextFirstLetter = NextWord.charAt(0);

        if (CurrLastLetter !== NextFirstLetter) {
            return false;
        }
    }
    
    return true;
};

module.exports = isCircularSentence;