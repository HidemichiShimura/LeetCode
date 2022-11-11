/* URL of this problem
 * https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
 
var isValid = function(s) {
    const brackets = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(" || s.charAt(i) === "{" || s.charAt(i) === "[") {
            brackets.push(s.charAt(i));
            continue;
        }
        
        if (s.charAt(i) === ")") {
            if (brackets.pop() === "(") {
                continue;
            }
        } else if (s.charAt(i) === "}") {
            if (brackets.pop() === "{") {
                continue;
            }
        } else if (s.charAt(i) === "]") {
            if (brackets.pop() === "[") {
                continue;
            }
        }
        
        return false;
    }
    
    return brackets.length === 0;
};