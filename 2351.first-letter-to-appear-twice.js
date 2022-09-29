/* URL of this problem
    https://leetcode.com/problems/first-letter-to-appear-twice/
*/

/*
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function(s) {
    const charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (charMap.has(char)) {
            return char;
        }
        charMap.set(char, 1);
    }
};