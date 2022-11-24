/* URL of this problem
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 *
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 
var nextGreatestLetter = function(letters, target) {
    const distinctLetters = [...new Set(letters)];
    
    for (let i = 0; i < distinctLetters.length; i++) {
        if (target < distinctLetters[i]) {
            return distinctLetters[i];
        }
    }
    
    return distinctLetters[0];
};

module.exports = nextGreatestLetter;