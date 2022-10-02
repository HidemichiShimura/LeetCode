/* URL of this problem
    https://leetcode.com/problems/height-checker/
*/

/*
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function(heights) {
    const sortedHeights = [];
    for (let i = 0; i < heights.length; i++) {
        sortedHeights.push(heights[i]);   
    }
    sortedHeights.sort((a, b) => a - b);
        
    let unmatchingIndexCount = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            unmatchingIndexCount++;
        }
    }
    
    return unmatchingIndexCount;
};