/* URL of this problem
 *  https://leetcode.com/problems/two-out-of-three/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 
var twoOutOfThree = function(nums1, nums2, nums3) {
    const cmnDistinctValues = [];
    
    // Add a value of nums1 to cmnDistinctValues when the value is present in num2 or num3
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
            cmnDistinctValues.push(nums1[i]);
        }
    }
    
    // Add a value of nums2 to cmnDistinctValues when the value is present in num3
    for (let i = 0; i < nums2.length; i++) {
        if (nums3.includes(nums2[i])) {
            cmnDistinctValues.push(nums2[i]);
        }
    }
    
    // Return an array of distinct values from cmnDistinctValues
    return [...new Set(cmnDistinctValues)];
};