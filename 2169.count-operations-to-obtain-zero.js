/* URL of this problem
 * https://leetcode.com/problems/count-operations-to-obtain-zero/
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 
var countOperations = function(num1, num2) {
    let operationCount = 0;
    
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        
        operationCount++;
    }
    
    return operationCount;
};

module.exports = countOperations;