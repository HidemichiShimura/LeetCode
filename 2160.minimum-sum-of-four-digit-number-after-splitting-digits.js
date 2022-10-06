/* URL of this problem
    https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
*/

/*
 * @param {number} num
 * @return {number}
 */

var minimumSum = function(num) {
    const numArr = num.toString().split("");
    
    numArr.sort((a, b) => {
        return a - b;
    });
    
    const new1 = Number(numArr[0] + numArr[3]);
    const new2 = Number(numArr[1] + numArr[2]);
    
    return new1 + new2;
};