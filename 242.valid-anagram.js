/* URL of this problem
    https://leetcode.com/problems/valid-anagram/
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isAnagram = function(s, t) {
    const sArr = [...s].sort();
    const tArr = [...t].sort();
    
    if (sArr.length !== tArr.length) {
        return false;
    }
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
            return false;
        }
    }
    
    return true;
};