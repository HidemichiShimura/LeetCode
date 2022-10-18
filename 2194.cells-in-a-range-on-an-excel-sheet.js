/*
 * @param {string} s
 * @return {string[]}
 */

/* URL of this problem
    https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
*/

var cellsInRange = function(s) {
    const capitalizedAlphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    const startColIndex = capitalizedAlphabets.indexOf(s.charAt(0));
    const endColIndex = capitalizedAlphabets.indexOf(s.charAt(3));
    
    const startRowIndex = s.charAt(1);
    const endRowIndex = s.charAt(4);
    
    const outputArr = [];
    
    for (let i = startColIndex; i <= endColIndex; i++) {
        for (let j = startRowIndex; j <= endRowIndex; j++) {
            const output = capitalizedAlphabets[i] + j;
            outputArr.push(output);
        }
    }
    
    return outputArr;
};