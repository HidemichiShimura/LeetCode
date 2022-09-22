/*
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/count-items-matching-a-rule/
*/

var countMatches = function(items, ruleKey, ruleValue) {
    let ruleKeyIndex;
    switch (ruleKey) {
        case "type":
            ruleKeyIndex = 0;
            break;
        case "color":
            ruleKeyIndex = 1;
            break;
        case "name":
            ruleKeyIndex = 2;
            break;
    }
    
    let count = 0;
    
    for (let i = 0; i < items.length; i++) {
        if (items[i][ruleKeyIndex] === ruleValue) {
            count++;
        }
    }
    
    return count;
};