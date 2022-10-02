/*
 * @param {number[][]} rectangles
 * @return {number}
 */

/* URL of this problem 
    https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
*/

var countGoodRectangles = function(rectangles) {
    let maxLen = 0;
    const squares = [];
    
    for (let i = 0; i < rectangles.length; i++) {
        let currLen = 0;
        if (rectangles[i][0] < rectangles[i][1]) {
            currLen = rectangles[i][0];
        } else {
            currLen = rectangles[i][1];
        }

        squares.push(currLen);
        
        maxLen = Math.max(maxLen, currLen);
    }
    
    let numOfLargestRectangles = 0;
    
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === maxLen) {
            numOfLargestRectangles++;
        }
    }
    
    return numOfLargestRectangles;
};