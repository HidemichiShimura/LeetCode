/* URL of this problem
 *  https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 *
 * @param {number[]} arr
 * @return {number[]}
 */
 
var replaceElements = function(arr) {
    const outputArr = [...arr];
    
    for (let i = 0; i < outputArr.length; i++) {
        const greatestElementToRight = Math.max(...outputArr.slice(i + 1));
        
        outputArr[i] = greatestElementToRight;
    }
    outputArr[outputArr.length - 1] = -1;
    
    return outputArr;
};