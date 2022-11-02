/* URL of this problem
 * https://leetcode.com/problems/set-mismatch/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
 
var findErrorNums = function(nums) {
    const outputArr = [];
    const sortedNums = [...nums].sort((a, b) => a - b);
    
    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            outputArr.push(sortedNums[i]);
            break;
        }
    }
    
    for (let i = 1; i <= sortedNums.length; i++) {
        if (!sortedNums.includes(i)) {
            outputArr.push(i);
            break;
        }
    }
    
    return outputArr;
};

module.exports = findErrorNums;