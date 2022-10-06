/* URL of this problem
    https://leetcode.com/problems/count-common-words-with-one-occurrence/
*/

/*
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function(words1, words2) {
    const map1 = new Map();
    
    for (let i = 0; i < words1.length; i++) {
        map1.set(words1[i], (map1.get(words1[i]) ?? 0) + 1) ; 
    }
    
    map1.forEach((value, key) => {
        if (value !== 1) {
            map1.delete(key);
        }
    });
    
    const map2 = new Map();
    
    for (let i = 0; i < words2.length; i++) {
        map2.set(words2[i], (map2.get(words2[i]) ?? 0) + 1) ; 
    }
    
    map2.forEach((value, key) => {
        if (value !== 1) {
            map2.delete(key);
        }
    });
    
    let count = 0;
    
    map1.forEach((value, key) => {
        if (map2.has(key)) {
            count++;
        }
    });
    
    return count;
};