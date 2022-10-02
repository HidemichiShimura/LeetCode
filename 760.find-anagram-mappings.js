/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/* URL of this problem
    https://leetcode.com/problems/find-anagram-mappings/
*/

var anagramMappings = function(nums1, nums2) {
    const indexMappingArray = [];
    
    for (let i = 0; i < nums1.length; i++) {
        indexMappingArray.push(nums2.indexOf(nums1[i]));
    }
    
    return indexMappingArray;
};