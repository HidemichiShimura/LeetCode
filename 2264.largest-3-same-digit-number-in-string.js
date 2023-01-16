/* URL of this problem
 * https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/
 *
 * @param {string} num
 * @return {string}
 */

var largestGoodInteger = function(num) {
    const ThreeSameDigitNums = [];
    let maxGoodInt = -Infinity;

    for (let i = 0; i < num.length - 2; i++) {
        if (num.charAt(i) === num.charAt(i + 1) && num.charAt(i) === num.charAt(i + 2)) {
            ThreeSameDigitNums.push(num.substring(i, i + 3));
        }
    }
    ThreeSameDigitNums.forEach(num => {
        if (maxGoodInt < num) {
            maxGoodInt = num;
        }
    })

    return maxGoodInt >= 0 ? maxGoodInt : "";
};

module.exports = largestGoodInteger;