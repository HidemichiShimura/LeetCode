/* URL of this problem
 * https://leetcode.com/problems/counting-elements/
 *
 * @param {number[]} arr
 * @return {number}
 */
 
var countElements = function(arr) {
    // Count elements such that element + 1 exists in arr
    let elementCount = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i] + 1)) {
            elementCount++;
        }
    }
    
    return elementCount;
};

module.exports = countElements;