/* URL of this problem
 * https://leetcode.com/problems/percentage-of-letter-in-string/
 *
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 
var percentageLetter = function(s, letter) {
    const letterCount = [...s].filter(char => char === letter).length;
    
    return Math.floor((letterCount / s.length) * 100);
};

module.exports = percentageLetter;