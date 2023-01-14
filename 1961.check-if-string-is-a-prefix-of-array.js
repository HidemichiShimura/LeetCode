/* URL of this problem
 * https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/description/
 *
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */

var isPrefixString = function(s, words) {
    let str = "";

    for (let i = 0; i < words.length; i++) {
        str += words[i];

        if (s === str) {
            return true;
        }
    }
    return false;
};

module.exports = isPrefixString;