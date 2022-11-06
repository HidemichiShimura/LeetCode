/* URL of this problem
 * https://leetcode.com/problems/count-integers-with-even-digit-sum/
 *
 * @param {number} num
 * @return {number}
 */
 
var countEven = function(num) {
    let evenDigitSumCount = 0;
    
    for (let i = 2; i <= num; i++) {
        const digitSum = i.toString().split("").reduce((sum, curr) => Number(sum) + Number(curr));
                
        if (digitSum % 2 === 0) {
            evenDigitSumCount++;
        }
    }
    
    return evenDigitSumCount;
};

