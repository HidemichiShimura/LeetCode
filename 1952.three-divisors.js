/* URL of this problem
    https://leetcode.com/problems/three-divisors/
*/

/*
 * @param {number} n
 * @return {boolean}
 */
 
var isThree = function(n) {
    let divCount = 2;
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            divCount++;
        }
        
        if (divCount > 3) {
            return false;
        }
    }
    
    return divCount === 3 ? true : false;
};