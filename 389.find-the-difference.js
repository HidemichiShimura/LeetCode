/* URL of this problem
    https://leetcode.com/problems/find-the-difference/
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 
var findTheDifference = function(s, t) {
    const sortedS = [...s].sort();
    const sortedT = [...t].sort();
    
    for (let i = 0; i < sortedT.length; i++) {
        if (sortedS[i] !== sortedT[i]) {
            return sortedT[i];
        }
    }
};