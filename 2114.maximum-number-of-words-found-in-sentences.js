/*
 * @param {string[]} sentences
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
*/

var mostWordsFound = function(sentences) {
    let maxLength = 0;
    
    for (let i = 0; i < sentences.length; i++) {
        const wordArr = sentences[i].split(" ");
        
        maxLength = Math.max(maxLength, wordArr.length);
    }
    
    return maxLength;
};