/*
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

/* URL of this problem
    https://leetcode.com/problems/single-row-keyboard/
*/

var calculateTime = function(keyboard, word) {
    const keyboardHashTable = {};
    for (let i = 0; i < keyboard.length; i++) {
        keyboardHashTable[keyboard[i]] = i;
    }

    let count = 0;
    let prevFingerIndex = 0;
    for (let i = 0; i < word.length; i++) {
        const currFingerIndex = keyboardHashTable[word[i]];
        if (prevFingerIndex < currFingerIndex) {
            count += (keyboardHashTable[word[i]] - prevFingerIndex);
            prevFingerIndex = currFingerIndex;
        } else {
            count += (prevFingerIndex - keyboardHashTable[word[i]]);
            prevFingerIndex = currFingerIndex;
        }
    }
    
    return count;
};