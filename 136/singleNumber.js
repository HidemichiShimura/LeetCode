/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }

    let keys = Object.keys(hash);
    
    for (let i = 0; i < keys.length; i++) {
        if (hash[keys[i]] == 1) return keys[i];
    }
};