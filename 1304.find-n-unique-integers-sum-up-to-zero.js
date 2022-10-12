/* URL of this problem
    https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
*/

/*
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function(n) {
    const uniqueIntArr = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
        const uniqueNum = i + 5;
        uniqueIntArr.push(uniqueNum, uniqueNum * -1);
    }
    
    if (n % 2 !== 0) {
        uniqueIntArr.push(0);
    }
    
    return uniqueIntArr
};