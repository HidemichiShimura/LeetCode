/* URL of this problem
 * https://leetcode.com/problems/detect-capital/
 *
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function(word) {
    const AllUpperCased = word.toUpperCase();
    const AllLowerCased = word.toLowerCase();
    const FirstCharUpperCased = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();

    return word === AllUpperCased || word === AllLowerCased || word === FirstCharUpperCased;
};

module.exports = detectCapitalUse;