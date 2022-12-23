/* URL of this problem
 * https://leetcode.com/problems/three-consecutive-odds/description/
 *
 * @param {number[]} arr
 * @return {boolean}
 */

var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        const FirstNum = arr[i];
        const SecondNum = arr[i + 1];
        const ThirdNum = arr[i + 2];

        if (FirstNum % 2 === 1 && SecondNum % 2 === 1 && ThirdNum % 2 === 1) {
            return true;
        }
    }
    return false;
};

module.export = threeConsecutiveOdds;