/* URL of this problem
 * https://leetcode.com/problems/perform-string-shifts/description/
 *
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

var stringShift = function(s, shift) {
    const Shifted = [...s];
    
    for (let i = 0; i < shift.length; i++) {
        const ShiftAmount = shift[i][1];

        // 0 means left shift and 1 for right shift for shift[1][0]
        if (shift[i][0] === 0) {
            for (let j = 0; j < ShiftAmount; j++) {
                Shifted.push(Shifted.shift());
            }
        } else {
            for (let j = 0; j < ShiftAmount; j++) {
                Shifted.unshift(Shifted.pop());
            }
        }
    }

    return Shifted.join("");
};

module.exports = stringShift;