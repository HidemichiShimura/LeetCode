/* URL of this problem
 *  https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 
var intersection = function(nums1, nums2) {
    const uniqueNums1 = [...new Set(nums1)];
    const uniqueNums2 = [...new Set(nums2)];
    const intersections = [];

    for (let i = 0; i < uniqueNums1.length; i++) {
        if (uniqueNums2.includes(uniqueNums1[i])) {
            intersections.push(uniqueNums1[i]);
        }
    }

    return intersections;
};