/* URL of this problem
 * https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence
 *
 * @param {number[]} arr
 * @return {boolean}
 */

var canMakeArithmeticProgression = function(arr) {
    const Sorted = [...arr].sort((a,b) => a - b);
    const ElementDiff = Math.abs(Sorted[0] - Sorted[1]);

    for (let i = 1; i < Sorted.length - 1; i++) {
        const CurrElementDiff = Math.abs(Sorted[i] - Sorted[i + 1]);

        if (CurrElementDiff !== ElementDiff) {
            return false;
        }
    }

    return true;
};

module.exports = canMakeArithmeticProgression;