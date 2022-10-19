/*
 * @param {string[]} strs
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/longest-common-prefix/
*/

var longestCommonPrefix = function(strs) {
    let cmnPrefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        const tempPrefixChar = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== tempPrefixChar) {
                return cmnPrefix;
            }
        }
        cmnPrefix += tempPrefixChar;
    }
    
    return cmnPrefix;
};