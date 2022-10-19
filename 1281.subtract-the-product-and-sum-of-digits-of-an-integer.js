/*
 * @param {number} n
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
*/

var subtractProductAndSum = function(n) {
    let product = 1;
    let sum = 0;
    
    while (n >= 10) {
        const remainder = n % 10;
        
        product *= remainder;
        sum += remainder;
        
        n = Math.floor(n / 10);
    }
    
    product *= n;
    sum += n;
    
    return product - sum;
};