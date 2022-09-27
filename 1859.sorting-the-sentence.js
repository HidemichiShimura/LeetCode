/*
 * @param {string} s
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/sorting-the-sentence/
*/

var sortSentence = function(s) {
    const words = s.split(" ");
    let originalSentence = "";
    
    for (let i = 1; i <= words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            const word = words[j];
            if (word.indexOf(i) !== -1) {
                originalSentence =originalSentence + word.substring(0,word.length-1) + " ";
            }
        }
    }
    
    return originalSentence.substring(0,originalSentence.length-1);
};