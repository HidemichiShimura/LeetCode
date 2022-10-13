/* URL of this problem
 *  https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
 *
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 
var isSumEqual = function(firstWord, secondWord, targetWord) {
    return sumNumericValues(firstWord) + sumNumericValues(secondWord) === sumNumericValues(targetWord);
};

const sumNumericValues = function(word) {
    // Index of each alphabet is equal to its letter value
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let sum = "";
    
    for (let i = 0; i < word.length; i++) {
        sum += alphabets.indexOf(word.charAt(i));
    }
    
    return Number(sum);
}