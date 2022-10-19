/* URL of this problem
    https://leetcode.com/problems/add-digits/
*/

/*
 * @param {number} num
 * @return {number}
 */
 
var addDigits = function(num) {
    while (num >= 10) {
        const digits = [...num.toString()];
        let digitSum = 0;

        digits.forEach((digit) => {
            digitSum += Number(digit);
        });

        num = digitSum;
    }
    
    return num;
};