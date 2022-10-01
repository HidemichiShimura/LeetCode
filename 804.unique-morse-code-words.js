/* URL of this problem
    https://leetcode.com/problems/unique-morse-code-words/
*/

/*
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    const alphabetMorsecodeMap = new Map();
    for (let i = 0; i < 26; i++) {
        alphabetMorsecodeMap.set(String.fromCharCode(97 + i), morseCodes[i]);
    }
    
    const diffTransformationMap = new Map();
    for (let i = 0; i < words.length; i++) {
        let transformedWord = "";
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            transformedWord += alphabetMorsecodeMap.get(word.charAt(j));
        }
        if (!diffTransformationMap.has(transformedWord)) {
            diffTransformationMap.set(transformedWord, 1);
        }
    }
    
    return diffTransformationMap.size;
};