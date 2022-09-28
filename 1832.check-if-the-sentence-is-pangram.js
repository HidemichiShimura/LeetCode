/*
 * @param {string} sentence
 * @return {boolean}
 */

/* URL of this problem
    https://leetcode.com/problems/check-if-the-sentence-is-pangram/
*/

 var checkIfPangram = function(sentence) {
    const alphabetMap = new Map();
    
    for (let i = 0; i < sentence.length; i++) {
        if(alphabetMap[sentence[i]] === undefined) {
            alphabetMap[sentence[i]] = 1;
        }
    }
    
    return Object.keys(alphabetMap).length === 26; 
};