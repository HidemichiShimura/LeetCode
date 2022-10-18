/* URL of this problem
    https://leetcode.com/problems/find-the-difference-of-two-arrays/
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
 
var findDifference = function(nums1, nums2) {
    const nums1Map = new Map();
    const nums2Map = new Map();
    const answer1 = [];
    const answer2 = [];
    
    // Create each map of nums1 and nums2
    for (let i = 0; i < nums1.length; i++) {
        nums1Map.set(nums1[i], nums1Map.get(nums1[i]) ?? 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        nums2Map.set(nums2[i], nums2Map.get(nums2[i]) ?? 1);
    }
    
    // Delete common keys which exsit in nums1Map and nums2Map
    nums1Map.forEach((value, key) => {
        if (nums2Map.has(key)) {
            nums1Map.delete(key);
            nums2Map.delete(key);
        }
    });
    
    // Create arrays which consist of keys from nums1Map and nums2Map 
    nums1Map.forEach((value, key) => {
        answer1.push(key);
    });
    nums2Map.forEach((value, key) => {
        answer2.push(key);
    });
    
    return [answer1, answer2];
};