/* URL of this problem
 * https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
 *
 * @param {number[]} nums
 * @return {boolean}
 */

var canBeIncreasing = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const numsWithOneElementRemoved = [...nums];
        numsWithOneElementRemoved.splice(i, 1)
        
        if (isStrictlyIncreasing(numsWithOneElementRemoved)) {
            return true;
        }
    }
    return false;
};

function isStrictlyIncreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            continue;
        }
                    
        return false;
    }
    return true;
}

module.exports = canBeIncreasing;