/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Create a hashmap of magazine
    let hashmap = {};
    for (let i = 0; i < magazine.length; i++) {
        if (hashmap[magazine.charAt(i)] === undefined) {
            hashmap[magazine.charAt(i)] = 1;
        } else {
            hashmap[magazine.charAt(i)] += 1;
        }
    }
    
    // check ransomNote with the hashmap of magazine
    for (let i = 0; i < ransomNote.length; i++) {
        if (hashmap[ransomNote.charAt(i)] === undefined) {
            return false;
        } else if (hashmap[ransomNote.charAt(i)] === 0) {
            return false;
        }
        
        hashmap[ransomNote.charAt(i)] -= 1;
    }
    
    return true;
};