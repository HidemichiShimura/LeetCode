/* URL of this problem
 *  https://leetcode.com/problems/merge-strings-alternately/
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
var mergeAlternately = function(word1, word2) {
    let mergedStr = "";
    const cmnLen = Math.min(word1.length, word2.length);
    const additionalLetters = word1.length > word2.length ? word1.substring(cmnLen) : word2.substring(cmnLen);
    
    for (let i = 0; i < cmnLen; i++) {
        mergedStr += word1.charAt(i) + word2.charAt(i);
    }
        
    return mergedStr + additionalLetters;
};