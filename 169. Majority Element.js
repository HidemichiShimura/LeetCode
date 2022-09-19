/*
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }
    
    let values = Object.values(hash);
    let maxValue = values[0];
    
    for (let i = 1; i < values.length; i++) {
        if (maxValue < values[i]) maxValue = values[i];
    }
    
    let keys = Object.keys(hash);
    
    for (let i = 0; i < keys.length; i++) {
        if (hash[keys[i]] == maxValue) return keys[i];
    }
};