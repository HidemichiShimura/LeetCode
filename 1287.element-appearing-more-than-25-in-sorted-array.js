/* URL of this problem
 * https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
 *
 * @param {number[]} arr
 * @return {number}
 */
 
var findSpecialInteger = function(arr) {
    let num = Infinity; // Store an integer which occurs more than 25 % of the time
    const intOccurMap = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        intOccurMap.set(arr[i], (intOccurMap.get(arr[i]) ?? 0) + 1);
    }
    intOccurMap.forEach((value, key) => {
        if (value > arr.length / 4) {
            num = key;
        }
    });
    
    return num;
};

module.exports = findSpecialInteger;