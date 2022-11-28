/* URL of this problem
 * https://leetcode.com/problems/plus-one/
 *
 * @param {number[]} digits
 * @return {number[]}
 */
 
var plusOne = function(digits) {
    const digitsWithPlusOne = [...digits];
    
    for (let i = digitsWithPlusOne.length - 1; i >= 0; i--) {
        if (digitsWithPlusOne[i] < 9) {
            digitsWithPlusOne[i] += 1;
            break;
        } else if (digitsWithPlusOne[i] === 9) {
            digitsWithPlusOne[i] = 0;
            continue;
        }
    }
    // Add 1 to digitsWithPlusOne if the leftmost element produces carryover
    if (digitsWithPlusOne[0] === 0) {
        digitsWithPlusOne.unshift(1);
    }
    
    return digitsWithPlusOne;
};

module.exports = plusOne;