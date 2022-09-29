/*
 * @param {number[]} nums
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
*/

var sumOfDigits = function(nums) {
    let minNum = Math.min(...nums);
    
    if (minNum < 10) {
        return minNum % 2 === 0 ? 1 : 0; 
    }
    
    let sumOfMinNumDigit = 0;
    while (minNum > 10) {
        sumOfMinNumDigit += minNum % 10;
        minNum = Math.floor(minNum / 10);
    }
    sumOfMinNumDigit += minNum;
    
    return sumOfMinNumDigit % 2 === 0 ? 1 : 0;
};