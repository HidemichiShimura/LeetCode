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
    
    return sArr.join("") === tArr.join("");
};