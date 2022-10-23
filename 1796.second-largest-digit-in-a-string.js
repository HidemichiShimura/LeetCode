/* URL of this problem
 *  https://leetcode.com/problems/second-largest-digit-in-a-string/
 *
 * @param {string} s
 * @return {number}
 */
 
var secondHighest = function(s) {
    // Create an array of numbers
    const digits = [...s].filter(char => char == Number(char));
        
    return findSecondLargestDigit(digits);
};

function findSecondLargestDigit(digitArr) {
    // Sort the array in a descending order
    const sortedDigitArr = [...digitArr].sort((a, b) => b - a);
    
    for (let i = 0; i < sortedDigitArr.length - 1; i++) {
        if (sortedDigitArr[i] !== sortedDigitArr[i + 1]) {
            return sortedDigitArr[i + 1];
        }
    }
    
    return -1;
}