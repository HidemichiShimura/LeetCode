/* URL of this problem
 * https://leetcode.com/problems/strobogrammatic-number
 *
 * @param {string} num
 * @return {boolean}
 */

var isStrobogrammatic = function(num) {
    const Rotated = [...num].reverse();

    for(let i = 0; i < Rotated.length; i++) {
        let RotatedDigit;

        switch (Rotated[i]) {
            case "0":
            case "1":
            case "8":
                RotatedDigit = Rotated[i];
                break;
            case "6":
                RotatedDigit = "9";
                break;
            case "9":
                RotatedDigit = "6";
                break;
        } 

        if (RotatedDigit === undefined) {
            return false;
        } else {
            Rotated[i] = RotatedDigit;
        }
    }

    return num === Rotated.join("");
};

module.exports = isStrobogrammatic;