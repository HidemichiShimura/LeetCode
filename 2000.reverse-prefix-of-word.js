/*
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/reverse-prefix-of-word/
*/

var reversePrefix = function(word, ch) {
    const chIndex = word.indexOf(ch);
    
    if (chIndex === -1) {
        return word;
    }
    
    const segment = word.substring(0,chIndex+1);
    let reversedSegment = "";
    for (i = segment.length-1; i >= 0; i--) {
        reversedSegment += segment[i];
    }
    
    return reversedSegment + word.substring(chIndex+1);
};