/* URL of this problem
 *  https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
 *
 * @param {string} s
 * @return {boolean}
 */
 
var checkString = function(s) {
    const firstBIndex = s.indexOf('b');
    const rightSideOfFirstB = s.substring(firstBIndex + 1);
    
    if (firstBIndex === -1) {
        return true;
    }
    return !rightSideOfFirstB.includes('a')
};