/* URL of this problem
 * https://leetcode.com/problems/number-of-distinct-averages/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var distinctAverages = function(nums) {
    const distinctAverages = [];
    const sortedNums = [...nums].sort((a, b) => a - b);
    
    while (sortedNums.length !== 0) {
        // Extract the maximum number and the minimum number from sortedNums
        // Calculate the average of the max and the min
        const maxMinAverage = (sortedNums.shift() + sortedNums.pop()) / 2;
        
        if (!distinctAverages.includes(maxMinAverage)) {
            distinctAverages.push(maxMinAverage);;
        }
    }
    
    return distinctAverages.length;
};

export {distinctAverages};