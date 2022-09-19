/*
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let startIndex;
    let endIndex;
    
    for (let i = s.length-1; i >= 0; i--) {
        if (s[i] != " ") {
            endIndex = i;
            break;
        }
    }
    
    for (let i = endIndex; i >= 0; i--) {
        if (s[i] == " ") {
            startIndex = i+1;
            break;
        }
    }
    
    return s.substring(startIndex,endIndex+1).length;
};