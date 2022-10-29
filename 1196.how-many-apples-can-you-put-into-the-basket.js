/* URL of this problem
 *  https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/
 *
 * @param {number[]} weight
 * @return {number}
 */
 
var maxNumberOfApples = function(weight) {
    const sortedWeight = [...weight].sort((a, b) => a - b);
    let weightSum = 0;
        
    for (let i = 0; i < sortedWeight.length; i++) {
        weightSum += sortedWeight[i];
        
        if (weightSum > 5000) {
            return i;
        }
    }
    
    return sortedWeight.length;
};