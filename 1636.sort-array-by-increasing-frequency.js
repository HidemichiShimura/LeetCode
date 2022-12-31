/* URL of this problem
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/description/
 *
 * @param {number[]} nums
 * @return {number[]}
 */

var frequencySort = function(nums) {
    const UniqueNums = [...new Set(nums)];
    const SortedNums = [];

    // Make an array of each unique number and push the array to SortedNums
    for (let i = 0; i < UniqueNums.length; i++) {
        const CurrNums = nums.filter(num => num === UniqueNums[i]);

        SortedNums.push(CurrNums);
    }
    SortedNums.sort((currNums, nextNums) => {
        const CurrLen = currNums.length;
        const NextLen = nextNums.length;
        const CurrNum = currNums[0];
        const NextNum = nextNums[0];
        
        // Sort the arrays in a descending order by its number if the arrays have the same occurrence
        if (CurrLen === NextLen) {
            return NextNum - CurrNum;
        }
        // Sort the arrays in an ascending order by occurrence
        return CurrLen - NextLen;
    });
    
    return SortedNums.flat();
};

module.exports = frequencySort;