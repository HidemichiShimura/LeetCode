/* URL of this problem
    https://leetcode.com/problems/perfect-number/
*/

/*
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
    if (num === 1) {
        return false;
    }
    
    let divisorSum = 1;
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            divisorSum += i;
        }
    }
    
    return num === divisorSum;
};