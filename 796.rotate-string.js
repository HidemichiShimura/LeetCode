/* URL of this problem
 * https://leetcode.com/problems/rotate-string/
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 
var rotateString = function(s, goal) {
    const sArr = [...s];
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr.join("") === goal) {
            return true;
        }
        
        sArr.push(sArr.shift());
    }
    
    return false;
};