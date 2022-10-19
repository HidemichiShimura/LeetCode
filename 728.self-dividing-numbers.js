/*
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

/* URL of this problem
    https://leetcode.com/problems/self-dividing-numbers/
*/

var selfDividingNumbers = function(left, right) {
    const arr = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividingNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
};

const isSelfDividingNumber = function(num) {
    const str = num.toString();
    for (let i = 0; i < str.length; i++) {
        if (num % str.charAt(i) !== 0) {
            return false;
        }
    }
    return true;
}