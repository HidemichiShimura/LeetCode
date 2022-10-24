/* URL of this problem
 *  https://leetcode.com/problems/is-subsequence/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
var isSubsequence = function(s, t) {
    let tempT = t;
        
    for (let i = 0; i < s.length; i++) {
        if (!tempT.includes(s.charAt(i))) {
            return false;
        }
        
        tempT = tempT.substring(tempT.indexOf(s.charAt(i)) + 1);
    }
    
    return true;
};