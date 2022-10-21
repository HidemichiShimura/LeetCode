/* URL of this problem
 *  https://leetcode.com/problems/sort-array-by-parity-ii/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
 
var sortArrayByParityII = function(nums) {
    const evenNumbers = nums.filter(num => num % 2 === 0);
    const oddNumbers = nums.filter(num => num % 2 === 1);
    const answerArr = [];
    
    for (let i = 0; i < evenNumbers.length; i++) {
        answerArr.push(evenNumbers[i], oddNumbers[i]);
    }
    
    return answerArr;
};