/* URL of this problem
    https://leetcode.com/problems/armstrong-number/
*/

/*
 * @param {number} n
 * @return {boolean}
 */

var isArmstrong = function(n) {
    const k = n.toString().length;
       
    let tempN = n;
    let sumOfPoweredDigits = 0;
    while (tempN > 10) {
        const digit = tempN % 10;
        sumOfPoweredDigits += Math.pow(digit, k);
        tempN = Math.floor(tempN / 10);
    }
    sumOfPoweredDigits += Math.pow(tempN, k);
    
    return sumOfPoweredDigits === n;
};