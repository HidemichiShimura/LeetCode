/* URL of this problem
 * https://leetcode.com/problems/check-distances-between-same-letters/description/
 *
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */

var checkDistances = function(s, distance) {
    for (let i = 0; i < distance.length; i++) {
        // The range of Lowercase English letters on the UTF-16 code table are from 97 to 122.
        // Get a matching English letter by adding each index of distance, staring from 0, and 97
        const Char = String.fromCharCode(97 + i);
        const ElementCount = CountElementInbetween(s, Char);

        if (!s.includes(Char)) {
            continue;
        }

        if (distance[i] !== ElementCount) {
            return false;
        }
    }
    return true;
};

const CountElementInbetween = (str, char) => {
    const Chars = [...str];
    const CharIndexes = [];
    
    Chars.forEach((element, idx) => {
        if (element === char) {
            CharIndexes.push(idx);
        }
    });

    // Count the number of elements in between char
    return Math.abs(CharIndexes[0] - CharIndexes[1]) - 1;
}

module.exports = checkDistances;