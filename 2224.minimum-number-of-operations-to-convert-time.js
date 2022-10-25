/* URL of this problem
 * https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/
 *
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
 
var convertTime = function(current, correct) {
    const currentInMinute = Number(current.substring(0, 2)) * 60 + Number(current.substring(3));
    const correctInMinute = Number(correct.substring(0, 2)) * 60 + Number(correct.substring(3));
    let timeLag = correctInMinute - currentInMinute;
    let minNumOfOperation = 0;

    minNumOfOperation += Math.floor(timeLag / 60);
    timeLag %= 60;
    minNumOfOperation += Math.floor(timeLag / 15);
    timeLag %= 15;
    minNumOfOperation += Math.floor(timeLag / 5);
    timeLag %= 5;
    minNumOfOperation += timeLag;
    
    return minNumOfOperation;
};