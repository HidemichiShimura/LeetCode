/* URL of this problem
 *  https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 
var intersection = function(nums1, nums2) {
    const distincetiveNums1 = [...new Set(nums1)];
    const distincetiveNums2 = [...new Set(nums2)];
    const intersections = [];
    
    for (let i = 0; i < distincetiveNums1.length; i++) {
        if (distincetiveNums2.includes(distincetiveNums1[i])) {
            intersections.push(distincetiveNums1[i]);
        }
    }
    
    return intersections;
};