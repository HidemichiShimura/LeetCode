/* URL of this problem
    https://leetcode.com/problems/uncommon-words-from-two-sentences/
*/

/*
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 
var uncommonFromSentences = function(s1, s2) {
    const wordMap = new Map();
    const allWords = (s1 + " " + s2).split(" ");
    
    for (let i = 0; i < allWords.length; i++) {
        wordMap.set(allWords[i], (wordMap.get(allWords[i]) ?? 0) + 1);
    }
    
    const uncmnWords = [];
    
    wordMap.forEach((value, key) => {
        if (value === 1) {
            uncmnWords.push(key);
        }
    });
    
    return uncmnWords;
};