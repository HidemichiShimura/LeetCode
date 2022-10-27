/* URL of this problem
 * https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/
 *
 * @param {number} n
 * @return {string}
 */
 
var generateTheString = function(n) {
    const alphabet1 = "a";
    const alphabet2 = "b";

    if (n % 2 === 1) {
        return alphabet1.repeat(n);
    }
    return alphabet1.repeat(n - 1) + alphabet2;
}