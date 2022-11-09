/* URL of this problem
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 *
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
 
var divisorSubstrings = function(num, k) {
    let KBeauty = 0;
    const StrOfNum = num.toString();
    
    for (let i = 0; i < StrOfNum.length - (k - 1); i++) {
        if (num % StrOfNum.substring(i, i + k) === 0) {
            KBeauty++;
        }
    }
    
    return KBeauty;
};