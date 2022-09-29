/* URL of this problem
    https://leetcode.com/problems/power-of-three/
*/

/*
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
    if (n === 1) {
        return true;
    }
    
    if (n % 3 !== 0) {
        return false;
    }
    
    while (n >= 3) {
        if (n === 3) {
            return true;
        }
        n /= 3;
    }
    return false;
};