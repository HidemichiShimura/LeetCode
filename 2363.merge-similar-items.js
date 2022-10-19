/* URL of this problem
 *  https://leetcode.com/problems/merge-similar-items/
 *
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
 
var mergeSimilarItems = function(items1, items2) {
    const allItems = items1.concat(items2);
    const itemMap = new Map();
    const ret = [];
    
    for (let i = 0; i < allItems.length; i ++) {
        const key = allItems[i][0];
        const value = allItems[i][1]
        
        itemMap.set(key, (itemMap.get(key) ?? 0) + value);   
    }
    
    itemMap.forEach((value, key) => {
        ret.push([key, value]);
    });
        
    for (let i = 0; i < ret.length; i++) {
        for (let j = 0; j < ret.length - (1 + i); j++) {
            if (ret[j][0] > ret[j + 1][0]) {
                [ret[j], ret[j + 1]] = [ret[j + 1], ret[j]];
            }
        }
    }
    
    return ret;
};