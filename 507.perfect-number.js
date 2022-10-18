/* URL of this problem
    https://leetcode.com/problems/perfect-number/
*/

/*
 * @param {number} num
 * @return {boolean}
 */

var checkPerfectNumber = function(num) {
 
    let divisorSum = 0;
    
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divisorSum += i;
        }
    }
    
    return num === divisorSum;
};