/* URL of this problem
 * https://leetcode.com/problems/word-pattern
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function(pattern, s) {
    const Patterns = pattern.split("");
    const Words = s.split(" ");
    const PatternWordMap = new Map();

    if (Patterns.length !== Words.length) {
        return false;
        
    // Return false if pattern and s does not make one to one correspondence
    } else if ([...new Set(Patterns)].length !== [...new Set(Words)].length) {
        return false;
    }

    for (let i = 0; i < Patterns.length; i++) {
        if (!PatternWordMap.has(Patterns[i])) {
            PatternWordMap.set(Patterns[i], Words[i]);
        }

        if (PatternWordMap.get(Patterns[i]) !== Words[i]) {
            return false;
        }
    }

    return true;
};

module.exports = wordPattern;