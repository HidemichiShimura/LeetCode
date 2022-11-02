/* URL of this problem
 * https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 *
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 
var nearestValidPoint = function(x, y, points) {
    let validPointSmallestIndex = -1;
    let smallestManhattanDistance = Infinity;
    
    for (let i = 0; i < points.length; i++) {
        if (x !== points[i][0] && y !== points[i][1]) {
            continue;            
        }
        
        const currManhattanDistance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
        if (currManhattanDistance < smallestManhattanDistance) {
            smallestManhattanDistance = currManhattanDistance;
            validPointSmallestIndex = i;
        }
    }
    
    return validPointSmallestIndex;
};