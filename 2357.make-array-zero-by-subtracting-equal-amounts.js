/* URL of this problem
 * https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var minimumOperations = function(nums) {
    let operationCount = 0;
    let subtractedNums = [...nums];
    
    while (findSmallestPositiveNum(subtractedNums) !== Infinity) {
        subtractedNums = subtractedNums.map((num) => num - findSmallestPositiveNum(subtractedNums));
        operationCount++;
    }
    
    return operationCount;
};

function findSmallestPositiveNum(arr) {
    let smallestNum = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            continue;
        }
        
        if (smallestNum > arr[i]) {
            smallestNum = arr[i];
        }
    }
    
    return smallestNum;
}

module.exports = minimumOperations;