/*
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/shuffle-string/
*/

var restoreString = function(s, indices) {
    let ans = "";
    for (let i = 0; i < indices.length; i++) {
        const index = indices.indexOf(i);
        ans += s.charAt(index);
    }
    return ans;
};