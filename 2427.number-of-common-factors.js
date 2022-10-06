/* URL of this problem
    https://leetcode.com/problems/number-of-common-factors/
*/

/*
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

var commonFactors = function(a, b) {
    let cmnFactorCount = 1;
    
    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            cmnFactorCount++;
        }
    }
    
    return cmnFactorCount;
};