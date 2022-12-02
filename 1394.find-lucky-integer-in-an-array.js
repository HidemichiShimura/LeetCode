/* URL of this problem
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 *
 * @param {number[]} arr
 * @return {number}
 */
 
var findLucky = function(arr) {
    const NumOcuurMap = new Map();
    const LuckyIntegers = [];
    
    for (let i = 0; i < arr.length; i++) {
        NumOcuurMap.set(arr[i], (NumOcuurMap.get(arr[i]) ?? 0) + 1);
    }
    NumOcuurMap.forEach((value, key) => {
        if (key === value) {
            LuckyIntegers.push(key);
        }
    });
    
    return LuckyIntegers.length === 0 ? -1 : Math.max(...LuckyIntegers);
};

module.exports = findLucky;