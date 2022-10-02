/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/* URL of this problem
    https://leetcode.com/problems/find-anagram-mappings/
*/

var anagramMappings = function(nums1, nums2) {
    return nums1.map(num => {
        return nums2.indexOf(num);
    })
};