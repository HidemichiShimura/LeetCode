/*
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/count-the-number-of-consistent-strings/
*/

var countConsistentStrings = function(allowed, words) {
    let numConsistentStr = 0;
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isConsistent;
        for (let j = 0; j < word.length; j++) {
            isConsistent = true;
            if (allowed.indexOf(word.charAt(j)) === -1) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            numConsistentStr++;
        }
    }
    
    return numConsistentStr;
};