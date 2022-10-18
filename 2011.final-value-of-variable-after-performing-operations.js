/*
 * @param {string[]} operations
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
*/

var finalValueAfterOperations = function(operations) {
    let finalValueOfX = 0;
    
    for (let i = 0; i < operations.length; i++) {
        switch (operations[i]) {
            case "--X":
            case "X--":
                finalValueOfX -= 1
                break;
            case "++X":
            case "X++":
                finalValueOfX += 1;
                break;
        }
    }
    
    return finalValueOfX;
};