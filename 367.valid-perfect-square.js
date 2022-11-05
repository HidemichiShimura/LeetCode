/* URL of this problem
 * https://leetcode.com/problems/valid-perfect-square/
 *
 * @param {number} num
 * @return {boolean}
 */

var isPerfectSquare = function(num) {
    for (let i = 1; (i * i) <= num; i++) {
        if ((i * i) === num) {
            return true;
        }
    }
    return false;
};

module.exports = isPerfectSquare;