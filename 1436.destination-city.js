/*
 * @param {string[][]} paths
 * @return {string}
 */

/* URL of this problem
    https://leetcode.com/problems/destination-city/
*/

var destCity = function(paths) {
    const pathTable = new Map();
    for (let i = 0; i < paths.length; i++) {
        pathTable[paths[i][0]] = paths[i][1];
    }
    
    let finalDest = paths[0][1];
    
    while (pathTable[finalDest] !== undefined) {
        finalDest = pathTable[finalDest];
    }
    
    return finalDest;
};