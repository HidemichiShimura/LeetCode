/* URL of this problem
    https://leetcode.com/problems/decode-the-message/
*/

/*
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

var decodeMessage = function(key, message) {
    key = key.replaceAll(" ", "");
    const keyAlphabetMap = new Map();
    let utfSixteenDecimal = 0;
    for (let i = 0; i < key.length; i++) {
        const currKey = key.charAt(i);
        if (!keyAlphabetMap.has(currKey)) {
            keyAlphabetMap.set(currKey, String.fromCharCode(97 + utfSixteenDecimal));
            utfSixteenDecimal++;
        }
    }

    let decodedMsg = "";
    for (let i = 0; i < message.length; i++) {
        const msgChar = message.charAt(i);
        if (keyAlphabetMap.has(msgChar)) {
            decodedMsg += keyAlphabetMap.get(msgChar);
        } else {
            decodedMsg += msgChar;
        }
    }
    
    return decodedMsg;
};