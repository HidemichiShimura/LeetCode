/* URL of this problem
    https://leetcode.com/problems/first-unique-character-in-a-string/
*/

/*
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    const map = new Map();
    const nonRepChars = [];
    
    for (let i = 0; i < s.length; i++) {
        map.set(s.charAt(i), (map.get(s.charAt(i)) ?? 0) + 1);
    }
    
    map.forEach((value, key) => {
       if (value === 1) {
           return nonRepChars.push(key);
       } 
    });
    
    return s.indexOf(nonRepChars[0]);
};