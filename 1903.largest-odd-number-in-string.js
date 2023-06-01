/*
 * @param {string} num
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/largest-odd-number-in-string/
*/

var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.substring(0, i+1);
        }
    }
    return "";
};