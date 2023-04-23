/* URL of this problem
    https://leetcode.com/problems/sort-the-people/
*/

/*
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

var sortPeople = function(names, heights) {
    const sortedHeights = [];
    for (let i = 0; i < heights.length; i++) {
        sortedHeights.push(heights[i]);
    }
    sortedHeights.sort((a, b) => b - a);
    
    const namesInDescOrder =  [];
    for (let i = 0; i < sortedHeights.length; i++) {
        const currHeight = sortedHeights[i];
        const nameIndex = heights.indexOf(currHeight);
        namesInDescOrder.push(names[nameIndex]);
    }
    
    return namesInDescOrder;
}