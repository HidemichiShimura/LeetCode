/* URL of this problem
 * https://leetcode.com/problems/maximum-score-after-splitting-a-string/
 *
 * @param {string} s
 * @return {number}
 */

var maxScore = function(s) {
    const Digits = s.split("");
    let MaxScore = 0;

    for (let i = 1; i < Digits.length; i++) {
        const Left = Digits.slice(0, i);
        const Right = Digits.slice(i);
        const LeftZero = Left.filter(Digit => Digit === '0').length;
        const RightOne = Right.filter(Digit => Digit === '1').length;
        const CurrScore = LeftZero + RightOne;

        MaxScore = Math.max(MaxScore, CurrScore);
    }

    return MaxScore;
};

module.exports = maxScore;