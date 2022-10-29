/* URL of this problem
 *  https://leetcode.com/problems/last-stone-weight/
 *
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
    // Sort a copy of stones in a descending order
    const stonesCopy = [...stones].sort((a, b) => b - a);
    
    while (stonesCopy.length > 1) {
        const diff = stonesCopy[0] - stonesCopy[1];
        
        if (diff === 0) {
            stonesCopy.splice(0, 2);
        } else if (diff > 0) {
            stonesCopy[0] = diff;
            stonesCopy.splice(1, 1);
        }
        
        stonesCopy.sort((a, b) => b - a);
    }
    
    return stonesCopy.length === 1 ? stonesCopy[0] : 0;
};