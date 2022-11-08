/* URL of this problem
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
 *
 * @param {string} s
 * @return {number}
 */
 
var countGoodSubstrings = function(s) {
    let goodSubstrCount = 0;
    
    for (let i = 0; i < s.length - 2; i++) {
        const sortedSubstr = [...s.substring(i, i + 3)];
                
        if (sortedSubstr[0] === sortedSubstr[1] || sortedSubstr[0] === sortedSubstr[2] || sortedSubstr[1] === sortedSubstr[2]) {
            continue;
        }
        goodSubstrCount++;
    }
    
    return goodSubstrCount;
};

module.exports = countGoodSubstrings;