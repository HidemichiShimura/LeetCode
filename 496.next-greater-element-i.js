/* URL of this problem
 * https://leetcode.com/problems/next-greater-element-i/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    
    for (let i = 0; i < nums1.length; i++) {
        const greaterElementsInRight = nums2.slice(nums2.indexOf(nums1[i]) + 1).filter(num => nums1[i] < num);
        const firstGreaterElement = greaterElementsInRight[0] === undefined ? -1 : greaterElementsInRight[0];
        
        ans.push(firstGreaterElement);
    }

    return ans;
};

export { nextGreaterElement };