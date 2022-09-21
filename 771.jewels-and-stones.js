/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/jewels-and-stones/
*/

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (stones[i] === jewels[j]) {
                count++;
            }    
        }
    }
    
    return count;
};