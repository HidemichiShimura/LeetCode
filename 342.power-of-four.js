/*
 * @param {number} n
 * @return {boolean}
 */

/* URL of this problem
    https://leetcode.com/problems/power-of-four/
*/

var isPowerOfFour = function(n) {
    if (n === 1) {
        return true;
    }
    
    if (n % 4 !== 0) {
        return false;
    }
    
    numMultipliedByFour = 1;
    while (numMultipliedByFour <= n) {
        if (numMultipliedByFour === n) {
            return true;
        }
        numMultipliedByFour *= 4;
    }
    
    return false;
};
    