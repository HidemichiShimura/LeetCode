/* URL of this problem
 *  https://leetcode.com/problems/sign-of-the-product-of-an-array/
 *
 * @param {number[]} nums
 * @return {number}
 */
 
var arraySign = function(nums) {
    const product = nums.reduce((sum, curr) => sum * curr);
    
    return signFunc(product);
};

function signFunc(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}