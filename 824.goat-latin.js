/* URL of this problem
 * https://leetcode.com/problems/goat-latin/
 *
 * @param {string} sentence
 * @return {string}
 */
 
var toGoatLatin = function(sentence) {
    const words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if ("aeiou".includes(words[i].charAt(0).toLowerCase())) {
            words[i] += "ma";
        } else {
            words[i] = words[i].substring(1) + words[i].charAt(0) + "ma";
        }
        
        words[i] += 'a'.repeat(i + 1);
    }
  
    return words.join(" ");
};