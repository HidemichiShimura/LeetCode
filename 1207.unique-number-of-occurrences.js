/* URL of this problem
    https://leetcode.com/problems/unique-number-of-occurrences/
*/

/*
 * @param {number[]} arr
 * @return {boolean}
 */
 
var uniqueOccurrences = function(arr) {
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }
    
    const occurrenceArr = [];
    
    map.forEach((value) => {
        occurrenceArr.push(value);
    });
    occurrenceArr.sort((a, b) => {
        return a - b;
    });
    
    for (let i = 0; i < occurrenceArr.length - 1; i++) {
        if (occurrenceArr[i] === occurrenceArr[i + 1]) {
            return false;
        }
    }
    
    return true;
};