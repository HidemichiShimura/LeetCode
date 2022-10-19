/* URL of this problem
    https://leetcode.com/problems/decode-the-message/
*/

/*
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function(key, message) {
    const cipherKeys = key.replaceAll(" ", "");    
    const cipherKeyAlphabetMap = makeCipherKeyMap(cipherKeys);    
    let decodedMsg = "";
    
    for (let i = 0; i < message.length; i++) {
        const msgChar = message.charAt(i);
        decodedMsg += cipherKeyAlphabetMap.has(msgChar) ? cipherKeyAlphabetMap.get(msgChar) : msgChar;
    }
    
    return decodedMsg;
};

function makeCipherKeyMap(cipherKeys) {
    const map = new Map();
    let utfSixteenDecimal = 0;
    
    for (let i = 0; i < cipherKeys.length; i++) {
        const currKey = cipherKeys.charAt(i);
        
        // Skip the current iteration if the cipher key already exists on the map
        if (map.has(currKey)) {
            continue;
        }
        
        // Get a lowercase English alphabet in the UTF-16 table using decimal and set the alphabet for value
        map.set(currKey, String.fromCharCode(97 + utfSixteenDecimal));
        utfSixteenDecimal++;
    }

    return map;   
};