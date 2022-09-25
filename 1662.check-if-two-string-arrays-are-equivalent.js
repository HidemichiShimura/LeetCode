/*
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

/* URL of this problem
    https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
*/

var arrayStringsAreEqual = function(word1, word2) {
    let strWord1 = "";
    for (let i = 0; i < word1.length; i++) {
        strWord1 += word1[i];
    }
    
    let strWord2 = "";
    for (let i = 0; i < word2.length; i++) {
        strWord2 += word2[i];
    }
    
    return strWord1 === strWord2 ? true : false;
};