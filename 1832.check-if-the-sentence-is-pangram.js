/*
 * @param {string} sentence
 * @return {boolean}
 */

/* URL of this problem
    https://leetcode.com/problems/check-if-the-sentence-is-pangram/
*/

 var checkIfPangram = function(sentence) {
    const alphabetTable = {};
    
    for (let i = 0; i < sentence.length; i++) {
        if(alphabetTable[sentence[i]] === undefined) {
            alphabetTable[sentence[i]] = 1;
        }
    }
    
    return Object.keys(alphabetTable).length === 26 ? true : false; 
};