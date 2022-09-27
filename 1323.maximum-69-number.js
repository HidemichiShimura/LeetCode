/*
 * @param {number} num
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/maximum-69-number/
*/

var maximum69Number  = function(num) {
    // convert num to array
    const digitArr = [];
    while (num >= 10) {
        digitArr.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    digitArr.unshift(num);
    
    // update 6 to 9 if num has 6 in it.
    if (digitArr.indexOf(6) !== -1) {
        digitArr[digitArr.indexOf(6)] = 9;
    } 
    
    // convert array to number
    let maximumNumber = 0;
    for (let i = 0; i < digitArr.length; i++) {
        maximumNumber += digitArr[i] * Math.pow(10, (digitArr.length - 1) - i);
    }
    
    return maximumNumber;
};