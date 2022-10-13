/* URL of this problem
    https://leetcode.com/problems/a-number-after-a-double-reversal/
*/

/*
 * @param {number} num
 * @return {boolean}
 */
 
var isSameAfterReversals = function(num) {
    const numArr = num.toString().split("")
    const reversed1 = Number(numArr.reverse().join(""));
    
    const reversed1Arr = reversed1.toString().split("");
    const reversed2 = Number(reversed1Arr.reverse().join(""));
        
    return num === reversed2;
};