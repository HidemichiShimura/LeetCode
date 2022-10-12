/* URL of this problem
    https://leetcode.com/problems/counting-words-with-a-given-prefix/
*/

/*
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

var prefixCount = function(words, pref) {
    let numOfWordWithPref = 0;
    const prefLength = pref.length;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.substring(0, prefLength) === pref) {
            numOfWordWithPref++;
        }
    }
    
    return numOfWordWithPref;
};